import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user (password: sbr123)
  const hashedPassword = await bcrypt.hash("sbr123", 10);

  await prisma.admin.upsert({
    where: { username: "sikdar" },
    update: {},
    create: {
      username: "sikdar",
      password: hashedPassword,
    },
  });

  console.log("Admin user created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
