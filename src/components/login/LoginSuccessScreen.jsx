// import { useNavigate } from "react-router-dom";

// export default function LoginSuccessScreen({ user, onSignOut }) {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-cream font-sans flex items-center justify-center">
//       <div className="bg-white border border-stone-200 rounded-4xl p-12 max-w-sm w-full text-center">
//         <div className="text-4xl mb-4">✓</div>
//         <p className="text-xs tracking-widest text-stone-400 uppercase mb-2.5">
//           Signed in
//         </p>
//         <h2 className="font-serif font-light text-2xl text-ink mb-2">
//           Welcome, {user.name}
//         </h2>
//         <p className="text-xs text-stone-500 mb-7">
//           Role: <strong className="text-ink">{user.role}</strong>
//         </p>
//         <button
//           onClick={onSignOut}
//           className="w-full py-3.5 bg-ink text-cream border-0 rounded-xl text-sm font-medium cursor-pointer mb-2.5 transition-colors hover:bg-ink-light"
//           style={{ fontFamily: "inherit" }}
//         >
//           Sign out
//         </button>
//         <button
//           onClick={() => navigate("/")}
//           className="w-full py-3.5 bg-white text-ink border border-stone-200 rounded-xl text-sm font-medium cursor-pointer transition-colors hover:border-stone-300"
//           style={{ fontFamily: "inherit" }}
//         >
//           ← Back to home
//         </button>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";

export default function LoginSuccessScreen({
  user,
  onSignOut,
  onNavigate,
  onBack,
}) {
  const navigate = useNavigate();

  const handleHome = () => {
    if (onNavigate) onNavigate("home");
    else if (onBack) onBack();
    else navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] font-['DM_Sans',sans-serif] flex items-center justify-center flex-col gap-5 px-4">
      <div className="bg-white border border-[#E2DDD8] rounded-3xl p-10 sm:p-12 max-w-[360px] w-full text-center">
        <div className="text-[40px] mb-4">✓</div>

        <p className="text-[11px] tracking-[0.18em] text-[#B09070] uppercase mb-2">
          Signed in
        </p>

        <h2 className="font-['Fraunces',serif] font-light text-[26px] text-[#1A1714] mb-2">
          Welcome, {user.name}
        </h2>

        <p className="text-[13px] text-[#9C948C] mb-7">
          Role: <strong className="text-[#1A1714]">{user.role}</strong>
        </p>

        <button
          onClick={onSignOut}
          className="w-full py-[13px] bg-[#1A1714] text-[#F7F4EF] border-none rounded-xl text-[14px] font-medium cursor-pointer font-['DM_Sans',sans-serif] hover:bg-[#2E2A26] transition-colors duration-150"
        >
          Sign out
        </button>

        <button
          onClick={handleHome}
          className="mt-2.5 w-full py-[13px] bg-white text-[#1A1714] border border-[#E2DDD8] rounded-xl text-[14px] font-medium cursor-pointer font-['DM_Sans',sans-serif] hover:border-[#C5BEB8] hover:bg-[#FDFCFB] transition-all duration-150"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );
}
