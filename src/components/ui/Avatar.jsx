export default function Avatar({ initials, color, size = 36 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 700,
        fontSize: size * 0.35,
        flexShrink: 0,
        fontFamily: "'DM Sans', sans-serif",
        boxShadow: `0 2px 8px ${color}55`,
      }}
    >
      {initials}
    </div>
  );
}
