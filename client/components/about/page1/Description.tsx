import { Technologies } from "./Technologies";
import { Text } from "./Text";

export const Description = () => {
  return (
    <article className="absolute left-1/2 top-1/2 z-40 h-3/5 w-2/3 -translate-x-1/2 -translate-y-1/2 border-r-2 border-b-2 border-emerald-900 bg-zinc-900 p-10 text-zinc-300">
      <Text />
      <Technologies />
    </article>
  );
};
