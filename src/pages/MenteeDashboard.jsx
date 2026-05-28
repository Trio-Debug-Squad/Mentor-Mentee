import { useState, useEffect } from "react";
import MenteeSidebar, {
  MenteeSidebarToggle,
} from "../components/mentee/MenteeSidebar";
import MenteeHeader from "../components/mentee/MenteeHeader";
import MenteeDashboardOverview from "../components/mentee/MenteeDashboardOverview";
import TaskManagement from "../components/mentee/TaskManagement";
import TaskSubmitModal from "../components/mentee/TaskSubmitModal";
import PlaceholderSection from "../components/admin/PlaceholderSection";


import { db } from "../data/db";

export default function MenteeDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [menteeTasks, setMenteeTasks] = useState([]);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("mentorFlow_currentUser")) || {
    id: "1",
    name: "Emily Davies",
    role: "MENTEE"
  };

  useEffect(() => {
    setMenteeTasks(db.tasks.getForMentee(currentUser.id));
  }, [currentUser.id]);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowSubmitModal(true);
  };

  const handleSubmit = (notes) => {
    db.tasks.submitWork(selectedTask.id, currentUser.id, notes);
    setMenteeTasks(db.tasks.getForMentee(currentUser.id));
    setShowSubmitModal(false);
    alert("Task submitted for review!");
  };

  const renderSection = () => {
    switch (activeNav) {
      case "Dashboard":
        return (
          <MenteeDashboardOverview
            tasks={menteeTasks}
            onNavigate={setActiveNav}
            onTaskClick={handleTaskClick}
          />
        );
      case "Task Management":
        return (
          <TaskManagement tasks={menteeTasks} onTaskClick={handleTaskClick} />
        );
      default:
        return <PlaceholderSection title={activeNav} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans overflow-x-hidden w-full">
      <MenteeSidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main
        className="flex-1 min-h-screen min-w-0
        ml-0 md:ml-55 lg:ml-64
        p-4 sm:p-6 lg:p-8
        pt-16 md:pt-8"
      >
        {/* Hamburger — mobile only, hides when sidebar open */}
        <MenteeSidebarToggle
          onClick={() => setMobileOpen(true)}
          mobileOpen={mobileOpen}
        />

        <MenteeHeader
          activeNav={activeNav}
          onMessageMentor={() => setActiveNav("Messages & Meetings")}
        />
        {renderSection()}
      </main>

      {showSubmitModal && (
        <TaskSubmitModal
          task={selectedTask}
          onClose={() => setShowSubmitModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
