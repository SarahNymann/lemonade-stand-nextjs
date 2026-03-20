type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
  };
  
  export default function SecondaryButton({
    children,
    onClick,
    type = "button",
  }: ButtonProps) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="inline-flex items-center gap-2 border-2 border-pink-950 text-pink-950 px-4 py-2 rounded-full hover:bg-yellow-100 transition cursor-pointer w-full sm:w-auto"
      >
        {children}
      </button>
    );
  }