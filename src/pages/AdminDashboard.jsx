import { useState, useEffect } from "react";
import AdminSidebar, { SidebarToggle } from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import DashboardOverview from "../components/admin/DashboardOverview";
import ManageUsers from "../components/admin/ManageUsers";
import ProjectsList from "../components/admin/ProjectsList";
import ProjectDetail from "../components/admin/ProjectDetail";
import InvitationsList from "../components/admin/InvitationsList";
import ActivityLogs from "../components/admin/ActivityLogs";
import AdminSettings from "../components/admin/AdminSettings";
import PlaceholderSection from "../components/admin/PlaceholderSection";
import CreateUserModal from "../components/admin/CreateUserModal";
import { db } from "../data/db";

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [projects, setProjects] = useState([]);
  const [logs, setLogs] = useState([]);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const refreshData = () => {
    setProjects(db.projects.getAll());
    setLogs(db.logs.getAll());
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleAddProject = (name) => {
    db.projects.create(name);
    refreshData();
  };

  const handleUserCreated = () => {
    refreshData();
  };

  const handleActiveNavChange = (name) => {
    setActiveNav(name);
    setCurrentProjectId(null);
  };

  const renderSection = () => {
    switch (activeNav) {
      case "Dashboard":
        return (
          <DashboardOverview
            projects={projects}
            logs={logs}
            onAddProject={handleAddProject}
          />
        );
      case "Projects":
        if (currentProjectId) {
          return (
            <ProjectDetail
              projectId={currentProjectId}
              onBack={() => setCurrentProjectId(null)}
              onRefresh={refreshData}
            />
          );
        }
        return (
          <ProjectsList
            onViewProject={(id) => setCurrentProjectId(id)}
            onRefresh={refreshData}
          />
        );
      case "Members":
        return (
          <ManageUsers
            key={Date.now()}
            onUserDeleted={handleUserCreated}
          />
        );
      case "Invitations":
        return <InvitationsList />;
      case "Activity":
        return <ActivityLogs />;
      case "Settings":
        return <AdminSettings />;
      default:
        return <PlaceholderSection title={activeNav} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans overflow-x-hidden w-full">
      <AdminSidebar
        activeNav={activeNav}
        setActiveNav={handleActiveNavChange}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main
        className="flex-1 min-h-screen min-w-0
        ml-0 md:ml-55 lg:ml-65
        p-4 sm:p-6 lg:p-8
        pt-16 md:pt-8"
      >
        <SidebarToggle
          onClick={() => setMobileOpen(true)}
          mobileOpen={mobileOpen}
        />

        <AdminHeader onAddUser={() => setShowCreateUser(true)} />
        <div className="mt-6 md:mt-4">
          {renderSection()}
        </div>
      </main>

      {showCreateUser && (
        <CreateUserModal
          onClose={() => setShowCreateUser(false)}
          onUserCreated={handleUserCreated}
        />
      )}
    </div>
  );
}
