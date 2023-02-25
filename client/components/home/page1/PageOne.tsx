import { Arrow } from "./Arrow";
import { Logo } from "./Logo";

export const PageOne = () => {
  return (
    <main className="min-w-screen relative flex min-h-screen items-center justify-center">
      <Logo />
      <Arrow />
    </main>
  );
};
