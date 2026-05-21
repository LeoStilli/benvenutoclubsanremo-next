import Link from "next/link";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import { getUpcomingEvents, Event } from "../lib/events";
import EventsSection from "../components/EventsSection";

const Home = async () => {
  // Fetch events from Sanity CMS
  const upcomingEvents = await getUpcomingEvents();
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
            <p className="text-white md:text-2xl mt-2">
              Join our English speaking community for cultural and social
              gatherings!
            </p>
          </div>
          <div className="absolute bottom-6 text-center text-white">
            <p className="text-sm">Scroll for more.</p>
          </div>
        </div>
      </div>
      <div className="w-full py-12 bg-[#f5f5f5] flex flex-col items-center">
        <div className="flex flex-col items-center gap-6 w-full px-10 max-w-[1500px]">
          <h2 className="text-3xl font-bold mb-8 text-[#000000]">About Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full px-1">
            <Image
              src="/LogoSanremo.png"
              alt="Event 1"
              width={400}
              height={600}
              className="rounded shadow"
            />
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-[#000000]">
                Our Community
              </h3>
              <p className="text-lg text-gray-700">
                Founded in 2005, the BCS began with a simple yet powerful idea:
                to bring together English speakers in the Sanremo area through
                friendship, culture, and shared experiences. Today, our thriving
                community of over 400 members enjoys a lively calendar of
                events—from guided museum visits and town explorations to
                stimulating discussions, social lunches, cocktails, and outdoor
                activities like hiking, padel, and tennis. Whether you are
                looking to connect, learn, or simply enjoy good company, our
                monthly newsletter showcases a diverse range of events designed
                to spark curiosity and foster a true sense of belonging. At BCS,
                it is more than a club—it is a community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <EventsSection events={upcomingEvents} />

      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
