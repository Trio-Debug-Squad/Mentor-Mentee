export const mentees = [
  {
    id: 1,
    name: "Emily Davies",
    project: "Mobile App Dev",
    lastMeeting: "3 Days Ago",
    progress: 70,
    status: "On Track",
    avatar: "ED",
    color: "#f472b6",
  },
  {
    id: 2,
    name: "David Chen",
    project: "UI/UX Design",
    lastMeeting: "1 Day Ago",
    progress: 90,
    status: "Awaiting Review",
    avatar: "DC",
    color: "#60a5fa",
  },
  {
    id: 3,
    name: "David Corper",
    project: "Mobile App Dev",
    lastMeeting: "3 Days Ago",
    progress: 70,
    status: "On Track",
    avatar: "DC",
    color: "#34d399",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    project: "UI/UX Design",
    lastMeeting: "2 Days Ago",
    progress: 50,
    status: "Paused",
    avatar: "SJ",
    color: "#fb923c",
  },
  {
    id: 5,
    name: "Marcus Lee",
    project: "Backend API",
    lastMeeting: "5 Days Ago",
    progress: 40,
    status: "Needs Help",
    avatar: "ML",
    color: "#a78bfa",
  },
  {
    id: 6,
    name: "Priya Nair",
    project: "Data Science",
    lastMeeting: "Today",
    progress: 85,
    status: "On Track",
    avatar: "PN",
    color: "#f87171",
  },
];

export const menteeStatusColors = {
  "On Track": { bg: "#dcfce7", text: "#16a34a" },
  "Awaiting Review": { bg: "#fef9c3", text: "#b45309" },
  Paused: { bg: "#fee2e2", text: "#dc2626" },
  "Needs Help": { bg: "#ede9fe", text: "#7c3aed" },
};

export const immediateActions = [
  { id: 1, text: "Review David Chen's Final Design", icon: "📋", urgent: true },
  {
    id: 2,
    text: "Schedule Next Session with Emily Davis",
    icon: "📅",
    urgent: false,
  },
  { id: 3, text: "New Message from Sarah Johnson", icon: "💬", urgent: false },
];

export const mentorStatCards = [
  {
    icon: "👥",
    label: "Active Mentees",
    value: "8",
    badge: "+10%",
    badgeColor: "green",
    avatars: [
      { initials: "ED", color: "#f472b6" },
      { initials: "DC", color: "#60a5fa" },
      { initials: "ML", color: "#a78bfa" },
    ],
  },
  {
    icon: "📋",
    label: "Completed Projects",
    value: "22",
    badge: "Completed",
    badgeColor: "blue",
    avatars: [
      { initials: "22", color: "#34d399" },
      { initials: "✓", color: "#6366f1" },
    ],
  },
  {
    icon: "📅",
    label: "Upcoming Sessions",
    value: "3",
    badge: "Confirmed",
    badgeColor: "green",
    avatars: null,
  },
  {
    icon: "⭐",
    label: "Average Rating",
    value: "4.9",
    badge: "Excellent",
    badgeColor: "green",
    avatars: null,
  },
];

// Icon keys only — SVGs live in MentorSidebar.jsx
export const mentorMenuData = [
  {
    category: "Projects",
    iconKey: "folder",
    items: ["View / Manage Projects", "Track Progress", "View Team Activity"],
  },
  {
    category: "Task Management",
    iconKey: "file",
    items: ["Create Tasks", "Assign Tasks", "Set Dependencies"],
  },
  {
    category: "Review System",
    iconKey: "search",
    items: ["View Submissions", "Actions", "Add Feedback", "Review History"],
  },
  {
    category: "Guidance & Tracking",
    iconKey: "activity",
    items: [
      "Track Mentee Progress",
      "Identify Delays",
      "Share Learning Resources",
    ],
  },
  {
    category: "Communication",
    iconKey: "message",
    items: ["Chat", "Announcements", "Meetings"],
  },
];

export const overviewNavItems = [
  "View / Manage Projects",
  "Track Progress",
  "Track Mentee Progress",
  "View Submissions",
];
