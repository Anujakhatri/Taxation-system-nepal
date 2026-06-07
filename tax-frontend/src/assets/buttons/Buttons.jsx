const Buttons = ({ children, variant = "accent", className = "", ...props }) => {
  const base =
    "px-6 py-3 rounded-xl font-bold text-sm cursor-pointer transition-all duration-300 ease-in-out";

  const variants = {
    accent:
      "bg-[var(--accent-teal)] text-white hover:brightness-110 hover:shadow-lg",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--primary-dark)]",
  };

  return (
    <button className={`${base} ${variants[variant] || ""} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Buttons;
