"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Node.js", level: "Advanced" },
  { name: "Express", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "JAVA", level: "Intermediate" },
  { name: "Google Firebase", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <motion.div className="relative z-10" initial="initial" whileInView="animate" viewport={{ once: true }}>
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <Badge variant="outline" className="mb-2 bg-primary/10 text-primary border-primary/50">
                  {skill.level}
                </Badge>
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

