// import { useNavigate } from "react-router-dom";
// import { StarIcon } from "../ui/Icons";
// import { loginStats } from "../../data/demoAccounts";

// export default function LoginLeftPanel() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-ink relative overflow-hidden flex flex-col justify-between p-14">
//       {/* Decorative circles */}
//       <div
//         className="absolute -top-28 -right-20 w-96 h-96 rounded-full pointer-events-none"
//         style={{ border: "1px solid rgba(247,244,239,0.07)" }}
//       />
//       <div
//         className="absolute bottom-16 -left-24 w-72 h-72 rounded-full pointer-events-none"
//         style={{ border: "1px solid rgba(247,244,239,0.05)" }}
//       />

//       {/* Logo */}
//       <div className="flex items-center gap-2.5 relative z-10">
//         <div className="w-8 h-8 bg-amber rounded-lg flex items-center justify-center">
//           <StarIcon size={14} />
//         </div>
//         <span className="text-cream text-sm font-medium tracking-wide">
//           Mentora
//         </span>
//         <button
//           onClick={() => navigate("/")}
//           className="ml-auto text-xs cursor-pointer rounded-full px-3.5 py-1.5 transition-colors"
//           style={{
//             background: "rgba(247,244,239,0.08)",
//             border: "1px solid rgba(247,244,239,0.12)",
//             color: "rgba(247,244,239,0.6)",
//             fontFamily: "inherit",
//           }}
//         >
//           ← Home
//         </button>
//       </div>

//       {/* Copy */}
//       <div className="relative z-10 pt-10">
//         <p className="text-xs font-medium tracking-widest text-amber uppercase mb-6">
//           Mentoring platform
//         </p>
//         <h1 className="font-serif font-light text-5xl leading-[1.12] text-cream mb-5">
//           Growth happens
//           <br />
//           through <em className="italic text-amber">real</em>
//           <br />
//           connection.
//         </h1>
//         <p
//           className="text-sm max-w-xs leading-relaxed"
//           style={{ color: "rgba(247,244,239,0.5)" }}
//         >
//           A structured space where mentors and mentees build meaningful, lasting
//           working relationships.
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="flex gap-8 relative z-10">
//         {loginStats.map((s) => (
//           <div
//             key={s.label}
//             className="pt-4"
//             style={{ borderTop: "1px solid rgba(247,244,239,0.12)" }}
//           >
//             <div className="font-serif font-light text-3xl text-cream leading-none mb-1">
//               {s.num}
//             </div>
//             <div
//               className="text-xs tracking-wide"
//               style={{ color: "rgba(247,244,239,0.4)" }}
//             >
//               {s.label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { StarIcon } from "../ui/Icons";
import { loginStats } from "../../data/demoAccounts";

export default function LoginLeftPanel({ onNavigate, onBack }) {
  const navigate = useNavigate();

  const handleHome = () => {
    if (onNavigate) onNavigate("home");
    else if (onBack) onBack();
    else navigate("/");
  };

  return (
    <div className="hidden lg:flex bg-[#1A1714] relative overflow-hidden flex-col justify-between p-14">
      {/* Decorative circles */}
      <div className="absolute -top-30 -right-20 w-95 h-95 rounded-full border border-[rgba(247,244,239,0.07)] pointer-events-none" />
      <div className="absolute bottom-15 -left-25 w-75 h-75 rounded-full border border-[rgba(247,244,239,0.05)] pointer-events-none" />

      {/* Logo */}
      <div className="flex items-center gap-2.5 relative z-10">
        <div className="w-8 h-8 bg-[#E8B86D] rounded-[9px] flex items-center justify-center">
          <StarIcon size={14} />
        </div>
        <span className="text-[#F7F4EF] text-[15px] font-medium tracking-[0.01em]">
          Mentora
        </span>
        <button
          onClick={handleHome}
          className="ml-auto bg-[rgba(247,244,239,0.08)] border border-[rgba(247,244,239,0.12)] text-[rgba(247,244,239,0.6)] rounded-full px-3.5 py-1.5 text-[12px] cursor-pointer font-['DM_Sans',sans-serif] hover:bg-[rgba(247,244,239,0.12)] transition-colors duration-150"
        >
          ← Home
        </button>
      </div>

      {/* Copy */}
      <div className="relative z-10 pt-10">
        <p className="text-[11px] font-medium tracking-[0.18em] text-[#E8B86D] uppercase mb-6">
          Mentoring platform
        </p>
        <h1 className="font-['Fraunces',serif] font-light text-[44px] leading-[1.12] text-[#F7F4EF] mb-5">
          Growth happens
          <br />
          through <em className="italic text-[#E8B86D]">real</em>
          <br />
          connection.
        </h1>
        <p className="text-[14px] text-[rgba(247,244,239,0.5)] leading-[1.7] max-w-[320px]">
          A structured space where mentors and mentees build meaningful, lasting
          working relationships.
        </p>
      </div>

      {/* Stats */}
      <div className="flex gap-8 relative z-10">
        {loginStats.map((s) => (
          <div
            key={s.label}
            className="border-t border-[rgba(247,244,239,0.12)] pt-4"
          >
            <div className="font-['Fraunces',serif] text-[28px] font-light text-[#F7F4EF] leading-none mb-1">
              {s.num}
            </div>
            <div className="text-[11px] text-[rgba(247,244,239,0.4)] tracking-[0.08em]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
