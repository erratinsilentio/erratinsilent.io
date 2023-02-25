"use client";
import { motion } from "framer-motion";
import { TextSwiper } from "./Swiper";

export const BlackBox = () => {
  return (
    <motion.section
      initial={{ width: 0, height: "50vh" }}
      whileInView={{ width: "100vw", height: "70vh" }}
      transition={{ duration: 1 }}
      className="bg-zinc-900 p-36 text-xl text-zinc-300"
    >
      <TextSwiper />
    </motion.section>
  );
};
