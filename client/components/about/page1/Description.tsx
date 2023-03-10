"use client";
import { Technologies } from "./Technologies";
import { Text } from "./Text";
import { motion } from "framer-motion";

export const Description = () => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="absolute left-1/2 top-1/2 z-40 h-3/5 w-2/3 -translate-x-1/2 -translate-y-1/2 border-r-2 border-b-2 border-emerald-900 bg-zinc-900 p-10 text-zinc-300"
    >
      <Text />
      <Technologies />
    </motion.article>
  );
};
