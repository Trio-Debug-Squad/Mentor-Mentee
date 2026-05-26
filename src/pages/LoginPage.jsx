// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import LoginLeftPanel from "../components/login/LoginLeftPanel";
// import LoginRightPanel from "../components/login/LoginRightPanel";
// import LoginSuccessScreen from "../components/login/LoginSuccessScreen";
// import { mentorDemo, studentDemo } from "../data/demoAccounts";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [demoSuccess, setDemoSuccess] = useState(null); // "admin" | "mentor" | "student" | null
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   const navigate = useNavigate();

//   // ── Handlers ──────────────────────────────────────────

//   const handleDemoLogin = (account, key) => {
//     setError("");
//     setLoading(false);
//     setEmail(account.email);
//     setPassword(account.password);
//     setDemoSuccess(key);
//     setLoggedInUser(account.user);

//     setTimeout(() => {
//       if (account.user.role === "ADMIN") navigate("/admin-dashboard");
//       else if (account.user.role === "MENTEE") navigate("/mentee-dashboard");
//       else navigate("/mentor-dashboard");
//     }, 300);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     const matched = [mentorDemo, studentDemo].find(
//       (a) => a.email === email && a.password === password,
//     );
//     if (matched) {
//       const key = matched.user.role === "MENTOR" ? "mentor" : "student";
//       handleDemoLogin(matched, key);
//       return;
//     }
//     setError("Unable to login. Check your credentials or use a demo account.");
//   };

//   const handleGoogleLogin = () =>
//     setError(
//       "Google login is not available in demo mode. Use one of the demo options.",
//     );

//   const handleSignOut = () => {
//     setLoggedInUser(null);
//     setDemoSuccess(null);
//     setEmail("");
//     setPassword("");
//   };

//   // ── Render ────────────────────────────────────────────

//   if (loggedInUser && demoSuccess) {
//     return <LoginSuccessScreen user={loggedInUser} onSignOut={handleSignOut} />;
//   }

//   return (
//     <div className="min-h-screen grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] font-sans text-ink overflow-x-hidden">
//       <LoginLeftPanel />
//       <LoginRightPanel
//         email={email}
//         setEmail={setEmail}
//         password={password}
//         setPassword={setPassword}
//         loading={loading}
//         error={error}
//         demoSuccess={demoSuccess}
//         onSubmit={handleSubmit}
//         onDemoLogin={handleDemoLogin}
//         onGoogleLogin={handleGoogleLogin}
//       />
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mentorDemo, studentDemo, adminDemo } from "../data/demoAccounts";
import LoginLeftPanel from "../components/login/LoginLeftPanel";
import LoginRightPanel from "../components/login/LoginRightPanel";
import LoginSuccessScreen from "../components/login/LoginSuccessScreen";

export default function LoginPage({ onNavigate, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const navigate = useNavigate();

  const loginOfflineDemo = (demoAccount) => {
    setError("");
    setLoading(false);
    setEmail(demoAccount.email);
    setPassword(demoAccount.password);
    setDemoSuccess(
      demoAccount.user.role === "MENTOR"
        ? "mentor"
        : demoAccount.user.role === "ADMIN"
          ? "admin"
          : "student",
    );
    setLoggedInUser(demoAccount.user);
    setTimeout(() => {
      if (demoAccount.user.role === "ADMIN") navigate("/admin-dashboard");
      else if (demoAccount.user.role === "MENTEE")
        navigate("/mentee-dashboard");
      else navigate("/mentor-dashboard");
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const matched = [mentorDemo, studentDemo, adminDemo].find(
      (a) => a.email === email && a.password === password,
    );
    if (matched) {
      loginOfflineDemo(matched);
      return;
    }
    setError("Unable to login. Check your credentials or use a demo account.");
  };

  const handleGoogleLogin = () =>
    setError(
      "Google login is not available in demo mode. Use one of the demo options or enter your credentials.",
    );

  const handleSignOut = () => {
    setLoggedInUser(null);
    setDemoSuccess(null);
    setEmail("");
    setPassword("");
  };

  if (loggedInUser && demoSuccess) {
    return (
      <LoginSuccessScreen
        user={loggedInUser}
        onSignOut={handleSignOut}
        onNavigate={onNavigate}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] bg-[#F7F4EF] font-['DM_Sans',sans-serif] text-[#1A1714] overflow-x-hidden">
      <LoginLeftPanel onNavigate={onNavigate} onBack={onBack} />
      <LoginRightPanel
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        error={error}
        demoSuccess={demoSuccess}
        onSubmit={handleSubmit}
        onDemoLogin={loginOfflineDemo}
        onGoogleLogin={handleGoogleLogin}
        onNavigate={onNavigate}
        onBack={onBack}
      />
    </div>
  );
}
