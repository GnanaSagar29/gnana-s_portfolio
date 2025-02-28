"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Palette } from "lucide-react"

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <motion.div className="relative z-10" initial="initial" whileInView="animate" viewport={{ once: true }}>
        <motion.h2 className="text-3xl font-bold mb-8 text-center" variants={fadeInUp}>
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div variants={fadeInUp}>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 text-primary" /> Full Stack Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                Proficient in building scalable web applications using modern frameworks and technologies. Experienced
                with React, Node.js, Express, and MongoDB for full-stack JavaScript development.
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="mr-2 text-primary" /> UI/UX Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                Passionate about creating intuitive and visually appealing user interfaces. Proficient in using design
                tools and implementing responsive designs.
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <motion.div variants={fadeInUp} className="mt-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <p className="mb-4">
                As a passionate and experienced Full Stack Developer, I've dedicated my career to crafting elegant and
                efficient web solutions. With a strong foundation in computer science and years of hands-on experience,
                I've developed a keen eye for detail and a deep understanding of the entire web development stack.
              </p>
              <p>
                My journey in tech has led me to work on a diverse range of projects, from small business websites to
                large-scale enterprise applications. I'm constantly learning and adapting to new technologies, always
                striving to find the best tools for each unique challenge. Whether it's optimizing database queries,
                architecting scalable backend systems, or creating smooth, responsive front-end experiences, I approach
                each task with enthusiasm and a commitment to excellence.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

