"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { BarChart3, Loader2 } from "lucide-react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode: "login" | "signup"
}

export function AuthModal({ isOpen, onClose, initialMode }: AuthModalProps) {
  const router = useRouter()
  const [mode, setMode] = useState<"login" | "signup">(initialMode)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      onClose()
      router.push("/dashboard")
    }, 1500)
  }

  const useTestAccount = () => {
    setFormData({
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    })
  }

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="h-8 w-8 text-[#00e6e6]" />
          </div>
          <DialogTitle className="text-center text-2xl">
            {mode === "login" ? "Welcome back" : "Create an account"}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            {mode === "login"
              ? "Enter your credentials to access your account"
              : "Sign up to get started with ProfitVista"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700"
                required
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#00e6e6] text-black hover:bg-[#00b3b3]" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {mode === "login" ? "Logging in..." : "Signing up..."}
              </>
            ) : mode === "login" ? (
              "Log in"
            ) : (
              "Sign up"
            )}
          </Button>
          <Button type="button" variant="outline" className="w-full" onClick={useTestAccount}>
            Use Test Account
          </Button>
          <div className="text-center text-sm">
            <span className="text-gray-400">
              {mode === "login" ? "Don't have an account?" : "Already have an account?"}
            </span>{" "}
            <button type="button" className="text-[#00e6e6] hover:underline" onClick={toggleMode}>
              {mode === "login" ? "Sign up" : "Log in"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

