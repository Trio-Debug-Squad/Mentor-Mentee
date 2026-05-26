export const mentorDemo = {
  email: "mentor@demo.com",
  password: "Mentor123!",
  token: "demo-mentor-token",
  user: {
    _id: "demo-mentor",
    name: "Demo Mentor",
    email: "mentor@demo.com",
    role: "MENTOR",
    organization: "demo-org",
  },
};

export const studentDemo = {
  email: "student@demo.com",
  password: "Student123!",
  token: "demo-student-token",
  user: {
    _id: "demo-student",
    name: "Demo Student",
    email: "student@demo.com",
    role: "MENTEE",
    organization: "demo-org",
  },
};

export const adminDemo = {
  email: "admin@demo.com",
  password: "Admin123!",
  token: "demo-admin-token",
  user: {
    _id: "demo-admin",
    name: "Demo Admin",
    email: "admin@demo.com",
    role: "ADMIN",
    organization: "demo-org",
  },
};

export const demoAccounts = [
  { key: "admin", account: adminDemo, label: "Demo Admin", sub: "Admin role" },
  {
    key: "mentor",
    account: mentorDemo,
    label: "Demo Mentor",
    sub: "Mentor role",
  },
  {
    key: "student",
    account: studentDemo,
    label: "Demo Mentee",
    sub: "Mentee role",
  },
];

export const loginStats = [
  { num: "2.4k", label: "Active pairs" },
  { num: "94%", label: "Satisfaction" },
  { num: "180+", label: "Organizations" },
];
