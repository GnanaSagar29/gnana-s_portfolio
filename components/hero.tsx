"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="py-20 md:py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30 animate-gradient"></div>
      </div>
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            MARLAPUDI GNANA SAGAR
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">Software Engineer </h2>
        </motion.div>
        <motion.p
          className="max-w-2xl mx-auto mb-8 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A tech-savvy Information Technology student with strong programming expertise and a solid grasp of IT principles,
 leveraging problem-solving skills to foster innovation and technological advancement.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

