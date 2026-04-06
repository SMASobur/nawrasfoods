export const runtime = "nodejs";

import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    jwt.verify(token, process.env.JWT_SECRET!);

    // Receiving JSON instead of a file
    const body = await request.json();
    const { filename, filepath, fileSize } = body;

    if (!filename || !filepath) {
      return NextResponse.json({ error: "Missing file data" }, { status: 400 });
    }

    // Delete old PDFs and save new one
    await prisma.pdfDocument.deleteMany({});

    const pdfDocument = await prisma.pdfDocument.create({
      data: {
        filename: filename,
        filepath: filepath,
        fileSize: fileSize,
      },
    });

    return NextResponse.json({
      success: true,
      message: "PDF saved successfully",
      data: pdfDocument,
    });
  } catch (error) {
    console.error("Save error:", error);
    return NextResponse.json({ error: "Failed to save PDF" }, { status: 500 });
  }
}
