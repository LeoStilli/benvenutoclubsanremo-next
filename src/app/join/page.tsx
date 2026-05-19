"use client";

import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Footer from "../../../components/Footer";
import Newsletter from "../../../components/Newsletter";

const JoinUsPage = () => {

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-screen bg-white z-1 relative">
        <Image src="/banner.jpg" alt="" fill style={{ objectFit: "cover" }} />
        <div className="w-full h-full bg-black absolute top-0 opacity-35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col items-center gap-4 max-w-[800px]">
            <h1 className="text-white text-6xl font-bold">Join Our Community</h1>
            <p className="text-white text-2xl mt-2">
              Become part of Sanremo's vibrant English-speaking community
            </p>
          </div>
          <div className="absolute bottom-6 text-center text-white">
            <p className="text-sm">Scroll to join us.</p>
          </div>
        </div>
      </div>

      {/* Membership Benefits */}
      <div className="w-full py-16 bg-[#f5f5f5] flex flex-col items-center">
        <div className="flex flex-col items-center gap-12 w-full px-4 max-w-[1200px]">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#000000]">
              Why Join BCS?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Connect with like-minded people, explore local culture, and create lasting friendships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#000000]">
                Meet New People
              </h3>
              <p className="text-gray-600">
                Connect with over 400 English-speaking members from diverse backgrounds
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#000000]">
                Regular Events
              </h3>
              <p className="text-gray-600">
                Enjoy cultural visits, social lunches, sports activities, and more
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#000000]">
                Local Culture
              </h3>
              <p className="text-gray-600">
                Discover the beauty and history of Liguria with fellow enthusiasts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Information */}
      <div className="w-full py-16 bg-white flex flex-col items-center">
        <div className="flex flex-col items-center gap-8 w-full px-4 max-w-[800px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#000000]">
              Ready to Join Our Family?
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Benvenuto Club Sanremo, we believe that life's greatest adventures happen when we come together.
                Whether you're new to the Italian Riviera or have been calling it home for years, our community offers
                you the chance to create meaningful connections, explore hidden gems of Ligurian culture, and build
                friendships that extend far beyond our monthly gatherings.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                From intimate wine tastings in centuries-old cellars to spirited hiking adventures along the coastal
                trails, from thought-provoking cultural discussions to simply sharing a laugh over aperitivos at sunset—
                every moment with BCS is designed to enrich your experience of living in this beautiful corner of Italy.
                Because the best stories aren't just lived, they're shared.
              </p>

              {/* Membership Details */}
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-[#000000] flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  Membership Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-bold text-blue-600 mb-1">€50</div>
                    <div className="text-gray-600">Annual Membership</div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-lg font-semibold text-[#000000] mb-1">July 1st - June 30th</div>
                    <div className="text-gray-600">Membership Year</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>What's included:</strong> Access to all events, monthly newsletter,
                    priority booking for popular activities, and exclusive member-only gatherings throughout the year.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Ready to become part of something special? Contact us to learn more about membership
                  and discover how BCS can become your gateway to the very best of Sanremo living.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:benvenutoclubofsanremo@gmail.com?subject=Membership Inquiry"
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="/events"
                    className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    See Our Events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default JoinUsPage;