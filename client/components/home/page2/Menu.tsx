"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const Menu = () => {
  return (
    <>
      <motion.section
        initial={{ minWidth: "50vw", minHeight: "100vh" }}
        whileInView={{ minWidth: "75vh", minHeight: "30vh" }}
        whileHover={{ minHeight: "25vh" }}
        transition={{ duration: 0.45 }}
        className="group peer absolute z-20 flex justify-end bg-rose-300"
      >
        <article className="hidden w-2/5 flex-col p-5 group-hover:flex">
          <Link href={"/about"}>
            <p className="cursor-pointer hover:text-emerald-700">01. About</p>
          </Link>
          <Link href={"/projects"}>
            <p className="my-5 cursor-pointer hover:text-emerald-700">
              02. Projects
            </p>
          </Link>
          <Link href={"/contact"}>
            <p className="cursor-pointer hover:text-emerald-700">03. Contact</p>
          </Link>
        </article>
      </motion.section>
    </>
  );
};
