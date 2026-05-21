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
          </div>
          <span className="md:block hidden text-xl font-semibold">BenvenutoClubSanremo</span>
        </div>
        <div className="flex gap-8 text-white">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/events" className="hover:underline">
            Events
          </Link>
          <Link href="/join" className="hover:underline">
            Join Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[1500px] mx-auto px-4 pb-4 flex text-sm text-gray-400 justify-between items-center">
        <p>
          Copyright © {getCurrentYear()} BenvenutoClubSanremo. All rights
          reserved.
        </p>
        <div className="flex items-center gap-2">
          <Link
              href="https://www.facebook.com/groups/1242144056578439/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="fill-white w-8 h-8 hover:fill-gray-300 transition-colors">
                <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
              </svg>
            </Link>
          <Link
              href="https://www.instagram.com/benvenutoclubofsanremo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-white w-8 h-8 hover:fill-gray-300 transition-colors">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;

export function getCurrentYear() {
  const today = new Date();
  return today.getFullYear();
}
