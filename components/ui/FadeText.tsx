"use client";

import { motion } from "framer-motion";
import React from "react";

interface FadeTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeText({ children, className = "" }: FadeTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
