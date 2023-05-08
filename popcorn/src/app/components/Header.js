"use client";
import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [showNav, setShowNav] = React.useState(false);

  const toggleNavItems = () => {
    console.log(showNav);
    setShowNav(!showNav);
  };

  const getstyle = () => {
    if (showNav) {
      return styles.active + " " + styles.nav;
    } else {
      return styles.nav;
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* <Image
            src="/logo.png"
            alt="logo Image"
            width="100"
            height="35"
            unoptimized={true}
          /> */}
          <h1>popcorn</h1>
        </div>
        <div className={styles.menuicon} onClick={toggleNavItems}>
          EE
        </div>
        <div className={getstyle()}>
          <ul>
            <li>
              <Link href="/" className={styles.lnk}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/movies" className={styles.lnk}>
                Movies
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.lnk}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
