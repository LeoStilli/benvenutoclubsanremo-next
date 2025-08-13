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
    <div className="w-full h-[80px] bg-white">
      <div className="w-full max-w-[1200px] h-full mx-auto flex items-center justify-between">
        <div>Logo</div>
        <div className="flex">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.route}
              className={`mx-4 ${pathname === route.route ? "font-bold" : ""}`}
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
