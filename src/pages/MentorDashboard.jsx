import { useState, useEffect } from "react";
import MentorSidebar from "../components/mentor/MentorSidebar";
import MentorHeader from "../components/mentor/MentorHeader";
import MentorOverview from "../components/mentor/MentorOverview";
import CreateTasksSection from "../components/mentor/CreateTasksSection";
import ReviewActions from "../components/mentor/ReviewActions";
import NewUserModal from "../components/mentor/NewUserModal";
import PlaceholderSection from "../components/admin/PlaceholderSection";
import { overviewNavItems } from "../data/mentorData";

const DEFAULT_TASKS = [
  {
    id: 1,
    title: "Create Wireframes",
    status: "Revision Needed",
    priority: "High",
    deadline: "Today, 11:59 PM",
    assigner: "Sarah Connor",
    mentee: "Emily Davies",
  },
];

export default function MentorDashboard() {
  const [activeNav, setActiveNav] = useState("View / Manage Projects");
  const [expandedMenu, setExpandedMenu] = useState("Projects");
  const [showNewUserModal, setShowNewUserModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedProjects =
      JSON.parse(localStorage.getItem("mentorFlow_projects")) || [];
    setProjects(storedProjects.filter((p) => p.mentor === "Sarah Connor"));

    const storedTasks = JSON.parse(localStorage.getItem("mentorFlow_tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    } else {
      localStorage.setItem("mentorFlow_tasks", JSON.stringify(DEFAULT_TASKS));
      setTasks(DEFAULT_TASKS);
    }
  }, []);

  const handleCreateTask = ({ desc, deadline, priority, mentee }) => {
    const newTask = {
      id: Date.now(),
      title: desc,
      status: "To Do",
      priority,
      deadline: deadline || "No Deadline",
      assigner: "Sarah Connor",
      mentee,
    };
    const updated = [...tasks, newTask];
    setTasks(updated);
    localStorage.setItem("mentorFlow_tasks", JSON.stringify(updated));
    alert("Task created and assigned to " + mentee);
  };

  // ── Render active section ─────────────────────────────
  const renderSection = () => {
    if (overviewNavItems.includes(activeNav)) {
      return <MentorOverview projects={projects} />;
    }
    switch (activeNav) {
      case "Create Tasks":
        return (
          <CreateTasksSection tasks={tasks} onCreateTask={handleCreateTask} />
        );
      case "Actions":
        return <ReviewActions />;
      default:
        return (
          <div className="ml-8">
            <PlaceholderSection title={activeNav} />
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans overflow-x-hidden w-full">
      <MentorSidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        expandedMenu={expandedMenu}
        setExpandedMenu={setExpandedMenu}
      />

      <main className="ml-64 flex-1 py-8 pr-8 min-h-screen min-w-0">
        <MentorHeader onNewUser={() => setShowNewUserModal(true)} />
        {renderSection()}
      </main>

      {showNewUserModal && (
        <NewUserModal onClose={() => setShowNewUserModal(false)} />
      )}
    </div>
  );
}
