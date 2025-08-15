import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Routes {
  name: string;
  route: string;
}

const Navbar = () => {
  const pathname = usePathname();
  const routes: Routes[] = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Events",
      route: "/events",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];

  return (
    <div className="w-full h-[120px] text-white z-10 absolute top-0">
      <div className="w-full max-w-[1500px] h-full mx-auto flex items-center justify-between px-4">
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
        <div className="flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.route}
              className={`text-xl py-2 ${
                pathname === route.route ? "font-bold border-b-2 text-blue-300" : ""
              }`}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
