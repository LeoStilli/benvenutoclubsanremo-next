import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-fit text-white z-10 absolute bg-black">
      <div className="w-full max-w-[1500px] h-fit mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="relative w-[130px] h-[80px] rounded-md overflow-hidden">
              <Image
                src="/bcs_white.png"
                alt="Benvenuto Club Sanremo Logo"
                fill
                className="object-contain"
              />
            </div>
            <a
              href="https://www.facebook.com/groups/1242144056578439/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="fill-white w-8 h-8">
                <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
              </svg>
            </a>
          </div>
          <span className="text-xl font-semibold">BenvenutoClubSanremo</span>
        </div>
        <div className="flex gap-8 text-white">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/events" className="hover:underline">
            Events
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[1500px] mx-auto px-4 pb-2 text-sm text-gray-400">
        <p>
          Copyright © {getCurrentYear()} BenvenutoClubSanremo. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;

export function getCurrentYear() {
  const today = new Date();
  return today.getFullYear();
}
