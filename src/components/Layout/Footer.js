import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <h3>FinLexa</h3>
                    <p>The Future of Financial, Legal, and Tax Compliance.</p>
                </div>
                <div className={styles.column}>
                    <h4>Company</h4>
                    <ul>
                         <li><a href="/about">About Us</a></li>
                         <li><a href="/faq">FAQs</a></li>
                         <li><a href="/news">News & Insights</a></li>
                         <li><a href="/docs/privacy">Privacy Policy</a></li>{/* Placeholder */}
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Tools & Services</h4>
                    <ul>
                         <li><a href="/services">Services</a></li>
                         <li><a href="/consultation">Book Consultation</a></li>
                         <li><a href="/tax-tools">Tax Calculator</a></li>
                         <li><a href="/tax-brackets">Tax Brackets (2081/82)</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Contact</h4>
                    <p>Kathmandu, Nepal</p>
                    <p>support@finlexa.com</p>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <p>&copy; {currentYear} FinLexa Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
