import Link from "next/link";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import { getUpcomingEvents, Event } from "../lib/events";
import EventsSection from "../components/EventsSection";

export const revalidate = 0;

const sponsors = [
  {
    src: "/Kambusa.jpeg",
    name: "Ristorante La Kambusa Di Prota",
    type: "Ristorante · Sanremo",
    cover: true,
  },
  {
    src: "/AndreaDelTufo.png",
    name: "Andrea Del Tufo",
    type: "Parrucchiere · Sanremo",
  },
  {
    src: "/Nettuno.png",
    name: "Nettuno",
    type: "Spiaggia · Sanremo",
  },
  {
    src: "/SanremoRealEstate.jpeg",
    name: "Sanremo Real Estate",
    type: "Agenzia Immobiliare · Sanremo",
  },
  {
    src: "/DaNico.jpeg",
    name: "Da Nico",
    type: "Ristorante · Sanremo",
  },
  {
    src: "/GrandHotelDesAnglais.png",
    name: "Grand Hotel Des Anglais",
    type: "Hotel · Sanremo",
  },
  {
    src: "/LidoLaFontana-v2.jpeg",
    name: "Lido La Fontana",
    type: "Stabilimento Balneare · Sanremo",
  },
];

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

      <section className="w-full py-20 bg-gradient-to-b from-[#e8f0fb] to-[#cfe0f5] relative overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-40"></div>

        <div className="flex flex-col items-center gap-10 w-full px-4 max-w-[1200px] mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
              Our Partners
            </div>
            <h2 className="text-4xl font-bold text-[#000000] mb-3">
              Proudly Supported By
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're grateful to the local partners who help make our community possible
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <div className="flex w-max animate-marquee">
              {[...sponsors, ...sponsors].map((s, i) => (
                <div
                  key={i}
                  aria-hidden={i >= sponsors.length}
                  className="w-[440px] shrink-0 mr-8 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
                >
                  <div
                    className={`relative w-full h-[320px] bg-white ${
                      s.cover ? "" : "flex items-center justify-center p-8"
                    }`}
                  >
                    {s.cover ? (
                      <Image
                        src={s.src}
                        alt={s.name}
                        fill
                        className="object-cover object-right"
                        sizes="440px"
                      />
                    ) : (
                      <Image
                        src={s.src}
                        alt={s.name}
                        width={800}
                        height={700}
                        className="max-h-full w-auto object-contain"
                        sizes="440px"
                      />
                    )}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold text-[#000000]">
                      {s.name}
                    </h3>
                    <p className="text-gray-500 text-base mt-1">{s.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
