"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <motion.div className="relative z-10" initial="initial" whileInView="animate" viewport={{ once: true }}>
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-primary" />
                  <span>marlapudi.gnanasagar29@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  <span>+91 834141**72</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                  <span>Bhimavarm, Andhra Pradesh</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input id="name" placeholder="Your Name" />
                  <Input id="email" placeholder="Your Email" type="email" />
                  <Textarea id="message" placeholder="Your Message" rows={4} />
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Send Message</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

