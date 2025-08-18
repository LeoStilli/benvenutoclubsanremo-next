"use client";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import events from "../hooks/useEvents";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";

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
            <p className="text-white md:text-2xl mt-2">
              Join our English speaking community for cultural and social
              gatherings!
            </p>
            <Link
              href={`/events#${events[0].title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              scroll={false}
            >
              <button className="mt-4 px-12 py-4 bg-blue-600 text-white font-semibold rounded cursor-pointer hover:bg-gray-800 transition">
                Upcoming Events
              </button>
            </Link>
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
                community of over 250 members enjoys a lively calendar of
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
          <div className="w-full py-12 bg-[#f5f5f5] flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full px-1">
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-[#000000]">
                  Participation Fund
                </h3>
                <p className="text-lg text-gray-700">
                  The BCS does not collect annual membership fees. Instead, each
                  time you participate in one of our events, we charge 1€. This
                  money is used to keep the club running and we use it to pay
                  our website domain page, our guides when members cancel last
                  minute, and to subsidize an extra item on the lunch menu
                  amongst others.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#f5f5f5] flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-[#000000]">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="bg-white rounded shadow p-4 flex flex-col items-center cursor-pointer"
                  onClick={() => console.log(`Clicked on ${event.title}`)}
                >
                  <div className="w-full h-[160px] relative mb-4">
                    <Link
                      href={`/events#${event.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      scroll={false}
                    >
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="rounded mb-4 object-cover"
                      />
                    </Link>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#000000]">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {event.description}
                  </p>
                  <Link
                    href={`/events#${event.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    scroll={false}
                  >
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded cursor-pointer hover:bg-gray-800 transition ">
                      Learn More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
