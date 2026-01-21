"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="FinLexa" style={{ height: '40px', marginRight: '10px' }} />
          FinLexa
        </Link>
        
        {/* Desktop Links */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/tax-tools" className={styles.link}>Tax Tools</Link>
          <Link href="/consultation" className={`${styles.link} ${styles.cta}`}>Book Consultation</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
            <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
            <span className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <Link href="/" className={styles.mobileLink} onClick={toggleMenu}>Home</Link>
          <Link href="/services" className={styles.mobileLink} onClick={toggleMenu}>Services</Link>
          <Link href="/tax-tools" className={styles.mobileLink} onClick={toggleMenu}>Tax Tools</Link>
          <Link href="/consultation" className={`${styles.mobileLink} ${styles.mobileCta}`} onClick={toggleMenu}>Book Consultation</Link>
      </div>
    </nav>
  );
};

export default Navbar;
