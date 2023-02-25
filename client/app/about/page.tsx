import { AboutPageOne } from "@/components/about/page1/PageOne";
import { AboutPageTwo } from "@/components/about/page2/PageTwo";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function About() {
  return (
    <main className={montserrat.className}>
      <p className="fixed top-10 right-10 z-50 text-3xl mix-blend-color-burn">
        01. About
      </p>
      <AboutPageOne />
      <AboutPageTwo />
    </main>
  );
}
