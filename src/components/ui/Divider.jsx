export default function Divider({ label }) {
  return (
    <div className="flex items-center gap-3 my-5 text-stone-300 text-xs tracking-wide">
      <div className="flex-1 h-px bg-stone-200" />
      {label}
      <div className="flex-1 h-px bg-stone-200" />
    </div>
  );
}
