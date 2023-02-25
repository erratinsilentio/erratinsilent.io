"use client";
import { motion } from "framer-motion";

export const Text1 = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mb-6 text-center italic"
      >
        Currently, im working in a restaurant (in Poland) on different positions
        - as a waiter, delivery guy and a pizzerman.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-center italic"
      >
        I really appreciate my environment. Honestly - I learned here many new
        skills, saw many things, met wonderful people - including my girlfriend
        to this day.
      </motion.p>
    </>
  );
};
