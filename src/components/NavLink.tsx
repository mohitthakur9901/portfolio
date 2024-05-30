"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link } : {link : any}) => {
  const pathName = usePathname();
  console.log(typeof link);
  

  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;