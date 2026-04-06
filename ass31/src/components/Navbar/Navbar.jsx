import "./Navbar.css";
import { Link } from "react-router-dom";
import { House, Info, Phone, Briefcase } from "lucide-react";

const NavConfig = [
  {
    name: "Home",
    icon: <House className="menu-icon" />,
    title: "home",
    path: "/",
  },
  {
    name: "About",
    icon: <Info className="menu-icon" />,
    title: "about",
    path: "/about",
  },
  {
    name: "Contact",
    icon: <Phone className="menu-icon" />,
    title: "contact",
    path: "/contact",
  },
    {
    name: "OurService",
    icon: <Briefcase className="menu-icon" />,
    title: "ourservice",
    path: "/ourservice",
  },
];

function Navbar({ active }) {
  return (
    <div className="nav">
      {NavConfig.map((menuItem) => (
        <Link
          key={menuItem.name}
          to={menuItem.path}
          className={`menu-item ${
            active === menuItem.title ? "active-menu" : ""
          }`}
        >
          {menuItem.icon}
          {menuItem.name}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;