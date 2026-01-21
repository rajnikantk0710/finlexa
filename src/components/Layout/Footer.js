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
                    <h4>Quick Links</h4>
                    <ul>
                         <li><a href="/consultation">Consultation</a></li>
                         <li><a href="/tax-tools">Tax Calculator</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Contact</h4>
                    <p>Birgunj, Nepal</p>
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
