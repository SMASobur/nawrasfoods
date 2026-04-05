import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PdfViewer from "@/components/PdfViewer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section - Clean Light Theme */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Logo with Gold Ring Shadow */}
          <div className="mb-8 inline-block p-3 rounded-2xl shadow-2xl bg-white ring-4 ring-amber-200/50">
            <Image
              src="/images/logo-nav.png"
              alt="NawrasFoods Logo"
              width={140}
              height={140}
              className="rounded-xl"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-6 tracking-tight">
            Welcome to <span className="text-red-600">Nawras</span>
            <span className="text-amber-500">Foods</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Access and download important documents with ease. Your centralized
            hub for all PDF resources.
          </p>
          <a
            href="#pdf-section"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Documents
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
        </div>
      </section>

      {/* PDF Section */}
      <section id="pdf-section" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Available Documents
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500">
              Preview or download the latest document below
            </p>
          </div>
          <PdfViewer />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500">
              Have questions? Reach out to us through any of these channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
                <svg
                  className="w-7 h-7 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Email</h3>
              <p className="text-gray-500 text-sm">info@nawrasfoods.com</p>
              <p className="text-gray-500 text-sm">support@nawrasfoods.com</p>
            </div>

            {/* Phone */}
            <div className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
                <svg
                  className="w-7 h-7 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Phone</h3>
              <p className="text-gray-500 text-sm">+968 XXXX XXXX</p>
              <p className="text-gray-500 text-sm">Mon - Fri, 9am - 6pm</p>
            </div>

            {/* Address */}
            <div className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
                <svg
                  className="w-7 h-7 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Address</h3>
              <p className="text-gray-500 text-sm">Muscat, Oman</p>
              <p className="text-gray-500 text-sm">Al Khuwair</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
