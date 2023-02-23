import { Inter } from "@next/font/google";
import { motion, useScroll } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { scrollY } = useScroll();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-3xl text-emerald-400">erratinsilentio</div>
    </main>
  );
}
