"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Native smooth scroll runs at a fixed browser speed; animate it ourselves so
// we can control the duration (~50% slower than the browser default).
const SCROLL_DURATION = 900;

const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

const scrollToContent = () => {
  const el = document.getElementById("content");
  if (!el) return;
  const startY = window.scrollY;
  const targetY = startY + el.getBoundingClientRect().top;
  const diff = targetY - startY;
  if (diff === 0) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    return;
  }

  let start: number | null = null;
  const step = (timestamp: number) => {
    if (start === null) start = timestamp;
    const progress = Math.min((timestamp - start) / SCROLL_DURATION, 1);
    window.scrollTo(0, startY + diff * easeInOutQuad(progress));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const routes = [
    { name: "Home", route: "/" },
    { name: "Events", route: "/events" },
    { name: "Join Us", route: "/join" },
    { name: "Volunteering", route: "/volunteering" },
    { name: "Contact", route: "/contact" },
  ];

  // After navigating to a new page via a nav link, smooth-scroll to the
  // content once it lands in the DOM (streamed pages may render it late).
  useEffect(() => {
    if (sessionStorage.getItem("scrollToContent") !== "1") return;
    window.scrollTo(0, 0);
    let frame: number;
    let tries = 0;
    const tick = () => {
      const el = document.getElementById("content");
      if (el) {
        // Consume the flag only once we actually scroll, so React's
        // StrictMode mount/cleanup/mount cycle doesn't swallow it.
        sessionStorage.removeItem("scrollToContent");
        scrollToContent();
      } else if (tries++ < 60) {
        frame = requestAnimationFrame(tick);
      } else {
        sessionStorage.removeItem("scrollToContent");
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: string
  ) => {
    setMenuOpen(false);
    if (pathname === route) {
      // Same page: animate straight to the content.
      e.preventDefault();
      scrollToContent();
    } else {
      // Different page: land at the top, then animate down after it mounts.
      sessionStorage.setItem("scrollToContent", "1");
    }
  };

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
              scroll={false}
              onClick={(e) => handleNavClick(e, route.route)}
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
              scroll={false}
              className={`text-xl py-2 w-full h-full text-center ${
                pathname === route.route ? "font-bold text-blue-300" : ""
              }`}
              onClick={(e) => handleNavClick(e, route.route)}
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
