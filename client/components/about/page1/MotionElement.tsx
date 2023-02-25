"use client";
import { motion } from "framer-motion";

export const MotionElement = () => {
  return (
    <motion.article
      initial={{
        width: "40vh",
        height: "40vh",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        translateX: "-96px",
      }}
      animate={{
        width: "100vw",
        height: "60vh",
        left: 0,
        bottom: 0,
        transform: "translate(0%, -10%)",
      }}
      transition={{ duration: 2, delay: 1 }}
      className="z-0 bg-zinc-900"
    ></motion.article>
  );
};
