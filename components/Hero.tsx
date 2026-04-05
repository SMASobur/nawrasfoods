"use client";

import { useEffect, useState } from "react";

// Date formatter
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function Hero() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [filename, setFilename] = useState<string | null>(null);
  const [uploadedAt, setUploadedAt] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/pdf/latest")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("No PDF");
      })
      .then((data) => {
        setPdfUrl(data.filepath);
        setFilename(data.filename);
        setUploadedAt(data.uploadedAt);
      })
      .catch(() => {
        // No PDF uploaded yet
      });
  }, []);

  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* View Documents Button */}
          <a
            href="#pdf-section"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center"
          >
            Visa Sortiment Lista
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>

          {/* Direct Download Button */}
          {pdfUrl && filename && (
            <a
              href={pdfUrl}
              download={filename}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-slate-800 border-2 border-slate-200 hover:border-amber-400 px-10 py-4 rounded-xl transition-all font-semibold text-lg shadow-sm hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <svg
                className="w-5 h-5 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download / Ladda ner PDF
            </a>
          )}
        </div>

        {/* Upload Date */}
        {uploadedAt && (
          <p className="mt-6 text-lg text-gray-500 flex items-center justify-center gap-1.5">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Senast uppdaterad: {formatDate(uploadedAt)}
          </p>
        )}
      </div>
    </section>
  );
}
