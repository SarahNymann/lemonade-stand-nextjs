"use client";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
  };
  
  export default function PrimaryButton({
    children,
    onClick,
    type = "button",
  }: ButtonProps) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-pink-950 text-yellow-100 px-4 py-2 rounded-full hover:opacity-90 transition cursor-pointer w-full sm:w-auto"
      >
        {children}
      </button>
    );
  }