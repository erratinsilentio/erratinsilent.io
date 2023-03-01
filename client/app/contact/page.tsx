import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Contact() {
  return (
    <main className={montserrat.className}>
      <section className="min-w-screen relative z-0 min-h-screen bg-emerald-900">
        Contact
      </section>
    </main>
  );
}
