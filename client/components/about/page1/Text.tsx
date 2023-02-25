"use client";
import { motion } from "framer-motion";

export const Text = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mb-5 text-xl"
      >
        Welcome 👋
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="mb-3 text-xl"
      >
        My name is Kacper, I am a Junior Frontend Developer from Poland.{" "}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="mb-5 text-xl"
      >
        Since a kid I always loved to express myself,{" "}
        <span className="italic underline hover:text-yellow-300">
          web development
        </span>{" "}
        is just another way for me to dive deep into a process of{" "}
        <span className="italic underline hover:text-yellow-300">creation</span>
        .
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="mb-12 text-xl italic"
      >
        Below you can find a list of technologies I am actively using and
        learning:
      </motion.p>
    </>
  );
};
