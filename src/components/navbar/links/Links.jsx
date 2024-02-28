"use client";
import { useState } from "react";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import Image from "next/image";
import  {auth} from "@/lib/auth";
import { handleLogout } from "@/lib/action";
const links=[
    {
        title:"HomePage",
        path:"/",
    },
    {
        title:"About",
        path:"/about",
    },
    {
        title:"Contact",
        path:"/contact",
    },
    {
        title:"Blog",
        path:"/blog",
    },
];
const Links = 
({session}) => {
    const [open, setOpen] = useState(false);
  
    // TEMPORARY
    // const session = true;
    // const isAdmin = true;
    // const session = await auth();
  
    return (
      <div className={styles.container}>
        <div className={styles.links}>
          {links.map((link) => (
            <NavLink items={link} key={link.title} />
          ))}
          {session?.user ? (
            <>
              {session.user?.isAdmin && <NavLink items={{ title: "Admin", path: "/admin" }} />}
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>
          ) : (
            <NavLink items={{ title: "Login", path: "/login" }} />
          )}
        </div>
        <Image
          className={styles.menuButton}
          src="/menu.png"
          alt=""
          width={30}
          height={30}
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <NavLink items={link} key={link.title} />
            ))}
          </div>
        )}
      </div>
    );
  };
export default Links;