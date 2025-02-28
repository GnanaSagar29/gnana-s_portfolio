"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <nav className="border-b sticky top-0 bg-background z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MARLPUDI GNANA SAGAR
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link href="#about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Skills
            </Link>
            <Link
              href="#projects"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="ml-2">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </nav>
  )
}

