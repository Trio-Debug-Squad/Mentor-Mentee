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

      <div className="flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6 items-start">
        {/* Left column — stacks on mobile/tablet, side by side on desktop */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full lg:flex-2">
          <AssignedProjectsCard
            onViewAll={() => onNavigate("Assigned Projects")}
          />
          <MyTasksCard
            tasks={tasks}
            onManageTasks={() => onNavigate("Task Management")}
            onTaskClick={onTaskClick}
          />
        </div>

        {/* Right column — stacks on mobile/tablet, side by side on desktop */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full lg:flex-1">
          <RecentFeedbackCard />
          <NotificationsCard />
        </div>
      </div>
    </div>
  );
}
