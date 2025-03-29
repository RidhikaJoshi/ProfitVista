"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  LineChart,
  PieChart,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AuthModal } from "@/components/auth-modal"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"


export default function HomePage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const testimonialRef = useRef<HTMLDivElement>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      quote:
        "ProfitVista has transformed how we analyze our sales data. The insights we've gained have directly contributed to a 27% increase in our quarterly revenue.",
      name: "Sarah Johnson",
      role: "Sales Director, TechCorp",
      avatar: "SJ",
      rating: 5,
    },
    {
      quote:
        "The dashboard is incredibly intuitive. I can quickly identify trends and make data-driven decisions that have improved our conversion rates by 15%.",
      name: "Michael Chen",
      role: "E-commerce Manager, RetailPlus",
      avatar: "MC",
      rating: 5,
    },
    {
      quote:
        "We've been able to identify our best-performing products and optimize our inventory management, resulting in a 30% reduction in carrying costs.",
      name: "Jessica Williams",
      role: "Operations Lead, GlobalMart",
      avatar: "JW",
      rating: 5,
    },
    {
      quote:
        "The customer segmentation tools have revolutionized our marketing strategy. We're now targeting the right customers with the right products.",
      name: "David Rodriguez",
      role: "Marketing Director, BrandX",
      avatar: "DR",
      rating: 4,
    },
    {
      quote:
        "ProfitVista's real-time alerts have helped us identify and capitalize on sales opportunities we would have otherwise missed.",
      name: "Emma Thompson",
      role: "CEO, StartupInnovate",
      avatar: "ET",
      rating: 5,
    },
  ]
  const openLoginModal = () => {
    setAuthMode("login")
    setIsAuthModalOpen(true)
  }

  const openSignupModal = () => {
    setAuthMode("signup")
    setIsAuthModalOpen(true)
  }

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setAutoplay(false)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setAutoplay(false)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <BarChart3 className="h-6 w-6 text-[#00e6e6]" />
            </motion.div>
            <span className="text-xl font-bold">ProfitVista</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={openLoginModal}>
              Log in
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]" onClick={openSignupModal}>
                Sign up
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 md:gap-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transform Your <span className="text-[#00e6e6]">Sales Data</span> Into Actionable Insights
            </h1>
            <p className="text-lg text-gray-400">
              ProfitVista helps you visualize, analyze, and optimize your sales performance with powerful dashboards and
              real-time analytics.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]" size="lg" onClick={openSignupModal}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg">
                  View Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[300px] w-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 shadow-xl sm:h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00e6e6]/10 to-purple-900/10"></div>
              <div className="grid h-full grid-cols-2 grid-rows-2 gap-4 p-6">
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 230, 230, 0.2)" }}
                  className="rounded-md bg-gray-800/80 p-4"
                >
                  <LineChart className="h-6 w-6 text-[#00e6e6]" />
                  <p className="mt-2 text-sm font-medium">Revenue Trends</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 230, 230, 0.2)" }}
                  className="rounded-md bg-gray-800/80 p-4"
                >
                  <BarChart3 className="h-6 w-6 text-[#00e6e6]" />
                  <p className="mt-2 text-sm font-medium">Sales Performance</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 230, 230, 0.2)" }}
                  className="rounded-md bg-gray-800/80 p-4"
                >
                  <PieChart className="h-6 w-6 text-[#00e6e6]" />
                  <p className="mt-2 text-sm font-medium">Category Distribution</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 230, 230, 0.2)" }}
                  className="rounded-md bg-gray-800/80 p-4"
                >
                  <Users className="h-6 w-6 text-[#00e6e6]" />
                  <p className="mt-2 text-sm font-medium">Customer Insights</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900/50 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold">Key Features</h2>
            <p className="mt-4 text-gray-400">Everything you need to analyze and optimize your sales performance</p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: <BarChart3 className="h-5 w-5 text-[#00e6e6]" />,
                title: "Interactive Dashboards",
                description:
                  "Customizable dashboards with drag-and-drop widgets to visualize your most important metrics.",
              },
              {
                icon: <LineChart className="h-5 w-5 text-[#00e6e6]" />,
                title: "Advanced Analytics",
                description:
                  "Powerful analytics tools to identify trends, forecast future performance, and uncover insights.",
              },
              {
                icon: <Users className="h-5 w-5 text-[#00e6e6]" />,
                title: "Customer Insights",
                description:
                  "Understand your customers better with detailed profiles, behavior analysis, and segmentation.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 230, 230, 0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-gray-800 bg-gray-900/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {feature.icon}
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold">What Our Users Say</h2>
            <p className="mt-4 text-gray-400">Trusted by sales teams around the world</p>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            {/* Testimonial Navigation */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800/50 hover:bg-gray-800 text-white"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800/50 hover:bg-gray-800 text-white"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>

            {/* Testimonial Cards */}
            <div className="relative overflow-hidden">
              <div className="flex flex-col items-center" ref={testimonialRef}>
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeTestimonial === i ? 1 : 0,
                      x: activeTestimonial === i ? 0 : activeTestimonial > i ? -100 : 100,
                      scale: activeTestimonial === i ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-full ${activeTestimonial === i ? "block" : "hidden"}`}
                  >
                    <Card className="border-gray-800 bg-gray-900/50 overflow-hidden">
                      <CardContent className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                          <div className="flex-shrink-0 flex flex-col items-center">
                            <div className="relative">
                              <Avatar
                                className="h-24 w-24 border-2 border-[#00e6e6]"
                                fallback={testimonial.avatar}
                              />
                              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-900 rounded-full p-1 border border-gray-800">
                                <Quote className="h-5 w-5 text-[#00e6e6]" />
                              </div>
                            </div>
                            <div className="mt-6 flex items-center">
                              {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                  key={index}
                                  className={`h-4 w-4 ${
                                    index < testimonial.rating ? "text-[#00e6e6] fill-[#00e6e6]" : "text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="flex-1 text-center md:text-left">
                            <p className="text-lg md:text-xl text-gray-200 italic leading-relaxed">
                              "{testimonial.quote}"
                            </p>
                            <div className="mt-6">
                              <p className="font-semibold text-white">{testimonial.name}</p>
                              <p className="text-sm text-gray-400">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    activeTestimonial === i ? "w-8 bg-[#00e6e6]" : "w-2 bg-gray-600"
                  }`}
                  onClick={() => {
                    setActiveTestimonial(i)
                    setAutoplay(false)
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center mt-6 md:hidden gap-4">
              <Button variant="outline" size="sm" className="border-gray-800" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button variant="outline" size="sm" className="border-gray-800" onClick={nextTestimonial}>
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900/50 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-400">Everything you need to know about ProfitVista</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does ProfitVista help improve sales performance?",
                  answer:
                    "ProfitVista provides comprehensive analytics and visualizations that help you identify trends, spot opportunities, and make data-driven decisions. Our dashboard highlights your best-performing products, top sales representatives, and most valuable customers, allowing you to focus your efforts where they'll have the biggest impact.",
                },
                {
                  question: "Is my data secure with ProfitVista?",
                  answer:
                    "Absolutely. We take data security very seriously. All data is encrypted both in transit and at rest, and we employ industry-leading security practices to ensure your information remains protected. We're also compliant with major data protection regulations.",
                },
                {
                  question: "Can I integrate ProfitVista with my existing tools?",
                  answer:
                    "Yes, ProfitVista offers seamless integration with popular CRM systems, e-commerce platforms, and other business tools. Our API allows for custom integrations, ensuring that your sales data flows smoothly between all your systems.",
                },
                {
                  question: "How long does it take to set up ProfitVista?",
                  answer:
                    "Most users can set up their ProfitVista dashboard in less than an hour. Our intuitive interface and guided setup process make it easy to connect your data sources and customize your dashboard to suit your specific needs.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-800">
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold">Ready to transform your sales analytics?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Join thousands of sales teams who use ProfitVista to gain insights, boost performance, and drive growth.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#00e6e6] text-black hover:bg-[#00b3b3]" size="lg" onClick={openSignupModal}>
                  Get Started Free
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg">
                  Schedule a Demo
                </Button>
              </motion.div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
              <CheckCircle className="h-4 w-4 text-[#00e6e6]" />
              <span>No credit card required</span>
              <span className="mx-2 hidden sm:inline-block">•</span>
              <CheckCircle className="h-4 w-4 text-[#00e6e6]" />
              <span>14-day free trial</span>
              <span className="mx-2 hidden sm:inline-block">•</span>
              <CheckCircle className="h-4 w-4 text-[#00e6e6]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-[#00e6e6]" />
                <span className="text-xl font-bold">ProfitVista</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Transforming sales data into actionable insights for businesses worldwide.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00e6e6] transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} ProfitVista. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} initialMode={authMode} />
    </div>
  )
}

