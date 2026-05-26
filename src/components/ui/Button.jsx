// variant: "primary" | "secondary" | "amber"
export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium transition-all duration-150 font-sans cursor-pointer border-0";

  const variants = {
    primary: "bg-ink text-cream hover:bg-ink-light",
    secondary:
      "bg-white text-ink border border-stone-200 hover:border-stone-300 hover:bg-stone-50",
    amber: "bg-amber text-ink hover:bg-amber-hover",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
