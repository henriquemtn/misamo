"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import * as motion from "motion/react-client"

import Frameworks from "./frameworks"

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-0">
      <motion.div
        className="mb-10 text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={itemVariants}
          className="mb-3 inline-flex items-center rounded-full border border-gray-200 px-3 text-sm font-medium text-gray-800 dark:text-white"
        >
          <div className="mr-2 border-r border-gray-200 py-1 pr-2">👨🏻‍💻</div>
          <span className="py-1">
            Made by
            <Link
              href="https://www.henriquesilveira.tech"
              className="ml-1 underline transition-colors"
            >
              Henrique Silveira{" "}
            </Link>
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-gray-100"
        >
          Beautiful UI components
          <br className="hidden sm:block" />
          for your project
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300"
        >
          Free and open source animated components and effects built with React,
          Typescript, Tailwind CSS, and Motion.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-col justify-start gap-4 sm:flex-row"
        >
          <Link
            href="/components/marquee"
            className="hover:bg-primary-dark flex items-center gap-2 rounded-md bg-black px-6 py-3 text-white transition-colors dark:bg-white dark:text-black"
          >
            Browse Components
            <ChevronRight size={16} />
          </Link>
          <Link
            href="/templates"
            className="flex items-center justify-center gap-2 rounded-md px-6 py-3 text-gray-800 transition-colors hover:bg-gray-100 dark:text-white"
          >
            Browse Templates <ChevronRight size={16} />
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="mb-6 text-sm text-gray-500">
            All components built with:
          </p>
          <Frameworks />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-xl shadow-xl"
      >
        {/* Placeholder for your main product screenshot/demo */}
        <div className="relative aspect-[16/9] w-full bg-gray-200 dark:bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Product Dashboard Preview
          </div>
        </div>
      </motion.div>
    </div>
  )
}
