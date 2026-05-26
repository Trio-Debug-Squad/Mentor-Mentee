import { useState } from "react";
import { availableMentors } from "../../data/adminData";

export default function AssignMentors({ projects }) {
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedMentor, setSelectedMentor] = useState("");

  const selectStyle =
    "w-full p-3 rounded-xl border border-slate-200 outline-none text-sm bg-white focus:border-blue-400 transition-colors";

  const handleAssign = () => {
    if (!selectedProject || !selectedMentor) return;
    alert("Mentor assigned successfully!");
    setSelectedProject("");
    setSelectedMentor("");
  };

  return (
    <div
      className="bg-white rounded-2xl p-8 border border-slate-100"
      style={{ boxShadow: "0 2px 16px rgba(59,130,246,0.05)" }}
    >
      <h2 className="m-0 mb-6 text-xl font-black text-slate-800">
        Mentor Assignment
      </h2>

      <div className="flex gap-6">
        <div className="flex-1 border border-slate-200 rounded-2xl p-6">
          <h3 className="text-sm font-bold m-0 mb-4 text-slate-700">
            1. Select Project
          </h3>
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className={selectStyle}
            style={{ fontFamily: "inherit" }}
          >
            <option value="">-- Choose Project --</option>
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.mentor})
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 border border-slate-200 rounded-2xl p-6">
          <h3 className="text-sm font-bold m-0 mb-4 text-slate-700">
            2. Select Mentor
          </h3>
          <select
            value={selectedMentor}
            onChange={(e) => setSelectedMentor(e.target.value)}
            className={selectStyle}
            style={{ fontFamily: "inherit" }}
          >
            <option value="">-- Choose Mentor --</option>
            {availableMentors.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleAssign}
        className="mt-6 border-0 rounded-xl px-8 py-3.5 font-bold text-sm text-white cursor-pointer"
        style={{
          background: "#3b82f6",
          boxShadow: "0 4px 14px rgba(59,130,246,0.3)",
          fontFamily: "inherit",
        }}
      >
        Confirm Assignment
      </button>
    </div>
  );
}
