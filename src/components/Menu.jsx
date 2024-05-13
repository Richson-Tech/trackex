"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const links = [
  { id: 1, title: "Dashboard", url: "/" },
  { id: 2, title: "Transfer", url: "/" },
  { id: 3, title: "Account Overview", url: "/" },
  { id: 3, title: "Profiles", url: "/" },
  { id: 3, title: "My Cards", url: "/" },
  { id: 3, title: "Logout", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {open ? (
        <MdOutlineClose
          className="text-white"
          size="2rem"
          onClick={() => setOpen(false)}
        />
      ) : (
        <CgMenu
          className="text-white"
          size="2rem"
          onClick={() => setOpen(true)}
        />
      )}

      {open && (
        <div className="bg-white text-black absolute left-0 top-24 w-full mt-10 h-96 flex flex-col gap-8 pl-6 items-start justify-center text-3xl font-serif2 z-10 origin-center">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              <div className="flex items-center justify-between">
                <span className="text-lg font-serif">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Menu;
