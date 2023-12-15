import Link from "next/link";
import { routes } from "../routes";

const NavDesktop = () => {
  return (
    <div>
      <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
        {routes.map((route,index) => {
          const { Icon, href, title } = route;
          return (
            <li key={index}>
              <Link
                href={href}
                className="flex items-center gap-1 hover:text-neutral-400 transition-all"
              >
                <Icon />
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavDesktop;
