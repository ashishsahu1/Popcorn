import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="logo Image"
          width="200"
          height="70"
          unoptimized={true}
        />
      </div>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
