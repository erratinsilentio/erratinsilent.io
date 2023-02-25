"use client";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

export const Arrow = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{
        scale: 1.2,
      }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeOut",
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",

        delay: 3,
      }}
      className="absolute bottom-12"
    >
      <MdKeyboardArrowDown
        style={{ color: "white", fontSize: "2rem", fontWeight: "lighter" }}
      />
    </motion.div>
  );
};
