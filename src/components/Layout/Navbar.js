import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="FinLexa" style={{ height: '40px', marginRight: '10px' }} />
          FinLexa
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/tax-tools" className={styles.link}>Tax Tools</Link>
          <Link href="/consultation" className={`${styles.link} ${styles.cta}`}>Book Consultation</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
