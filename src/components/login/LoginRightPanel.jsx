// import Divider from "../ui/Divider";
// import DemoButton from "../ui/DemoButton";
// import LoginForm from "./LoginForm";
// import { GoogleIcon } from "../ui/GoogleIcon";
// import { demoAccounts } from "../../data/demoAccounts";

// export default function LoginRightPanel({
//   email,
//   setEmail,
//   password,
//   setPassword,
//   loading,
//   error,
//   demoSuccess,
//   onSubmit,
//   onDemoLogin,
//   onGoogleLogin,
// }) {
//   return (
//     <div className="bg-cream flex flex-col justify-center p-14">
//       <div className="max-w-sm w-full">
//         {/* Header */}
//         <div className="mb-9">
//           <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-2.5">
//             Welcome back
//           </p>
//           <h2 className="font-serif font-light text-3xl text-ink leading-snug">
//             Sign in to your account
//           </h2>
//         </div>

//         {/* Google */}
//         <button
//           type="button"
//           onClick={onGoogleLogin}
//           className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm text-ink cursor-pointer mb-4 transition-colors duration-150 hover:border-stone-300"
//           style={{ fontFamily: "inherit" }}
//         >
//           <GoogleIcon />
//           <span className="flex-1 text-center mr-4">Continue with Google</span>
//         </button>

//         <Divider label="or try a demo account" />

//         {/* Demo buttons */}
//         <div className="grid grid-cols-1 gap-2.5 mb-5">
//           {demoAccounts.map(({ key, account, label, sub }) => (
//             <DemoButton
//               key={key}
//               label={label}
//               sub={sub}
//               active={demoSuccess === key}
//               disabled={loading}
//               onClick={() => onDemoLogin(account, key)}
//             />
//           ))}
//         </div>

//         <Divider label="or sign in with email" />

//         <LoginForm
//           email={email}
//           setEmail={setEmail}
//           password={password}
//           setPassword={setPassword}
//           loading={loading}
//           error={error}
//           onSubmit={onSubmit}
//         />

//         <p className="text-center mt-5 text-xs text-stone-500">
//           New here?{" "}
//           <a
//             href="#"
//             className="text-ink font-medium border-b border-stone-300 hover:border-ink transition-colors"
//           >
//             Create an account
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { StarIcon } from "../ui/Icons";
import { GoogleIcon } from "../ui/Icons";
import { demoAccounts } from "../../data/demoAccounts";
import DemoButton from "../ui/DemoButton";
import LoginForm from "./LoginForm";

function Divider({ label }) {
  return (
    <div className="flex items-center gap-3 my-5 text-[#C5BEB8] text-[12px] tracking-[0.06em]">
      <div className="flex-1 h-px bg-[#E2DDD8]" />
      {label}
      <div className="flex-1 h-px bg-[#E2DDD8]" />
    </div>
  );
}

export default function LoginRightPanel({
  email,
  setEmail,
  password,
  setPassword,
  loading,
  error,
  demoSuccess,
  onSubmit,
  onDemoLogin,
  onGoogleLogin,
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
    <div className="bg-[#F7F4EF] flex flex-col justify-center items-center lg:items-start px-5 sm:px-10 lg:px-14 py-14">
      {/* Mobile logo */}
      <div className="flex lg:hidden items-center gap-2.5 mb-10 w-full max-w-[360px]">
        <div className="w-8 h-8 bg-[#E8B86D] rounded-[9px] flex items-center justify-center">
          <StarIcon size={14} />
        </div>
        <span className="text-[#1A1714] text-[15px] font-medium tracking-[0.01em]">
          Mentora
        </span>
        <button
          onClick={handleHome}
          className="ml-auto text-[12px] text-[#B09070] border border-[#E2DDD8] rounded-full px-[14px] py-[6px] cursor-pointer font-['DM_Sans',sans-serif] hover:border-[#C5BEB8] transition-colors duration-150"
        >
          ← Home
        </button>
      </div>

      <div className="max-w-[360px] w-full">
        {/* Header */}
        <div className="mb-9">
          <p className="text-[11px] font-medium tracking-[0.18em] text-[#B09070] uppercase mb-2.5">
            Welcome back
          </p>
          <h2 className="font-['Fraunces',serif] text-[30px] font-light text-[#1A1714] leading-[1.2]">
            Sign in to your account
          </h2>
        </div>

        {/* Google button */}
        <button
          type="button"
          onClick={onGoogleLogin}
          className="w-full flex items-center gap-3 px-[18px] py-[13px] bg-white border border-[#E2DDD8] rounded-xl cursor-pointer text-[14px] text-[#1A1714] mb-4 transition-colors duration-150 font-['DM_Sans',sans-serif] hover:border-[#C5BEB8]"
        >
          <GoogleIcon />
          <span className="flex-1 text-center mr-[18px]">
            Continue with Google
          </span>
        </button>

        <Divider label="or try a demo account" />

        {/* Demo buttons */}
        <div className="grid grid-cols-1 gap-2.5 mb-5">
          {demoAccounts.map(({ key, account, label, sub }) => (
            <DemoButton
              key={key}
              label={label}
              sub={sub}
              active={demoSuccess === key}
              disabled={loading}
              onClick={() => onDemoLogin(account, key)}
            />
          ))}
        </div>

        <Divider label="or sign in with email" />

        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loading={loading}
          error={error}
          onSubmit={onSubmit}
        />

        <p className="text-center mt-[22px] text-[13px] text-[#9C948C]">
          New here?{" "}
          <a
            href="#"
            className="text-[#1A1714] font-medium no-underline border-b border-[#C5BEB8]"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
