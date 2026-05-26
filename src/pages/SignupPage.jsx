// // import Button from "../ui/Button";

// // const inputClass =
// //   "w-full px-4 py-3 border border-stone-200 rounded-xl text-sm font-sans outline-none text-ink focus:border-stone-400 transition-colors";

// // export default function SignupPage({ onBack }) {
// //   return (
// //     <div className="min-h-screen bg-cream font-sans flex items-center justify-center">
// //       <div className="bg-white border border-stone-200 rounded-4xl p-12 w-full max-w-sm text-center">
// //         <p className="text-xs tracking-widest text-stone-400 uppercase mb-3">
// //           Join Mentora
// //         </p>
// //         <h2 className="font-serif font-light text-3xl text-ink mb-8">
// //           Create account
// //         </h2>

// //         <div className="flex flex-col gap-3.5 mb-6">
// //           <input placeholder="Full name" className={inputClass} />
// //           <input placeholder="Email" className={inputClass} />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className={inputClass}
// //           />
// //         </div>

// //         <Button variant="primary" className="w-full justify-center mb-4">
// //           Create account
// //         </Button>
// //         <Button
// //           variant="secondary"
// //           className="w-full justify-center"
// //           onClick={onBack}
// //         >
// //           ← Back to home
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function SignupPage({ onNavigate, onBack }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }
//     if (password.length < 8) {
//       setError("Password must be at least 8 characters.");
//       return;
//     }
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setError(
//         "Sign up is not available in demo mode. Please use the login page with a demo account.",
//       );
//     }, 600);
//   };

//   const inputClass =
//     "w-full px-4 py-3 bg-white border border-[#E2DDD8] rounded-xl text-[14px] text-[#1A1714] outline-none transition-colors duration-150 font-['DM_Sans',sans-serif] focus:border-[#1A1714]";

//   return (
//     <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] bg-[#F7F4EF] font-['DM_Sans',sans-serif] text-[#1A1714] overflow-x-hidden">
//       {/* ── Left dark panel ── */}
//       <div className="hidden lg:flex bg-[#1A1714] relative overflow-hidden flex-col justify-between p-14">
//         {/* Decorative circles */}
//         <div className="absolute top-[-120px] -right-20 w-95 h-95 rounded-full border border-[rgba(247,244,239,0.07)] pointer-events-none" />
//         <div className="absolute bottom-15 -left-25 w-75 h-75 rounded-full border border-[rgba(247,244,239,0.05)] pointer-events-none" />

//         {/* Logo */}
//         <div className="flex items-center gap-2.5 relative z-10">
//           <div className="w-8 h-8 bg-[#E8B86D] rounded-[9px] flex items-center justify-center">
//             <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
//               <path
//                 d="M8 2L10.5 6.5H13.5L11 9.5L12 13.5L8 11.5L4 13.5L5 9.5L2.5 6.5H5.5L8 2Z"
//                 fill="#1A1714"
//               />
//             </svg>
//           </div>
//           <span className="text-[#F7F4EF] text-[15px] font-medium tracking-[0.01em]">
//             Mentora
//           </span>
//           {(onNavigate || onBack) && (
//             <button
//               onClick={() => (onNavigate ? onNavigate("home") : onBack())}
//               className="ml-auto bg-[rgba(247,244,239,0.08)] border border-[rgba(247,244,239,0.12)] text-[rgba(247,244,239,0.6)] rounded-full px-3.5 py-1.5 text-[12px] cursor-pointer font-['DM_Sans',sans-serif] hover:bg-[rgba(247,244,239,0.12)] transition-colors duration-150"
//             >
//               ← Home
//             </button>
//           )}
//         </div>

//         {/* Copy */}
//         <div className="relative z-10 pt-10">
//           <p className="text-[11px] font-medium tracking-[0.18em] text-[#E8B86D] uppercase mb-6">
//             Mentoring platform
//           </p>
//           <h1 className="font-['Fraunces',serif] font-light text-[44px] leading-[1.12] text-[#F7F4EF] mb-5">
//             Your journey
//             <br />
//             begins with <em className="italic text-[#E8B86D]">one</em>
//             <br />
//             step.
//           </h1>
//           <p className="text-[14px] text-[rgba(247,244,239,0.5)] leading-[1.7] max-w-[320px]">
//             Join thousands of mentors and mentees building meaningful, lasting
//             working relationships.
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="flex gap-8 relative z-10">
//           {[
//             { num: "2.4k", label: "Active pairs" },
//             { num: "94%", label: "Satisfaction" },
//             { num: "180+", label: "Organizations" },
//           ].map((s) => (
//             <div
//               key={s.label}
//               className="border-t border-[rgba(247,244,239,0.12)] pt-4"
//             >
//               <div className="font-['Fraunces',serif] text-[28px] font-light text-[#F7F4EF] leading-none mb-1">
//                 {s.num}
//               </div>
//               <div className="text-[11px] text-[rgba(247,244,239,0.4)] tracking-[0.08em]">
//                 {s.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Right form panel ── */}
//       <div className="bg-[#F7F4EF] flex flex-col justify-center items-center lg:items-start px-5 sm:px-10 lg:px-14 py-14">
//         {/* Mobile logo */}
//         <div className="flex lg:hidden items-center gap-2.5 mb-10 w-full max-w-90">
//           <div className="w-8 h-8 bg-[#E8B86D] rounded-[9px] flex items-center justify-center">
//             <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
//               <path
//                 d="M8 2L10.5 6.5H13.5L11 9.5L12 13.5L8 11.5L4 13.5L5 9.5L2.5 6.5H5.5L8 2Z"
//                 fill="#1A1714"
//               />
//             </svg>
//           </div>
//           <span className="text-[#1A1714] text-[15px] font-medium tracking-[0.01em]">
//             Mentora
//           </span>
//           {(onNavigate || onBack) && (
//             <button
//               onClick={() => (onNavigate ? onNavigate("home") : onBack())}
//               className="ml-auto text-[12px] text-[#B09070] border border-[#E2DDD8] rounded-full px-3.5 py-1.5 cursor-pointer font-['DM_Sans',sans-serif] hover:border-[#C5BEB8] transition-colors duration-150"
//             >
//               ← Home
//             </button>
//           )}
//         </div>

//         <div className="max-w-90 w-full">
//           {/* Header */}
//           <div className="mb-9">
//             <p className="text-[11px] font-medium tracking-[0.18em] text-[#B09070] uppercase mb-2.5">
//               Join Mentora
//             </p>
//             <h2 className="font-['Fraunces',serif] text-[30px] font-light text-[#1A1714] leading-[1.2]">
//               Create your account
//             </h2>
//           </div>

//           {/* Error */}
//           {error && (
//             <div className="text-[12px] text-[#B91C1C] px-3.5 py-2.5 bg-[#FEF2F2] border border-[#FECACA] rounded-xl mb-4 leading-normal">
//               {error}
//             </div>
//           )}

//           {/* Form */}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3.5">
//               <label className="block text-[12px] font-medium text-[#7A736C] mb-1.5 tracking-[0.04em]">
//                 Full name
//               </label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Jane Smith"
//                 required
//                 className={inputClass}
//               />
//             </div>

//             <div className="mb-3.5">
//               <label className="block text-[12px] font-medium text-[#7A736C] mb-1.5 tracking-[0.04em]">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@company.com"
//                 required
//                 className={inputClass}
//               />
//             </div>

//             <div className="mb-3.5">
//               <label className="block text-[12px] font-medium text-[#7A736C] mb-1.5 tracking-[0.04em]">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="••••••••"
//                 required
//                 className={inputClass}
//               />
//             </div>

//             <div className="mb-1.5">
//               <label className="block text-[12px] font-medium text-[#7A736C] mb-1.5 tracking-[0.04em]">
//                 Confirm password
//               </label>
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="••••••••"
//                 required
//                 className={inputClass}
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3.5 bg-[#1A1714] text-[#F7F4EF] border-none rounded-xl text-[14px] font-medium cursor-pointer font-['DM_Sans',sans-serif] tracking-[0.01em] mt-4 transition-colors duration-150 hover:bg-[#2E2A26] disabled:opacity-70 disabled:cursor-not-allowed"
//             >
//               {loading ? "Creating account…" : "Create account"}
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="flex items-center gap-3 my-5 text-[#C5BEB8] text-[12px] tracking-[0.06em]">
//             <div className="flex-1 h-px bg-[#E2DDD8]" />
//             or
//             <div className="flex-1 h-px bg-[#E2DDD8]" />
//           </div>

//           {/* Back to home */}
//           <button
//             onClick={() => (onNavigate ? onNavigate("home") : onBack?.())}
//             className="w-full py-3.25 bg-white text-[#1A1714] border border-[#E2DDD8] rounded-xl text-[14px] font-medium cursor-pointer font-['DM_Sans',sans-serif] hover:border-[#C5BEB8] hover:bg-[#FDFCFB] transition-all duration-150"
//           >
//             ← Back to home
//           </button>

//           <p className="text-center mt-5.5 text-[13px] text-[#9C948C]">
//             Already have an account?{" "}
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 onNavigate ? onNavigate("login") : navigate("/login");
//               }}
//               className="text-[#1A1714] font-medium no-underline border-b border-[#C5BEB8]"
//             >
//               Sign in
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginLeftPanel from "../components/login/LoginLeftPanel";
import SignupRightPanel from "../components/login/SignupRightPanel";

export default function SignupPage({ onNavigate, onBack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(
        "Sign up is not available in demo mode. Please use the login page with a demo account.",
      );
    }, 600);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] bg-[#F7F4EF] font-['DM_Sans',sans-serif] text-[#1A1714] overflow-x-hidden">
      {/* Reused directly from login — identical left panel */}
      <LoginLeftPanel onNavigate={onNavigate} onBack={onBack} />

      <SignupRightPanel
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        loading={loading}
        error={error}
        onSubmit={handleSubmit}
        onNavigate={onNavigate}
        onBack={onBack}
      />
    </div>
  );
}
