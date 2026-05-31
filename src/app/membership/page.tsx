"use client";

import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Script from "next/script";
import Footer from "../../../components/Footer";
import Newsletter from "../../../components/Newsletter";

const MembershipPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-[60vh] bg-white z-1 relative">
        <Image src="/banner.jpg" alt="" fill style={{ objectFit: "cover" }} />
        <div className="w-full h-full bg-black absolute top-0 opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col items-center gap-4 max-w-[900px] px-4">
            <h1 className="text-white text-5xl md:text-6xl font-bold">
              Become a Member
            </h1>
            <p className="text-white md:text-2xl mt-2">
              You&apos;re one step away from joining the Benvenuto Club Sanremo community
            </p>
          </div>
        </div>
      </div>

      {/* Sign-Up Form Section */}
      <div className="w-full py-16 bg-[#f5f5f5] flex flex-col items-center">
        <div className="flex flex-col items-center gap-8 w-full px-4 max-w-[800px]">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000000]">
              Membership Sign-Up
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll be in touch shortly to welcome you to the club.
              Annual membership is €50 and runs from July 1st through June 30th.
            </p>
          </div>

          <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8">
            <iframe
              data-tally-src="https://tally.so/embed/1A6GR4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Benvenuto Club Sanremo Membership Sign-Up"
            />
          </div>

          <p className="text-sm text-gray-500 text-center">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:benvenutoclubofsanremo@gmail.com?subject=Membership Inquiry"
              className="text-blue-600 hover:underline"
            >
              benvenutoclubofsanremo@gmail.com
            </a>
          </p>
        </div>
      </div>

      <Script
        id="tally-embed"
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
      />

      <Newsletter />
      <Footer />
    </>
  );
};

export default MembershipPage;
