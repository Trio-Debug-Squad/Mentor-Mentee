import { useState, useEffect } from "react";
import Avatar from "../ui/Avatar";
import StatCard from "../ui/StatCard";
import { db } from "../../data/db";

export default function MenteeProfile() {
  const [profileName, setProfileName] = useState("Emily Davies");
  const [profileEmail, setProfileEmail] = useState("mentee@demo.com");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("mentorFlow_currentUser")) || {
    id: "1",
    name: "Emily Davies",
    role: "MENTEE",
    email: "mentee@demo.com",
    avatar: "ED",
    color: "#f472b6"
  };

  useEffect(() => {
    setProfileName(currentUser.name);
    setProfileEmail(currentUser.email || "mentee@demo.com");
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const allUsers = db.users.getAll();
    const idx = allUsers.findIndex(u => u.id === currentUser.id);
    if (idx !== -1) {
      allUsers[idx].name = profileName;
      allUsers[idx].email = profileEmail;
      localStorage.setItem("mentorFlow_users_rel", JSON.stringify(allUsers));
      
      const updatedUser = { ...currentUser, name: profileName, email: profileEmail };
      localStorage.setItem("mentorFlow_currentUser", JSON.stringify(updatedUser));
      db.logs.add(`Mentee '${profileName}' updated their credentials.`);
      
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }
  };

  const tasksList = db.tasks.getForMentee(currentUser.id);
  const totalTasks = tasksList.length;
  const completedTasks = tasksList.filter(t => t.status === "APPROVED").length;

  return (
    <div className="flex flex-col gap-6 max-w-2xl animate-fade-in">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 flex justify-between items-center bg-slate-50/20" style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.04)" }}>
        <div>
          <h1 className="m-0 text-xl md:text-2xl font-black text-slate-800 tracking-tight">Student Profile</h1>
          <p className="m-0 mt-1 text-slate-400 text-xs font-semibold">Review your study console parameters and credentials.</p>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="flex gap-4 flex-wrap">
        <StatCard
          icon="📋"
          label="Tasks Assigned"
          value={totalTasks.toString()}
          badge="Curriculum tracks"
          badgeColor="blue"
        />
        <StatCard
          icon="✓"
          label="Tasks Completed"
          value={completedTasks.toString()}
          badge="Completed Milestones"
          badgeColor="green"
        />
        <StatCard
          icon="📈"
          label="Overall Progress"
          value={`${totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}%`}
          badge="Track progress"
          badgeColor="blue"
        />
      </div>

      {/* Settings form */}
      <form onSubmit={handleSave} className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col gap-6" style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.04)" }}>
        {saveSuccess && (
          <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold p-4 rounded-2xl animate-pulse">
            ✅ Profile updated successfully! Changes will take effect on next reload.
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Avatar initials={currentUser.avatar} color={currentUser.color} size={64} />
          <div>
            <span className="block font-black text-slate-800 text-base">{currentUser.name}</span>
            <span className="block text-slate-400 text-xs font-semibold uppercase">{currentUser.role} ACCESS LEVEL</span>
          </div>
        </div>

        <hr className="border-0 border-t border-slate-100 m-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Student Name</label>
            <input
              required
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs outline-none focus:border-indigo-400 font-sans"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Access Email Address</label>
            <input
              required
              type="email"
              value={profileEmail}
              onChange={(e) => setProfileEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs outline-none focus:border-indigo-400 font-sans"
            />
          </div>
        </div>

        <button
          type="submit"
          className="self-start bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl border-0 text-xs cursor-pointer transition-colors shadow-lg shadow-indigo-500/20 mt-2"
          style={{ fontFamily: "inherit" }}
        >
          Save Profile Updates
        </button>
      </form>
    </div>
  );
}
