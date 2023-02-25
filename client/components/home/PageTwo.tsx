import { Menu } from "./Menu";
import { Square } from "./Square";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const PageTwo = () => {
  return (
    <main
      className={`${montserrat.className} min-w-screen relative z-0 flex min-h-screen items-center justify-center bg-emerald-900`}
    >
      <Menu />
      <Square />
    </main>
  );
};
