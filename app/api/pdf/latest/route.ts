export const runtime = "nodejs";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pdf = await prisma.pdfDocument.findFirst({
      orderBy: { uploadedAt: "desc" },
    });

    if (!pdf) {
      return NextResponse.json({ error: "No PDF found" }, { status: 404 });
    }

    return NextResponse.json({
      id: pdf.id,
      filename: pdf.filename,
      filepath: pdf.filepath,
      fileSize: pdf.fileSize,
      uploadedAt: pdf.uploadedAt,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch PDF" }, { status: 500 });
  }
}
