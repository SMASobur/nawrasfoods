export const runtime = "nodejs";

import prisma from "@/lib/prisma";
import { r2 } from "@/lib/r2";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("admin_token")?.value;
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    jwt.verify(token, process.env.JWT_SECRET!);

    const formData = await request.formData();
    const file = formData.get("pdf") as File;

    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const key = `${Date.now()}_${safeName}`;

    await r2.send(
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: key,
        Body: await file.arrayBuffer(),
        ContentType: file.type,
      }),
    );

    const publicUrl = `${process.env.R2_PUBLIC_URL}/${key}`;

    await prisma.pdfDocument.deleteMany();
    await prisma.pdfDocument.create({
      data: { filename: file.name, filepath: publicUrl, fileSize: file.size },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
