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

    // Convert file to Base64 for database storage
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Data = buffer.toString("base64");

    // Delete old PDFs
    await prisma.pdfDocument.deleteMany({});

    // Save to database (file data stored as base64)
    const pdfDocument = await prisma.pdfDocument.create({
      data: {
        filename: file.name,
        filepath: `data:application/pdf;base64,${base64Data}`,
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
    return NextResponse.json(
      { error: "Failed to upload PDF" },
      { status: 500 },
    );
  }
}
