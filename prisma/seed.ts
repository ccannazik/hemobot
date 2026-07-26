import { createHash } from "crypto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function hashPassword(password: string) {
  return createHash("sha256").update(password).digest("hex");
}

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@hemobot.org" },
    update: { passwordHash: hashPassword("admin123") },
    create: {
      email: "admin@hemobot.org",
      name: "HemoBot Admin",
      role: "admin",
      passwordHash: hashPassword("admin123"),
    },
  });

  const demoUser = await prisma.user.upsert({
    where: { email: "demo@hemobot.org" },
    update: { passwordHash: hashPassword("demo123") },
    create: {
      email: "demo@hemobot.org",
      name: "Bay Area Parent",
      passwordHash: hashPassword("demo123"),
    },
  });

  const users = [
    { email: "maria@example.com", name: "Maria K.", id: "" },
    { email: "james@example.com", name: "James T.", id: "" },
    { email: "sarah@example.com", name: "Sarah L.", id: "" },
  ];

  for (const u of users) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: { email: u.email, name: u.name },
    });
    u.id = user.id;
  }

  const existingPosts = await prisma.forumPost.count();
  if (existingPosts === 0) {
    await prisma.forumPost.createMany({
      data: [
        {
          title: "Just received our son's diagnosis — feeling overwhelmed",
          content:
            "Our 2-year-old was recently diagnosed with moderate Hemophilia A. We're in Palo Alto and trying to figure out next steps. Has anyone worked with the Stanford HTC? The podcast episode on the first 48 hours really helped — would love to hear your experience getting started.\n\n(Not medical advice — just looking for peer support.)",
          category: "Newly Diagnosed",
          authorId: demoUser.id,
          likes: 24,
        },
        {
          title: "Tips for talking to your child's school about hemophilia",
          content:
            "Sharing what worked for us when setting up a 504 plan and communicating with teachers and the school nurse. Happy to answer questions — this is just our personal experience. Also check the School & Sports podcast episode!",
          category: "School & Sports",
          authorId: users[0].id,
          likes: 18,
        },
        {
          title: "On-demand vs prophylaxis — how we decided (with our HTC)",
          content:
            "I see a lot of questions about treatment schedules. We spent months with our hematologist before starting prophylaxis for our 6-year-old. Every case is different — please talk to your care team. Sharing our journey in case it helps someone feel less alone.",
          category: "Treatment Questions",
          authorId: users[1].id,
          likes: 31,
        },
        {
          title: "Diagnosed at 28 — adult life with hemophilia",
          content:
            "I was diagnosed as an adult after a knee surgery complication. Finding an HTC changed everything. If you're an adult newly diagnosed, you're not alone. Happy to chat about work, travel, and building a care team.",
          category: "Adults with Hemophilia",
          authorId: users[2].id,
          likes: 15,
        },
        {
          title: "Our son played soccer this season — success story!",
          content:
            "With clearance from our HTC and a great coach who understood his condition, our 10-year-old had his best season yet. Not saying this works for everyone — but wanted to share a win. 💙",
          category: "Success Stories",
          authorId: demoUser.id,
          likes: 42,
        },
        {
          title: "How do you explain hemophilia to relatives?",
          content:
            "Grandparents keep asking if he'll 'grow out of it.' Looking for simple ways you've explained hemophilia to family without causing panic. Also tried HemoBot AI which gave a good plain-language summary I could share.",
          category: "Questions for Community",
          authorId: users[0].id,
          likes: 9,
        },
        {
          title: "Caregiver burnout is real — how do you cope?",
          content:
            "Between infusions, appointments, and worry, I'm exhausted. Our HTC social worker pointed us to a support group but I'd love to hear from other parents here too.",
          category: "Parents & Caregivers",
          authorId: users[1].id,
          likes: 27,
        },
      ],
    });
  }

  console.log("Seed complete.");
  console.log("Demo login: demo@hemobot.org / demo123");
  console.log("Admin:", admin.id);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
