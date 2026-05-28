// Unified Relational Database Controller simulating SQLite in the browser
// Supports full multi-role state synchronization across Admin, Mentor, and Mentee dashboards.

import { mockUsers as initialUsers, mockProjects as initialProjects } from "./adminData";
import { tasks as initialTasks, recentFeedback as initialFeedback, notificationsList as initialNotifications } from "./menteeData";
import { mentees as initialMentees } from "./mentorData";

const KEYS = {
  USERS: "mentorFlow_users_rel",
  PROJECTS: "mentorFlow_projects_rel",
  MEMBERS: "mentorFlow_members_rel",
  TASKS: "mentorFlow_tasks_rel",
  SUBMISSIONS: "mentorFlow_submissions_rel",
  FEEDBACK: "mentorFlow_feedback_rel",
  NOTIFICATIONS: "mentorFlow_notifications_rel",
  LOGS: "mentorFlow_logs_rel",
  INVITATIONS: "mentorFlow_invitations_rel"
};

// Standard Storage Helper
const get = (key, defaultVal = []) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultVal;
};

const set = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};

// Initialize database with seed data if empty
export const initDatabase = () => {
  // 1. Users seeding
  if (!localStorage.getItem(KEYS.USERS)) {
    const users = [
      ...initialUsers.map(u => ({
        id: u.id.toString(),
        name: u.name,
        email: u.role.toLowerCase() + "@demo.com",
        role: u.role.toUpperCase(), // ADMIN | MENTOR | MENTEE
        avatar: u.avatar,
        color: u.color || "#6366f1",
        status: u.status || "Active",
        joined: u.joined || "Oct 12, 2025"
      })),
      // Ensure we have the student and admin default accounts
      {
        id: "demo-student",
        name: "Demo Student",
        email: "student@demo.com",
        role: "MENTEE",
        avatar: "ED",
        color: "#f472b6",
        status: "Active",
        joined: "Oct 12, 2025"
      },
      {
        id: "demo-admin",
        name: "Demo Admin",
        email: "admin@demo.com",
        role: "ADMIN",
        avatar: "DA",
        color: "#1e293b",
        status: "Active",
        joined: "Sep 01, 2025"
      }
    ];
    set(KEYS.USERS, users);
  }

  // 2. Projects seeding
  if (!localStorage.getItem(KEYS.PROJECTS)) {
    set(KEYS.PROJECTS, initialProjects.map(p => ({
      id: p.id.toString(),
      name: p.name,
      status: p.status === "On Hold" ? "On Hold" : p.status === "Completed" ? "Completed" : "Active",
      description: p.name + " project tracking.",
      progress: p.progress || 0
    })));
  }

  // 3. Project Members seeding
  if (!localStorage.getItem(KEYS.MEMBERS)) {
    // Build seed members based on initial mock alignments
    const members = [
      // Mobile App Dev: Sarah Connor (Mentor - ID 2), Emily Davies (Mentee - ID 1)
      { id: "m1", projectId: "1", userId: "2", role: "MENTOR" },
      { id: "m2", projectId: "1", userId: "1", role: "MENTEE" },
      
      // UI/UX Design: Unassigned, Marcus Lee (Mentor - ID 4), David Chen (Mentee - ID 3)
      { id: "m3", projectId: "2", userId: "3", role: "MENTEE" },
      
      // Backend API: Marcus Lee (Mentor - ID 4)
      { id: "m4", projectId: "3", userId: "4", role: "MENTOR" }
    ];
    set(KEYS.MEMBERS, members);
  }

  // 4. Tasks seeding
  if (!localStorage.getItem(KEYS.TASKS)) {
    set(KEYS.TASKS, initialTasks.map((t, idx) => ({
      id: t.id.toString(),
      projectId: idx % 2 === 0 ? "1" : "2",
      createdById: idx % 2 === 0 ? "2" : "4",
      assignedToId: "1", // Emily Davies
      title: t.title,
      description: "Perform analysis and submit deliverables for review.",
      status: t.status === "Revision Needed" ? "REJECTED" : t.status === "In Progress" ? "IN_PROGRESS" : t.status === "Under Review" ? "SUBMITTED" : t.status === "Completed" ? "APPROVED" : "PENDING",
      priority: t.priority.toUpperCase(),
      deadline: t.deadline
    })));
  }

  // 5. Submissions seeding
  if (!localStorage.getItem(KEYS.SUBMISSIONS)) {
    set(KEYS.SUBMISSIONS, [
      {
        id: "s1",
        taskId: "1", // Create Wireframes
        submittedBy: "1",
        content: "Here is the first draft of the main workspace wireframes. I focused on clean spacing.",
        status: "REJECTED",
        submittedAt: "2 hours ago"
      },
      {
        id: "s2",
        taskId: "4", // Competitor Analysis
        submittedBy: "1",
        content: "Completed competitor audit: analyzed layouts, signup loops, and primary metric panels.",
        status: "APPROVED",
        submittedAt: "2 days ago"
      }
    ]);
  }

  // 6. Feedback seeding
  if (!localStorage.getItem(KEYS.FEEDBACK)) {
    set(KEYS.FEEDBACK, initialFeedback.map((f, idx) => ({
      id: f.id.toString(),
      taskId: idx === 0 ? "1" : "4",
      submissionId: idx === 0 ? "s1" : "s2",
      reviewerId: idx === 0 ? "2" : "4",
      comment: f.text,
      action: idx === 0 ? "REJECT" : "APPROVE",
      createdAt: f.date
    })));
  }

  // 7. Notifications seeding
  if (!localStorage.getItem(KEYS.NOTIFICATIONS)) {
    set(KEYS.NOTIFICATIONS, initialNotifications.map(n => ({
      id: n.id.toString(),
      userId: "1", // Emily Davies
      title: n.unread ? "Alert" : "Info",
      body: n.text,
      isRead: !n.unread,
      createdAt: n.time
    })));
  }

  // 8. Logs seeding
  if (!localStorage.getItem(KEYS.LOGS)) {
    set(KEYS.LOGS, [
      { id: "l1", text: "Sarah Connor approved a milestone for Mobile App Dev.", time: "2 hours ago" },
      { id: "l2", text: "New mentee David Chen registered.", time: "5 hours ago" }
    ]);
  }

  // 9. Invitations seeding
  if (!localStorage.getItem(KEYS.INVITATIONS)) {
    set(KEYS.INVITATIONS, [
      { id: "inv-1", email: "james@example.com", role: "MENTEE", status: "PENDING", sentAt: "3 hours ago" },
      { id: "inv-2", email: "helen@example.com", role: "MENTOR", status: "PENDING", sentAt: "1 day ago" },
      { id: "inv-3", email: "robert@example.com", role: "ADMIN", status: "ACCEPTED", sentAt: "3 days ago" }
    ]);
  }
};

