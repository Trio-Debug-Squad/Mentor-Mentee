import { useState } from "react";
import Avatar from "../ui/Avatar";
import { mockUsers } from "../../data/adminData";

export default function ManageUsers() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = mockUsers.filter((u) =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div
      className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border border-slate-100"
      style={{ boxShadow: "0 2px 16px rgba(59,130,246,0.05)" }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 md:mb-5 lg:mb-6">
        <h2 className="m-0 text-base md:text-lg lg:text-xl font-black text-slate-800">
          User Management
        </h2>
        <input
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-slate-200 outline-none text-xs md:text-sm w-full sm:w-44 md:w-52 lg:w-56"
          style={{ fontFamily: "inherit" }}
        />
      </div>

      {/* Scrollable table on mobile */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-130">
          <thead>
            <tr className="bg-slate-50">
              {["User Name", "Role", "Joined Date", "Status", "Actions"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-3 md:px-4 py-2.5 md:py-3 text-left text-xs font-bold text-slate-400 tracking-wide border-b border-slate-100"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr
                key={u.id}
                className="border-b border-slate-50 hover:bg-slate-50 transition-colors duration-150"
              >
                {/* Name + Avatar */}
                <td className="px-3 md:px-4 py-3 md:py-3.5">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Avatar
                      initials={u.avatar}
                      color={u.color}
                      size={28}
                      className="md:w-9 md:h-9"
                    />
                    <span className="font-semibold text-slate-800 text-xs md:text-sm">
                      {u.name}
                    </span>
                  </div>
                </td>

                {/* Role */}
                <td className="px-3 md:px-4 py-3 md:py-3.5 text-xs text-slate-500 font-semibold">
                  {u.role}
                </td>

                {/* Joined */}
                <td className="px-3 md:px-4 py-3 md:py-3.5 text-xs text-slate-400">
                  {u.joined}
                </td>

                {/* Status */}
                <td className="px-3 md:px-4 py-3 md:py-3.5">
                  <span
                    className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-semibold ${
                      u.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-3 md:px-4 py-3 md:py-3.5">
                  <button
                    className="bg-transparent border border-slate-200 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-xs font-semibold text-slate-500 cursor-pointer hover:border-slate-400 transition-colors"
                    style={{ fontFamily: "inherit" }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
