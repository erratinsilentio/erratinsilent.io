"use client";
import { motion } from "framer-motion";

export const Square = () => {
  const junior = ["J", "u", "n", "i", "o", "r"];
  const frontend = ["F", "r", "o", "n", "t", "e", "n", "d"];
  const developer = ["D", "e", "v", "e", "l", "o", "p", "e", "r"];

  return (
    <motion.section
      initial={{ width: "100vh", height: "100vh" }}
      whileInView={{ width: "40vh", height: "40vh" }}
      transition={{ duration: 0.5 }}
      className="z-50 bg-zinc-900 p-8 text-3xl text-zinc-100 duration-300 peer-hover:-translate-x-24"
    >
      <p>
        {junior.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
      </p>
      <p className="my-1">
        {frontend.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
      </p>
      <p>
        {developer.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.7 + index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
      </p>
    </motion.section>
  );
};
