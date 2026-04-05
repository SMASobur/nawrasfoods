export const runtime = "nodejs";
import prisma from "@/lib/prisma";
import { put } from "@vercel/blob";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    jwt.verify(token, process.env.JWT_SECRET!);

    const formData = await request.formData();
    const file = formData.get("pdf") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Only PDF files are allowed" },
        { status: 400 },
      );
    }

    // Upload to Vercel Blob
    const blob = await put(file.name, file, {
      access: "public",
      allowOverwrite: true,
    });

    // Delete old PDFs from database
    await prisma.pdfDocument.deleteMany({});

    // Save to database
    const pdfDocument = await prisma.pdfDocument.create({
      data: {
        filename: file.name,
        filepath: blob.url,
        fileSize: file.size,
      },
    });

    return NextResponse.json({
      success: true,
      message: "PDF uploaded successfully",
      data: pdfDocument,
    });
  } catch (error) {
    console.error("Upload error:", error);

    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to upload PDF", details: message },
      { status: 500 },
    );
  }
}
