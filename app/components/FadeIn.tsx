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
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      initial={{ opacity: 0, x: initialX, y: initialY, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}