import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const routes = [
    { name: "Home", route: "/" },
    { name: "Events", route: "/events" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <div className="w-full h-[120px] text-white z-10 absolute top-0">
      <div className="w-full max-w-[1500px] h-full mx-auto flex items-center justify-between px-4 z-10 relative">
        <div className="relative w-[180px] h-full rounded-md overflow-hidden">
          <Link href="/">
            <Image
              src="/LogoSanremo.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.route}
              className={`text-xl py-2 ${
                pathname === route.route
                  ? "font-bold border-b-2 text-blue-300"
                  : ""
              }`}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-8 h-1 bg-white mb-1 rounded transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-white mb-1 rounded transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-white rounded transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-slate-900 flex flex-col items-center gap-6 pt-[150px] pb-8 z-8">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.route}
              className={`text-xl py-2 w-full h-full text-center ${
                pathname === route.route ? "font-bold text-blue-300" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {route.name}
            </Link>
          ))}
        </div>
      )}
      <div
        className="w-full h-screen bg-[#00000057] z-2 absolute top-0"
        hidden={!menuOpen}
      ></div>
    </div>
  );
};

export default Navbar;
