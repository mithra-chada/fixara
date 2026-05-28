"use client";

import { motion } from "framer-motion";

interface BlurInProps {
  text: string;
  className?: string;
}

export default function BlurIn({ text, className = "" }: BlurInProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    hidden: { filter: "blur(12px)", opacity: 0 },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          className="inline-block mr-[0.25em] last:mr-0"
          variants={childVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
