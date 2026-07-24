import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@hemobot.local" },
    update: {},
    create: {
      email: "admin@hemobot.local",
      name: "HEMOBOT Admin",
      role: "admin",
    },
  });

  const sampleUser = await prisma.user.upsert({
    where: { email: "community@hemobot.local" },
    update: {},
    create: {
      email: "community@hemobot.local",
      name: "Bay Area Parent",
    },
  });

  const existingPosts = await prisma.forumPost.count();
  if (existingPosts === 0) {
    await prisma.forumPost.createMany({
      data: [
        {
          title: "Just received our son's diagnosis — feeling overwhelmed",
          content:
            "Our 2-year-old was recently diagnosed with moderate Hemophilia A. We're in Palo Alto and trying to figure out next steps. Has anyone worked with the Stanford HTC? Would love to hear about your experience getting started.",
          category: "Newly Diagnosed",
          authorId: sampleUser.id,
          likes: 5,
        },
        {
          title: "Tips for talking to your child's school about hemophilia",
          content:
            "Sharing what worked for us when setting up a 504 plan and communicating with teachers and the school nurse. Happy to answer questions — this is just our personal experience, not medical advice.",
          category: "School and Education",
          authorId: sampleUser.id,
          likes: 8,
        },
        {
          title: "Traveling internationally with factor — what we learned",
          content:
            "We recently traveled to Europe and wanted to share our experience preparing medically and logistically. Definitely talk to your HTC before any international travel — they gave us a letter and helped us identify care abroad.",
          category: "Travel",
          authorId: sampleUser.id,
          likes: 3,
        },
      ],
    });
  }

  console.log("Seed complete. Admin user:", admin.id);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
