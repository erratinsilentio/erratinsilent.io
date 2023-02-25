import { BlackBox } from "./BlackBox";

export const AboutPageTwo = () => {
  return (
    <section className="min-w-screen relative z-30 flex min-h-screen items-center justify-center bg-cyan-900">
      <p className="absolute top-10 left-10 text-3xl font-light">MY STORY</p>
      <BlackBox />
    </section>
  );
};
