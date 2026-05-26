import MenteeQuickStats from "./MenteeQuickStats";
import AssignedProjectsCard from "./AssignedProjectsCard";
import MyTasksCard from "./MyTasksCard";
import { RecentFeedbackCard, NotificationsCard } from "./MenteeSideCards";

export default function MenteeDashboardOverview({
  tasks,
  onNavigate,
  onTaskClick,
}) {
  return (
    <div>
      <MenteeQuickStats />

      <div className="flex gap-6 items-start">
        {/* Left column */}
        <div className="flex flex-col gap-6" style={{ flex: 2 }}>
          <AssignedProjectsCard
            onViewAll={() => onNavigate("Assigned Projects")}
          />
          <MyTasksCard
            tasks={tasks}
            onManageTasks={() => onNavigate("Task Management")}
            onTaskClick={onTaskClick}
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6" style={{ flex: 1 }}>
          <RecentFeedbackCard />
          <NotificationsCard />
        </div>
      </div>
    </div>
  );
}
