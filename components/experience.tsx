"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "BLUMIN LLP",
    period: "AUG - OCT (2024)",
    description:
      "Lead developer for high-profile projects, mentoring junior developers, and implementing best practices for scalable architecture.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <motion.div className="relative z-10" initial="initial" whileInView="animate" viewport={{ once: true }}>
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

