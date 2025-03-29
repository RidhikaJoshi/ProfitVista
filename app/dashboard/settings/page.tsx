"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, CreditCard, Globe, Lock, Save, User } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-400">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-800">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline-block">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="account" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span className="hidden sm:inline-block">Account</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline-block">Billing</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline-block">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline-block">Appearance</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6 space-y-6">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription className="text-gray-400">
                Update your personal information and profile settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" className="border-gray-800 bg-gray-800" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="john@example.com" className="border-gray-800 bg-gray-800" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="Acme Inc" className="border-gray-800 bg-gray-800" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="Sales Manager" className="border-gray-800 bg-gray-800" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself"
                  className="min-h-[100px] border-gray-800 bg-gray-800"
                  defaultValue="Sales professional with over 10 years of experience in the technology sector."
                />
              </div>

              <div className="flex justify-end">
                <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="mt-6 space-y-6">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle>Account Security</CardTitle>
              <CardDescription className="text-gray-400">Update your password and security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" className="border-gray-800 bg-gray-800" />
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" className="border-gray-800 bg-gray-800" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" className="border-gray-800 bg-gray-800" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between rounded-lg border border-gray-800 p-4">
                  <div className="space-y-0.5">
                    <p className="font-medium">Authenticator App</p>
                    <p className="text-sm text-gray-400">Use an authenticator app to generate one-time codes</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-gray-800 p-4">
                  <div className="space-y-0.5">
                    <p className="font-medium">Text Message</p>
                    <p className="text-sm text-gray-400">Receive a code via SMS to verify your identity</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="mt-6 space-y-6">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription className="text-gray-400">
                Manage your billing details and payment methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Methods</h3>
                <div className="flex items-center justify-between rounded-lg border border-gray-800 p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-16 rounded bg-gray-800"></div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-gray-400">Expires 12/2024</p>
                    </div>
                  </div>
                  <Button variant="outline" className="border-gray-800">
                    Edit
                  </Button>
                </div>
                <Button variant="outline" className="border-gray-800">
                  Add Payment Method
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Billing Address</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="address-line1">Address Line 1</Label>
                    <Input id="address-line1" className="border-gray-800 bg-gray-800" defaultValue="123 Main St" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address-line2">Address Line 2</Label>
                    <Input id="address-line2" className="border-gray-800 bg-gray-800" defaultValue="Suite 100" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" className="border-gray-800 bg-gray-800" defaultValue="San Francisco" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" className="border-gray-800 bg-gray-800" defaultValue="CA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" className="border-gray-800 bg-gray-800" defaultValue="94103" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger className="border-gray-800 bg-gray-800">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent className="border-gray-800 bg-gray-900">
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription className="text-gray-400">Manage how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-medium">Sales Reports</p>
                      <p className="text-sm text-gray-400">Receive daily, weekly, or monthly sales reports</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-medium">New Orders</p>
                      <p className="text-sm text-gray-400">Get notified when new orders are placed</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-medium">Inventory Alerts</p>
                      <p className="text-sm text-gray-400">Get notified when products are low in stock</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-gray-400">Receive updates about marketing campaigns</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Push Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-medium">Real-time Sales Alerts</p>
                      <p className="text-sm text-gray-400">Get notified in real-time when sales occur</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-medium">Performance Milestones</p>
                      <p className="text-sm text-gray-400">Get notified when you reach sales milestones</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="mt-6 space-y-6">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription className="text-gray-400">Customize how ProfitVista looks and feels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Theme</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-20 w-full rounded-md border-2 border-[#00e6e6] bg-black p-2">
                      <div className="h-4 w-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm font-medium">Dark (Default)</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-20 w-full rounded-md border border-gray-800 bg-white p-2">
                      <div className="h-4 w-full rounded bg-gray-200"></div>
                    </div>
                    <p className="text-sm font-medium">Light</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-20 w-full rounded-md border border-gray-800 bg-gradient-to-r from-purple-900 to-blue-900 p-2">
                      <div className="h-4 w-full rounded bg-gray-800/50"></div>
                    </div>
                    <p className="text-sm font-medium">Midnight</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Accent Color</h3>
                <div className="grid grid-cols-5 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-[#00e6e6]"></div>
                    <p className="text-xs">Turquoise</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 rounded-full border border-gray-800 bg-purple-500"></div>
                    <p className="text-xs">Purple</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 rounded-full border border-gray-800 bg-blue-500"></div>
                    <p className="text-xs">Blue</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 rounded-full border border-gray-800 bg-green-500"></div>
                    <p className="text-xs">Green</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 rounded-full border border-gray-800 bg-orange-500"></div>
                    <p className="text-xs">Orange</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Dashboard Layout</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-20 w-full rounded-md border-2 border-[#00e6e6] bg-gray-900 p-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-4 w-full rounded bg-gray-800"></div>
                        <div className="h-4 w-full rounded bg-gray-800"></div>
                        <div className="h-4 w-full rounded bg-gray-800"></div>
                        <div className="h-4 w-full rounded bg-gray-800"></div>
                      </div>
                    </div>
                    <p className="text-sm font-medium">Grid (Default)</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-20 w-full rounded-md border border-gray-800 bg-gray-900 p-2">
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded bg-gray-800"></div>
                        <div className="h-4 w-full rounded bg-gray-800"></div>
                        <div className="h-4 w-full rounded bg-gray-800"></div>
                      </div>
                    </div>
                    <p className="text-sm font-medium">List</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

