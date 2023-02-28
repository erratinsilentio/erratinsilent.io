import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Projects() {
  return (
    <main className={montserrat.className}>
      <section className="min-w-screen relative z-0 min-h-screen bg-emerald-900">
        Projects
      </section>
    </main>
  );
}
