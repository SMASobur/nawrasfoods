import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Read from .env (safe)
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    console.error(
      "Error: ADMIN_USERNAME and ADMIN_PASSWORD must be set in .env",
    );
    process.exit(1);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.admin.upsert({
    where: { username: username },
    update: { password: hashedPassword },
    create: {
      username: username,
      password: hashedPassword,
    },
  });

  console.log("Admin user updated successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
