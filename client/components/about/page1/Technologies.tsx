import { motion } from "framer-motion";

export const Technologies = () => {
  return (
    <section className="flex flex-row justify-evenly">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="mx-2 h-16 w-16"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.7 }}
        className="mx-2 h-16 w-16"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.9 }}
        className="mx-2 h-16 w-16 invert"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.1 }}
        className="mx-2 h-16 w-16"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.3 }}
        className="mx-2 h-16 w-16"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="mx-2 h-16 w-16 invert"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      />
    </section>
  );
};
