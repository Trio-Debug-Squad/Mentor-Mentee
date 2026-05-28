import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Cleaning up existing database...");
  await prisma.passwordResetToken.deleteMany({});
  await prisma.notification.deleteMany({});
  await prisma.activityLog.deleteMany({});
  await prisma.attachment.deleteMany({});
  await prisma.taskFeedback.deleteMany({});
  await prisma.taskSubmission.deleteMany({});
  await prisma.task.deleteMany({});
  await prisma.projectMember.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.invitation.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.organization.deleteMany({});

  console.log("Seeding database...");

  // 1. Create Organization
  const org = await prisma.organization.create({
    data: {
      name: "Demo Organization",
      slug: "demo-org",
      logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop",
    },
  });

  // Hashing passwords
  const adminHash = await bcrypt.hash("Admin123!", 10);
  const mentorHash = await bcrypt.hash("Mentor123!", 10);
  const studentHash = await bcrypt.hash("Student123!", 10);

  // 2. Create Users
  // Admins
  const admin = await prisma.user.create({
    data: {
      organizationId: org.id,
      name: "Demo Admin",
      email: "admin@demo.com",
      passwordHash: adminHash,
      role: "ADMIN",
      avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=DA",
    },
  });

  // Mentors
  const sarah = await prisma.user.create({
    data: {
      organizationId: org.id,
      name: "Sarah Connor",
      email: "mentor@demo.com", // Main demo mentor
      passwordHash: mentorHash,
      role: "MENTOR",
      avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=SC",
    },
  });

  const marcus = await prisma.user.create({
    data: {
      organizationId: org.id,
      name: "Marcus Lee",
      email: "marcus@demo.com",
      passwordHash: mentorHash,
      role: "MENTOR",
      avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=ML",
    },
  });

  // Mentees
  const emily = await prisma.user.create({
    data: {
      organizationId: org.id,
      name: "Emily Davies",
      email: "student@demo.com", // Main demo mentee
      passwordHash: studentHash,
      role: "MENTEE",
      avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=ED",
    },
  });

  const david = await prisma.user.create({
    data: {
      organizationId: org.id,
      name: "David Chen",
      email: "david@demo.com",
      passwordHash: studentHash,
      role: "MENTEE",
      avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=DC",
    },
  });

  const sarahJ = await prisma.user.create({
    data: {
      organizationId: org.id,
      name: "Sarah Johnson",
      email: "sarah.j@demo.com",
      passwordHash: studentHash,
      role: "MENTEE",
      avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=SJ",
    },
  });

  const priya = await prisma.user.create({
    data: {
      organizationId: org.id,
      name: "Priya Nair",
      email: "priya@demo.com",
      passwordHash: studentHash,
      role: "MENTEE",
      avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=PN",
    },
  });

  // 3. Create Projects
  const project1 = await prisma.project.create({
    data: {
      organizationId: org.id,
      createdById: admin.id,
      name: "Mobile App Development",
      description: "Build a state of the art React Native application with elegant flows.",
      status: "ACTIVE",
    },
  });

  const project2 = await prisma.project.create({
    data: {
      organizationId: org.id,
      createdById: admin.id,
      name: "UI/UX Design System",
      description: "Design premium styling system and component patterns.",
      status: "ACTIVE",
    },
  });

  const project3 = await prisma.project.create({
    data: {
      organizationId: org.id,
      createdById: admin.id,
      name: "Backend API Framework",
      description: "Performant node backend configuration.",
      status: "COMPLETED",
    },
  });

  // 4. Create Project Members (Assign Mentors and Mentees)
  // Project 1: Sarah (Mentor), Emily & Priya (Mentees)
  await prisma.projectMember.createMany({
    data: [
      { projectId: project1.id, userId: sarah.id, role: "MENTOR" },
      { projectId: project1.id, userId: emily.id, role: "MENTEE" },
      { projectId: project1.id, userId: priya.id, role: "MENTEE" },
    ],
  });

  // Project 2: Marcus (Mentor), David & Sarah Johnson (Mentees)
  await prisma.projectMember.createMany({
    data: [
      { projectId: project2.id, userId: marcus.id, role: "MENTOR" },
      { projectId: project2.id, userId: david.id, role: "MENTEE" },
      { projectId: project2.id, userId: sarahJ.id, role: "MENTEE" },
    ],
  });

  // Project 3: Marcus (Mentor), David (Mentee)
  await prisma.projectMember.createMany({
    data: [
      { projectId: project3.id, userId: marcus.id, role: "MENTOR" },
      { projectId: project3.id, userId: david.id, role: "MENTEE" },
    ],
  });

  // 5. Create Tasks (for Emily Davies, assigned by Sarah Connor in Project 1)
  const task1 = await prisma.task.create({
    data: {
      projectId: project1.id,
      createdById: sarah.id,
      assignedToId: emily.id,
      title: "Create Wireframes",
      description: "Develop structural wireframes for navigation and login components.",
      instructions: "Keep standard dimensions, emphasize clean layouts, and iterate quickly.",
      status: "REJECTED", // Revision Needed
      priority: "HIGH",
      deadline: new Date(Date.now() + 12 * 60 * 60 * 1000), // Today 11:59 PM
    },
  });

  const task2 = await prisma.task.create({
    data: {
      projectId: project1.id,
      createdById: sarah.id,
      assignedToId: emily.id,
      title: "User Flow Diagram",
      description: "Define comprehensive routing transitions for authentication validation.",
      instructions: "Map all error routes and standard profile entry checkpoints.",
      status: "IN_PROGRESS",
      priority: "MEDIUM",
      deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    },
  });

  const task3 = await prisma.task.create({
    data: {
      projectId: project2.id,
      createdById: marcus.id,
      assignedToId: emily.id,
      title: "Design System Tokens",
      description: "Specify default palettes, spacing sizes, and type curves.",
      status: "SUBMITTED", // Under Review
      priority: "HIGH",
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    },
  });

  const task4 = await prisma.task.create({
    data: {
      projectId: project2.id,
      createdById: marcus.id,
      assignedToId: emily.id,
      title: "Competitor Analysis",
      description: "Research 3 similar applications and summarize landing patterns.",
      status: "APPROVED", // Completed
      priority: "LOW",
      deadline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
  });

  // 6. Create Task Submissions
  const submission1 = await prisma.taskSubmission.create({
    data: {
      taskId: task1.id,
      submittedBy: emily.id,
      content: "Here is the first draft of the main workspace wireframes. I focused on clean spacing.",
      status: "REJECTED",
    },
  });

  const submission4 = await prisma.taskSubmission.create({
    data: {
      taskId: task4.id,
      submittedBy: emily.id,
      content: "Completed competitor audit: analyzed layouts, signup loops, and primary metric panels.",
      status: "APPROVED",
    },
  });

  // 7. Create Feedback
  await prisma.taskFeedback.create({
    data: {
      taskId: task1.id,
      submissionId: submission1.id,
      reviewerId: sarah.id,
      comment: "Good start, but we need to rethink the navigation bar. Please revise the layout.",
      action: "REJECT",
    },
  });

  await prisma.taskFeedback.create({
    data: {
      taskId: task4.id,
      submissionId: submission4.id,
      reviewerId: marcus.id,
      comment: "Excellent analysis. Great insights on user onboarding flows.",
      action: "APPROVE",
    },
  });

  // 8. Create Activity Logs
  await prisma.activityLog.createMany({
    data: [
      {
        organizationId: org.id,
        actorId: sarah.id,
        projectId: project1.id,
        eventType: "PROJECT_CREATED",
        metadata: JSON.stringify({ projectName: "Mobile App Development" }),
      },
      {
        organizationId: org.id,
        actorId: emily.id,
        taskId: task4.id,
        eventType: "TASK_SUBMITTED",
        metadata: JSON.stringify({ taskTitle: "Competitor Analysis" }),
      },
      {
        organizationId: org.id,
        actorId: marcus.id,
        taskId: task4.id,
        eventType: "TASK_APPROVED",
        metadata: JSON.stringify({ reviewerName: "Marcus Lee" }),
      },
    ],
  });

  // 9. Create Notifications for Emily Davies
  await prisma.notification.createMany({
    data: [
      {
        userId: emily.id,
        type: "REVIEW_COMPLETED",
        title: "Revision Requested",
        body: "Sarah Connor requested changes on 'Create Wireframes'",
        referenceId: task1.id,
        referenceType: "tasks",
        isRead: false,
      },
      {
        userId: emily.id,
        type: "DEADLINE_REMINDER",
        title: "Upcoming Deadline",
        body: "Upcoming deadline: Create Wireframes in 12 hours",
        referenceId: task1.id,
        referenceType: "tasks",
        isRead: false,
      },
      {
        userId: emily.id,
        type: "REVIEW_COMPLETED",
        title: "Task Approved",
        body: "Marcus Lee reviewed and approved your submission for 'Competitor Analysis'",
        referenceId: task4.id,
        referenceType: "tasks",
        isRead: true,
      },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding database: ", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
