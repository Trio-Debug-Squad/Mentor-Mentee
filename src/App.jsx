// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import LoginPage from "./pages/LoginPage";
// import AdminDashboard from "./pages/AdminDashboard";
// import MenteeDashboard from "./pages/MenteeDashboard";

// function PlaceholderPage({ title, color }) {
//   return (
//     <div className="min-h-screen bg-cream font-sans flex flex-col items-center justify-center gap-6">
//       <div
//         className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
//         style={{ background: color }}
//       >
//         ◎
//       </div>
//       <h1 className="font-serif font-light text-4xl text-ink">{title}</h1>
//       <p className="text-stone-600 text-sm">
//         Replace with your real component.
//       </p>
//       <a
//         href="/"
//         className="mt-2 text-sm text-stone-500 border-b border-stone-300 hover:text-ink transition-all"
//       >
//         ← Back to landing
//       </a>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
//         <Route
//           path="/mentor-dashboard"
//           element={<PlaceholderPage title="Mentor Dashboard" color="#A8C5A0" />}
//         />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import MenteeDashboard from "./pages/MenteeDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
