"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "VIT - COMPLAINTS",
    description: "A full-stack Application for the college where they can post their complaints.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/GnanaSagar29/VIT-Complaints",
  },
  {
    title: "FINGENIUS",
    description: "A Finacial Chat Bot Which help the people to Save their Penny.",
    technologies: ["React", "Machine Learning", "Python", "OPEN API"],
    github: "https://github.com/GnanaSagar29/Fin-Genius",
  },
  {
    title: "MUSIC PLAYER",
    description: "Musice Player with some songs to listen.",
    technologies: ["Javascript", "D3.js", "Node.js", "OpenWeatherMap API"],
    github: "https://github.com/GnanaSagar29/Music-Player",
  },
  {
    title: "RESUME GENERATOR",
    description: "Generates the Resume based on the Given Details.",
    technologies: ["Javascript"],
    github: "https://github.com/GnanaSagar29/Resume-Generator",
  },
  {
    title: "INMATE COLLECTION & DATA SCRAPPING AND ANALYSIS",
    description: "Developed a Real-Application to US Judiciary system by Gathering Data",
    technologies: ["Full stack", "Javascript", "Playwright framework", "Data Mining"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <motion.div className="relative z-10" initial="initial" whileInView="animate" viewport={{ once: true }}>
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies &&
                      project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

