"use client"

import { motion } from "framer-motion"

export default function FadeIn({
  children,
  direction = "up",
}: {
  children: React.ReactNode
  direction?: "up" | "left" | "right"
}) {
  let initialX = 0
  let initialY = 30

  if (direction === "left") {
    initialX = -50
    initialY = 0
  }

  if (direction === "right") {
    initialX = 50
    initialY = 0
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}