// DB API Interface
export const db = {
  // --- USERS ---
  users: {
    getAll: () => get(KEYS.USERS),
    getById: (id) => get(KEYS.USERS).find(u => u.id === id.toString()),
    getByEmail: (email) => get(KEYS.USERS).find(u => u.email.toLowerCase() === email.toLowerCase()),
    create: (user) => {
      const users = get(KEYS.USERS);
      const newUser = {
        ...user,
        id: Date.now().toString(),
        role: user.role.toUpperCase(), // ADMIN | MENTOR | MENTEE
        avatar: user.name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2),
        color: ["#6366f1", "#a78bfa", "#f472b6", "#60a5fa", "#34d399", "#fb923c"][Math.floor(Math.random() * 6)],
        status: "Active",
        joined: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
      };
      users.push(newUser);
      set(KEYS.USERS, users);
      
      // Log Activity
      db.logs.add(`New user ${newUser.name} (${newUser.role}) was created.`);
      return newUser;
    },
    update: (id, updates) => {
      const users = get(KEYS.USERS);
      const idx = users.findIndex(u => u.id === id.toString());
      if (idx !== -1) {
        users[idx] = { ...users[idx], ...updates };
        set(KEYS.USERS, users);
      }
    },
    delete: (id) => {
      const users = get(KEYS.USERS);
      const updated = users.filter((u) => u.id !== id.toString());
      set(KEYS.USERS, updated);

      // Clean up any project memberships for this user
      const members = get(KEYS.MEMBERS);
      const updatedMembers = members.filter((m) => m.userId !== id.toString());
      set(KEYS.MEMBERS, updatedMembers);

      db.logs.add(`User was deleted from the system.`);
    }
  },

  // --- PROJECTS ---
  projects: {
    getAll: () => {
      const projects = get(KEYS.PROJECTS);
      const members = get(KEYS.MEMBERS);
      const users = get(KEYS.USERS);
      
      return projects.map(p => {
        const projMembers = members.filter(m => m.projectId === p.id);
        const mentorMember = projMembers.find(m => m.role === "MENTOR");
        const mentor = mentorMember ? users.find(u => u.id === mentorMember.userId) : null;
        const mentees = projMembers.filter(m => m.role === "MENTEE").map(m => users.find(u => u.id === m.userId)).filter(Boolean);

        return {
          ...p,
          mentorName: mentor ? mentor.name : "Unassigned",
          mentor: mentor,
          mentees: mentees
        };
      });
    },
    create: (name, description) => {
      const projects = get(KEYS.PROJECTS);
      const newProj = {
        id: Date.now().toString(),
        name,
        description: description || "No description provided.",
        status: "Active",
        progress: 0
      };
      projects.push(newProj);
      set(KEYS.PROJECTS, projects);

      db.logs.add(`Project '${name}' was created by Admin.`);
      return newProj;
    },
    assignMentor: (projectId, mentorId) => {
      const members = get(KEYS.MEMBERS);
      // Remove any existing mentor for this project
      const filtered = members.filter(m => !(m.projectId === projectId.toString() && m.role === "MENTOR"));
      if (mentorId) {
        filtered.push({
          id: Date.now().toString() + "_m",
          projectId: projectId.toString(),
          userId: mentorId.toString(),
          role: "MENTOR"
        });
      }
      set(KEYS.MEMBERS, filtered);
      
      const proj = db.projects.getAll().find(p => p.id === projectId.toString());
      const mentor = db.users.getById(mentorId);
      if (proj && mentor) {
        db.logs.add(`Mentor ${mentor.name} was assigned to project '${proj.name}'.`);
      }
    },
    assignMentee: (projectId, menteeId) => {
      const members = get(KEYS.MEMBERS);
      // Avoid duplicate assignments
      const exists = members.some(m => m.projectId === projectId.toString() && m.userId === menteeId.toString());
      if (!exists) {
        members.push({
          id: Date.now().toString() + "_s",
          projectId: projectId.toString(),
          userId: menteeId.toString(),
          role: "MENTEE"
        });
        set(KEYS.MEMBERS, members);
        
        const proj = db.projects.getAll().find(p => p.id === projectId.toString());
        const mentee = db.users.getById(menteeId);
        if (proj && mentee) {
          db.logs.add(`Mentee ${mentee.name} was assigned to project '${proj.name}'.`);
        }
      }
    },
    removeMember: (projectId, userId) => {
      const members = get(KEYS.MEMBERS);
      const updated = members.filter(m => !(m.projectId === projectId.toString() && m.userId === userId.toString()));
      set(KEYS.MEMBERS, updated);
    }
  },

  // --- TASKS ---
  tasks: {
    getAll: () => {
      const tasks = get(KEYS.TASKS);
      const submissions = get(KEYS.SUBMISSIONS);
      const feedback = get(KEYS.FEEDBACK);
      const users = get(KEYS.USERS);
      const projects = get(KEYS.PROJECTS);

      return tasks.map(t => {
        const taskSubs = submissions.filter(s => s.taskId === t.id);
        const taskFeedbacks = feedback.filter(f => f.taskId === t.id);
        const assignee = users.find(u => u.id === t.assignedToId);
        const project = projects.find(p => p.id === t.projectId);

        return {
          ...t,
          assigneeName: assignee ? assignee.name : "Unassigned",
          projectName: project ? project.name : "Unknown Project",
          submissions: taskSubs,
          feedbacks: taskFeedbacks
        };
      });
    },
    getForMentee: (menteeId) => {
      return db.tasks.getAll().filter(t => t.assignedToId === menteeId.toString());
    },
    getForMentor: (mentorId) => {
      // Find all projects mentored by this mentor
      const projects = db.projects.getAll().filter(p => p.mentor && p.mentor.id === mentorId.toString());
      const projectIds = projects.map(p => p.id);
      return db.tasks.getAll().filter(t => projectIds.includes(t.projectId));
    },
    create: (task) => {
      const tasks = get(KEYS.TASKS);
      const newTask = {
        id: Date.now().toString(),
        projectId: task.projectId.toString(),
        createdById: task.createdById.toString(),
        assignedToId: task.assignedToId.toString(),
        title: task.title,
        description: task.description || "No description provided.",
        instructions: task.instructions || "Follow task guidelines.",
        status: "PENDING",
        priority: task.priority || "MEDIUM",
        deadline: task.deadline || "Next week"
      };
      tasks.push(newTask);
      set(KEYS.TASKS, tasks);

      // Create Notification for the Mentee
      db.notifications.add(
        newTask.assignedToId,
        "TASK_ASSIGNED",
        "New Task Assigned",
        `You have been assigned a new task: '${newTask.title}'`
      );

      db.logs.add(`New task '${newTask.title}' was assigned to Mentee.`);
      return newTask;
    },
    submitWork: (taskId, menteeId, content) => {
      const tasks = get(KEYS.TASKS);
      const submissions = get(KEYS.SUBMISSIONS);
      
      // Update Task Status to SUBMITTED (Under Review)
      const taskIdx = tasks.findIndex(t => t.id === taskId.toString());
      if (taskIdx !== -1) {
        tasks[taskIdx].status = "SUBMITTED";
        set(KEYS.TASKS, tasks);
      }

      // Add Submission
      const newSub = {
        id: "s_" + Date.now(),
        taskId: taskId.toString(),
        submittedBy: menteeId.toString(),
        content: content,
        status: "PENDING",
        submittedAt: "Just now"
      };
      submissions.push(newSub);
      set(KEYS.SUBMISSIONS, submissions);

      // Notify Mentor
      const task = tasks[taskIdx];
      if (task) {
        db.notifications.add(
          task.createdById,
          "COMMENT_RECEIVED",
          "Task Submitted",
          `A submission has been uploaded for '${task.title}'`
        );
      }

      db.logs.add(`Mentee submitted work for task '${task ? task.title : taskId}'.`);
      return newSub;
    },
    addFeedback: (taskId, reviewerId, comment, action) => {
      const tasks = get(KEYS.TASKS);
      const submissions = get(KEYS.SUBMISSIONS);
      const feedbacks = get(KEYS.FEEDBACK);

      // 1. Add Feedback entry
      const activeSub = submissions.find(s => s.taskId === taskId.toString() && s.status === "PENDING") || 
                         submissions.filter(s => s.taskId === taskId.toString()).pop();
      
      const newFeedback = {
        id: "f_" + Date.now(),
        taskId: taskId.toString(),
        submissionId: activeSub ? activeSub.id : null,
        reviewerId: reviewerId.toString(),
        comment: comment,
        action: action.toUpperCase(), // APPROVE | REJECT | COMMENT
        createdAt: "Just now"
      };
      feedbacks.push(newFeedback);
      set(KEYS.FEEDBACK, feedbacks);

      // 2. Update task and submission statuses
      const taskIdx = tasks.findIndex(t => t.id === taskId.toString());
      if (taskIdx !== -1) {
        const task = tasks[taskIdx];
        if (action === "approve") {
          task.status = "APPROVED"; // Completed
          if (activeSub) activeSub.status = "APPROVED";
          
          db.notifications.add(
            task.assignedToId,
            "REVIEW_COMPLETED",
            "Task Approved",
            `Your task '${task.title}' was reviewed and approved.`
          );
        } else if (action === "reject") {
          task.status = "REJECTED"; // Revision Needed
          if (activeSub) activeSub.status = "REJECTED";
          
          db.notifications.add(
            task.assignedToId,
            "REVIEW_COMPLETED",
            "Revision Requested",
            `Sarah Connor requested changes on '${task.title}'`
          );
        }
        set(KEYS.TASKS, tasks);
        if (activeSub) set(KEYS.SUBMISSIONS, submissions);

        db.logs.add(`Feedback added for task '${task.title}' - Status: ${task.status}.`);
      }
    }
  },

  // --- NOTIFICATIONS ---
  notifications: {
    getForUser: (userId) => get(KEYS.NOTIFICATIONS).filter(n => n.userId === userId.toString()),
    add: (userId, type, title, body) => {
      const notifications = get(KEYS.NOTIFICATIONS);
      const newNotif = {
        id: Date.now().toString(),
        userId: userId.toString(),
        type: type,
        title: title,
        body: body,
        isRead: false,
        createdAt: "Just now"
      };
      notifications.unshift(newNotif);
      set(KEYS.NOTIFICATIONS, notifications);
      return newNotif;
    },
    markAllRead: (userId) => {
      const notifications = get(KEYS.NOTIFICATIONS);
      notifications.forEach(n => {
        if (n.userId === userId.toString()) n.isRead = true;
      });
      set(KEYS.NOTIFICATIONS, notifications);
    }
  },

  // --- ACTIVITY LOGS ---
  logs: {
    getAll: () => get(KEYS.LOGS),
    add: (text) => {
      const logs = get(KEYS.LOGS);
      logs.unshift({
        id: Date.now().toString(),
        text,
        time: "Just now"
      });
      set(KEYS.LOGS, logs);
    }
  },

  // --- INVITATIONS ---
  invitations: {
    getAll: () => get(KEYS.INVITATIONS, []),
    create: (email, role) => {
      const invitations = get(KEYS.INVITATIONS, []);
      const newInv = {
        id: "inv-" + Date.now(),
        email: email.trim(),
        role: role.toUpperCase(),
        status: "PENDING",
        sentAt: "Just now"
      };
      invitations.unshift(newInv);
      set(KEYS.INVITATIONS, invitations);
      
      db.logs.add(`Sent organization invitation to ${email} as ${role}.`);
      return newInv;
    },
    resend: (id) => {
      const invitations = get(KEYS.INVITATIONS, []);
      const idx = invitations.findIndex(inv => inv.id === id.toString());
      if (idx !== -1) {
        invitations[idx].sentAt = "Just now";
        invitations[idx].status = "PENDING";
        set(KEYS.INVITATIONS, invitations);
        db.logs.add(`Resent organization invitation to ${invitations[idx].email}.`);
      }
    },
    cancel: (id) => {
      const invitations = get(KEYS.INVITATIONS, []);
      const idx = invitations.findIndex(inv => inv.id === id.toString());
      if (idx !== -1) {
        invitations[idx].status = "CANCELLED";
        set(KEYS.INVITATIONS, invitations);
        db.logs.add(`Cancelled organization invitation for ${invitations[idx].email}.`);
      }
    }
  }
};
