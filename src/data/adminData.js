export const mockUsers = [
  {
    id: 1,
    name: "Emily Davies",
    role: "Mentee",
    status: "Active",
    joined: "Oct 12, 2025",
    avatar: "ED",
    color: "#f472b6",
  },
  {
    id: 2,
    name: "Sarah Connor",
    role: "Mentor",
    status: "Active",
    joined: "Sep 01, 2025",
    avatar: "SC",
    color: "#6366f1",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Mentee",
    status: "Inactive",
    joined: "Nov 05, 2025",
    avatar: "DC",
    color: "#60a5fa",
  },
  {
    id: 4,
    name: "Marcus Lee",
    role: "Mentor",
    status: "Active",
    joined: "Aug 20, 2025",
    avatar: "ML",
    color: "#a78bfa",
  },
];

export const mockProjects = [
  {
    id: 1,
    name: "Mobile App Dev",
    status: "Active",
    mentor: "Sarah Connor",
    progress: 70,
  },
  {
    id: 2,
    name: "UI/UX Design",
    status: "On Hold",
    mentor: "Unassigned",
    progress: 20,
  },
  {
    id: 3,
    name: "Backend API",
    status: "Completed",
    mentor: "Marcus Lee",
    progress: 100,
  },
];

export const recentActivities = [
  {
    id: 1,
    text: "Sarah Connor approved a milestone for Mobile App Dev.",
    time: "2 hours ago",
    icon: "✓",
    color: "#16a34a",
    bg: "#dcfce7",
  },
  {
    id: 2,
    text: "New mentee David Chen registered.",
    time: "5 hours ago",
    icon: "+",
    color: "#2563eb",
    bg: "#dbeafe",
  },
  {
    id: 3,
    text: "UI/UX Design project placed on hold.",
    time: "1 day ago",
    icon: "!",
    color: "#d97706",
    bg: "#fef3c7",
  },
];

export const statCards = [
  {
    icon: "👥",
    label: "Total Users",
    value: "128",
    badge: "+12 this month",
    badgeColor: "blue",
  },
  {
    icon: "🎓",
    label: "Active Mentors",
    value: "45",
    badge: "Stable",
    badgeColor: "green",
  },
  {
    icon: "📋",
    label: "Active Projects",
    value: "32",
    badge: "+4 new",
    badgeColor: "blue",
  },
  {
    icon: "📈",
    label: "Avg Completion Rate",
    value: "78%",
    badge: "+5%",
    badgeColor: "green",
  },
];

export const availableMentors = ["Sarah Connor", "Marcus Lee", "David Chen"];

// Icons are string keys — rendered as SVG in AdminSidebar.jsx
export const menuData = [
  {
    category: "User Management",
    iconKey: "users",
    items: ["Manage Users", "Assign Mentors"],
  },
  {
    category: "Project Oversight",
    iconKey: "folder",
    items: ["All Projects"],
  },
  {
    category: "Insights & Config",
    iconKey: "chart",
    items: ["Analytics", "Settings"],
  },
];
