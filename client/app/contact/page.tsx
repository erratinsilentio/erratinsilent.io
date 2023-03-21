import { ContactPage } from "@/components/contact/ContactPage";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Contact() {
  return (
    <main className={montserrat.className}>
      <ContactPage />
    </main>
  );
}
