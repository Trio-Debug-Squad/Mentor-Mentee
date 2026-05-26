import { useState, useEffect } from "react";
import AdminSidebar, { SidebarToggle } from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import DashboardOverview from "../components/admin/DashboardOverview";
import ManageUsers from "../components/admin/ManageUsers";
import AssignMentors from "../components/admin/AssignMentors";
import PlaceholderSection from "../components/admin/PlaceholderSection";
import CreateUserModal from "../components/admin/CreateUserModal";
import { mockProjects } from "../data/adminData";

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [projects, setProjects] = useState([]);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("mentorFlow_projects"));
    if (stored?.length > 0) {
      setProjects(stored);
    } else {
      localStorage.setItem("mentorFlow_projects", JSON.stringify(mockProjects));
      setProjects(mockProjects);
    }
  }, []);

  const handleAddProject = (name) => {
    const newProject = {
      id: Date.now(),
      name,
      status: "Active",
      mentor: "Unassigned",
      progress: 0,
    };
    const updated = [...projects, newProject];
    setProjects(updated);
    localStorage.setItem("mentorFlow_projects", JSON.stringify(updated));
  };

  const renderSection = () => {
    switch (activeNav) {
      case "Dashboard":
        return (
          <DashboardOverview
            projects={projects}
            onAddProject={handleAddProject}
          />
        );
      case "Manage Users":
        return <ManageUsers />;
      case "Assign Mentors":
        return <AssignMentors projects={projects} />;
      default:
        return <PlaceholderSection title={activeNav} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans overflow-x-hidden w-full">
      <AdminSidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main
        className="flex-1 min-h-screen min-w-0
        ml-0 md:ml-[220px] lg:ml-[260px]
        p-4 sm:p-6 lg:p-8
        pt-16 md:pt-8"
      >
        {/* Pass mobileOpen so it hides when sidebar is open */}
        <SidebarToggle
          onClick={() => setMobileOpen(true)}
          mobileOpen={mobileOpen}
        />

        <AdminHeader onAddUser={() => setShowCreateUser(true)} />
        {renderSection()}
      </main>

      {showCreateUser && (
        <CreateUserModal onClose={() => setShowCreateUser(false)} />
      )}
    </div>
  );
}
