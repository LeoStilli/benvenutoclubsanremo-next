"use client";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-white z-1 relative">
        <Image src="/Sanremo.jpg" alt="" fill style={{ objectFit: "cover" }} />
        <div className="w-full h-full bg-black absolute top-0 opacity-35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col items-center gap-4 max-w-[800px]">
            <h1 className="text-white text-6xl font-bold">
              Benvenuto Club Sanremo
            </h1>
            <p className="text-white text-2xl mt-2">
              Join our English speaking community for cultural and social
              gatherings!
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-[#520010] font-semibold rounded">
              Upcoming Events
            </button>
          </div>
          <div className="absolute bottom-6 text-center text-white">
            <p className="text-sm">Scroll for more.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
