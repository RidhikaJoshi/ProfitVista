import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define TypeScript interface for sales data
interface SalesData {
    Total_Revenue: number;
    Total_Sales: number;
    Monthly_Growth: number;
    Conversion_Rate: number;
    Avg_Order_Value: number;
    Acquiring_Clients: number;
}

// Initial state
interface SalesState {
    data: SalesData | null;
    loading: boolean;
}

const initialState: SalesState = {
    data: null,
    loading: false,
};

// Async thunk to fetch sales data from API
export const fetchSalesData = createAsyncThunk<SalesData>(
    "sales/fetchSales",
    async () => {
        const response = await fetch("https://profit-vista.ridhikajoshi.me/api/sales");
        return response.json();
    }
);

const salesSlice = createSlice({
    name: "sales",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSalesData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSalesData.fulfilled, (state, action: PayloadAction<SalesData>) => {
                state.loading = false;
                state.data = action.payload;
            });
    },
});

export default salesSlice.reducer;
