export const assignedProjects = [
  {
    id: 1,
    name: "Mobile App Development",
    mentor: "Sarah Connor",
    progress: 75,
    nextDeadline: "Tomorrow, 5:00 PM",
    avatar: "SC",
    color: "#6366f1",
  },
  {
    id: 2,
    name: "UI/UX Design System",
    mentor: "Marcus Lee",
    progress: 40,
    nextDeadline: "Oct 15, 2025",
    avatar: "ML",
    color: "#a78bfa",
  },
];

export const tasks = [
  {
    id: 1,
    title: "Create Wireframes",
    status: "Revision Needed",
    priority: "High",
    deadline: "Today, 11:59 PM",
    assigner: "Sarah Connor",
  },
  {
    id: 2,
    title: "User Flow Diagram",
    status: "In Progress",
    priority: "Medium",
    deadline: "Oct 10, 2025",
    assigner: "Sarah Connor",
  },
  {
    id: 3,
    title: "Design System Tokens",
    status: "Under Review",
    priority: "High",
    deadline: "Oct 12, 2025",
    assigner: "Marcus Lee",
  },
  {
    id: 4,
    title: "Competitor Analysis",
    status: "Completed",
    priority: "Low",
    deadline: "Oct 01, 2025",
    assigner: "Marcus Lee",
  },
  {
    id: 5,
    title: "Set up React Native env",
    status: "To Do",
    priority: "Medium",
    deadline: "Oct 15, 2025",
    assigner: "Sarah Connor",
  },
];

export const recentFeedback = [
  {
    id: 1,
    task: "Create Wireframes",
    mentor: "Sarah Connor",
    text: "Good start, but we need to rethink the navigation bar. Please revise the layout.",
    date: "2 hours ago",
  },
  {
    id: 2,
    task: "Competitor Analysis",
    mentor: "Marcus Lee",
    text: "Excellent analysis. Great insights on user onboarding flows.",
    date: "2 days ago",
  },
];

export const notificationsList = [
  {
    id: 1,
    text: "Sarah requested changes on 'Create Wireframes'",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    text: "Upcoming deadline: Create Wireframes in 12 hours",
    time: "5 hours ago",
    unread: true,
  },
  {
    id: 3,
    text: "Marcus Lee reviewed your submission for 'Design System Tokens'",
    time: "1 day ago",
    unread: false,
  },
];

export const quickStats = [
  {
    label: "Overall Progress",
    value: "58%",
    suffix: "+12%",
    suffixColor: "#10b981",
  },
  {
    label: "Tasks Completed",
    value: "14",
    suffix: "/ 24",
    suffixColor: "#64748b",
  },
  {
    label: "Avg Feedback Score",
    value: "4.8",
    suffix: "/ 5.0",
    suffixColor: "#64748b",
  },
];

export const taskStatusGroups = [
  "Revision Needed",
  "To Do",
  "In Progress",
  "Under Review",
  "Completed",
];

// Icon keys — rendered as SVGs in MenteeSidebar.jsx (no JSX in .js files)
export const menteeMenuData = [
  {
    category: "My Workspace",
    iconKey: "folder",
    items: ["Assigned Projects", "Task Management"],
  },
  {
    category: "Growth & Comms",
    iconKey: "chart",
    items: ["Progress & Feedback", "Messages & Meetings", "Notifications"],
  },
];

export const statusColors = {
  "Revision Needed": { bg: "#fef2f2", text: "#ef4444" },
  "To Do": { bg: "#f1f5f9", text: "#64748b" },
  "In Progress": { bg: "#eff6ff", text: "#3b82f6" },
  "Under Review": { bg: "#fef3c7", text: "#d97706" },
  Completed: { bg: "#dcfce7", text: "#16a34a" },
};
