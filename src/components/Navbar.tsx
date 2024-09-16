"use client";

import { FloatingNav } from "./ui/floating-navbar";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
