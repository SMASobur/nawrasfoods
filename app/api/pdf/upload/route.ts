export const runtime = "nodejs";

import prisma from "@/lib/prisma";
import { r2 } from "@/lib/r2";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("admin_token")?.value;
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    jwt.verify(token, process.env.JWT_SECRET!);

    const filename = request.nextUrl.searchParams.get("filename");
    if (!filename)
      return NextResponse.json({ error: "Missing filename" }, { status: 400 });

    const safeName = filename.replace(/[^a-zA-Z0-9.-]/g, "_");
    const key = `${Date.now()}_${safeName}`;

    // Create temporary upload URL valid for 60 seconds
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      ContentType: "application/pdf",
    });

    const presignedUrl = await getSignedUrl(r2, command, { expiresIn: 60 });
    const publicUrl = `${process.env.R2_PUBLIC_URL}/${key}`;

    return NextResponse.json({ presignedUrl, publicUrl, key });
  } catch (error) {
    console.error("Presign error:", error);
    return NextResponse.json(
      { error: "Failed to generate link" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("admin_token")?.value;
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    jwt.verify(token, process.env.JWT_SECRET!);

    const body = await request.json();
    const { filename, filepath, fileSize } = body;

    if (!filename || !filepath) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    await prisma.pdfDocument.deleteMany();
    await prisma.pdfDocument.create({
      data: { filename, filepath, fileSize },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Save error:", error);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
