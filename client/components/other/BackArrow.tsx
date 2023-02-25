"use client";
import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const BackArrow = () => {
  const router = useRouter();
  return (
    <AiOutlineArrowLeft
      style={{
        position: "fixed",
        right: "40px",
        bottom: "40px",
        zIndex: "50",
        fontSize: "2rem",
      }}
      className="cursor-pointer duration-200 hover:scale-125"
      onClick={() => router.back()}
    />
  );
};
