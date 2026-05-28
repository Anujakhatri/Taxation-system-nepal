const Buttons = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] translate-y-1 hover:translate-y-0 transition-transform",
    secondary:
      "bg-[var(--accent-teal)] text-white hover:opacity-90 translate-y-1 hover:translate-y-0 transition-transform",
    outline:
      "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary-lighter)] hover:text-white translate-y-1 hover:translate-y-0 transition-transform",

    accent:
      "bg-[var(--accent-teal)] text-white  hover:bg-[var(--accent-teal-dark)] translate-y-1 hover:translate-y-0 transition-transform",
  };

  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-lg text-lg font-bold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Buttons;
