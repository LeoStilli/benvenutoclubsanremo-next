import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Footer from "../../../components/Footer";
import Newsletter from "../../../components/Newsletter";

const VolunteeringPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-screen bg-white z-1 relative">
        <Image src="/banner.jpg" alt="" fill style={{ objectFit: "cover" }} />
        <div className="w-full h-full bg-black absolute top-0 opacity-35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col items-center gap-4 max-w-[800px] px-4">
            <h1 className="text-white text-6xl font-bold">Volunteering</h1>
            <p className="text-white text-2xl mt-2">
              Giving back to the community we now call home
            </p>
          </div>
          <div className="absolute bottom-6 text-center text-white">
            <p className="text-sm">Scroll to learn more.</p>
          </div>
        </div>
      </div>

      {/* Our Commitment */}
      <div
        id="content"
        className="w-full py-16 bg-[#f5f5f5] flex flex-col items-center"
      >
        <div className="flex flex-col items-center gap-8 w-full px-4 max-w-[800px]">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
              Giving Back
            </div>
            <h2 className="text-4xl font-bold mb-4 text-[#000000]">
              Our Commitment to Sanremo
            </h2>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 flex flex-col gap-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              The heart of the Benvenuto Club of Sanremo beats for our
              community, and this is reflected in the constant commitment of our
              members alongside the Myriam Foundation for the poor.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our volunteers actively take part in the programme, volunteering
              once a week or once every other week at the Foundation&apos;s soup
              kitchen on Via Meridiana. Our service is a complete and concrete
              gesture: we help prepare the meals, we serve them with dignity and
              warmth, and we make sure the spaces are cleaned and left welcoming
              for the following day.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Working alongside local volunteers allows us to integrate into the
              Sanremo community while giving back to it. It is a meaningful way
              to build relationships, understand the city more deeply, and
              contribute to the place we now call home.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With this tireless dedication, we distribute an average of 60
              meals a day to those most in need, offering not only food, but
              also a message of hope and closeness. It is an honour for us to
              collaborate with the Myriam Foundation and with the &ldquo;Il
              Primo Fiore&rdquo; Association to make the &ldquo;Progetto
              Sorriso&rdquo; possible every day.
            </p>

            <div className="mt-2 p-6 bg-blue-50 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600">
                60 meals a day
              </div>
              <div className="text-sm text-gray-600 mt-1">
                distributed to those most in need
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="w-full py-16 bg-white flex flex-col items-center">
        <div className="flex flex-col items-center gap-12 w-full px-4 max-w-[1000px]">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#000000]">
              Who We Work With
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Today we partner with the Myriam Foundation, and we are working
              towards a second partnership to broaden our impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Myriam Foundation */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 flex flex-col">
              <h3 className="text-2xl font-semibold mb-3 text-[#000000]">
                Myriam Foundation
              </h3>
              <p className="text-gray-600 leading-relaxed flex-1">
                Alongside the Myriam Foundation for the poor, our members serve
                at the soup kitchen on Via Meridiana—preparing and serving
                meals, and caring for the space—to make the &ldquo;Progetto
                Sorriso&rdquo; possible every day.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Active partnership
              </div>
            </div>

            {/* Upcoming partnership */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col">
              <h3 className="text-2xl font-semibold mb-3 text-[#000000]">
                A New Partnership
              </h3>
              <p className="text-gray-600 leading-relaxed flex-1">
                We are working towards a second partnership so we can extend our
                support even further within the Sanremo community. Stay tuned—we
                will share more soon.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Coming soon
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-center max-w-2xl">
            Interested in volunteering with us? Reach out—we would love to have
            you alongside us.
          </p>
          <a
            href="/contact"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default VolunteeringPage;
