"use client";

import { motion } from "framer-motion";

interface WordPullUpProps {
  text: string;
  className?: string;
}

export default function WordPullUp({ text, className = "" }: WordPullUpProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const childVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
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
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
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
