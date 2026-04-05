import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PdfViewer from "@/components/PdfViewer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Logo in Hero */}
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="NawrasFoods Logo"
              width={120}
              height={120}
              className="mx-auto rounded-lg shadow-2xl"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-blue-400">NawrasFoods</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Access and download important documents with ease. Your centralized
            hub for all PDF resources.
          </p>
          <a
            href="#pdf-section"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold text-lg"
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
      <section id="pdf-section" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Available Documents
            </h2>
            <p className="text-gray-600">
              Preview or download the latest document below
            </p>
          </div>
          <PdfViewer />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p className="text-gray-600">
              Have questions? Reach out to us through any of these channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-gray-600">info@nawrasfoods.com</p>
              <p className="text-gray-600">support@nawrasfoods.com</p>
            </div>

            {/* Phone */}
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">+968 XXXX XXXX</p>
              <p className="text-gray-600">Mon - Fri, 9am - 6pm</p>
            </div>

            {/* Address */}
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Address
              </h3>
              <p className="text-gray-600">Muscat, Oman</p>
              <p className="text-gray-600">Al Khuwair</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
