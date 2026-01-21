import Link from 'next/link';
import styles from './services.module.css';

export const metadata = {
  title: "Services | FinLexa",
  description: "Comprehensive tax, legal, and financial services in Nepal.",
};

const ServicesPage = () => {
    return (
        <div className="container">
            <header className={styles.header}>
                <h1 className={styles.title}>Our Holistic Services</h1>
                <p className={styles.subtitle}>
                     Bridging the gap between legal compliance and financial growth.
                </p>
            </header>

            <section className={styles.section}>
                <div className={styles.categoryHeader}>
                    <div className={styles.icon}>📊</div>
                    <h2>Tax & Compliance</h2>
                    <p>Navigating Nepal's tax landscape with precision.</p>
                </div>
                <div className={styles.grid}>
                     <div className={styles.card}>
                        <h3>Personal Income Tax</h3>
                        <p>Salary tax planning, slab optimization, and digital return filing for employees and professionals.</p>
                     </div>
                     <div className={styles.card}>
                        <h3>Corporate Tax</h3>
                        <p>Full-spectrum CIT compliance, including advance tax calculations and final audit representation.</p>
                     </div>
                     <div className={styles.card}>
                        <h3>VAT & PAN</h3>
                        <p>Registration, monthly VAT returns, and resolving mismatches with the IRD.</p>
                     </div>
                     <div className={styles.card}>
                        <h3>Tax Advisory</h3>
                        <p>Strategic planning to minimize liability legally under the Income Tax Act 2058.</p>
                     </div>
                </div>
            </section>

             <section className={styles.section}>
                <div className={styles.categoryHeader}>
                    <div className={styles.icon}>⚖️</div>
                    <h2>Legal Advisory</h2>
                    <p>Corporate law and regulatory support.</p>
                </div>
                <div className={styles.grid}>
                     <div className={styles.card}>
                        <h3>Company Registration</h3>
                        <p>End-to-end support for registering Private Ltd, Public Ltd, and NGOs at OCR.</p>
                     </div>
                     <div className={styles.card}>
                        <h3>Contract Drafting</h3>
                        <p>Drafting and vetting of employment contracts, NDAs, and vendor agreements.</p>
                     </div>
                     <div className={styles.card}>
                        <h3>Labor Law Compliance</h3>
                        <p>Guidance on the Labor Act 2074, Social Security Fund (SSF) enrollment, and policies.</p>
                     </div>
                     <div className={styles.card}>
                        <h3>Intellectual Property</h3>
                        <p>Trademark, Patent, and Design registration to protect your brand assets.</p>
                     </div>
                </div>
            </section>

             <section className={styles.section}>
                <div className={styles.categoryHeader}>
                    <div className={styles.icon}>📈</div>
                    <h2>Financial Strategy</h2>
                    <p style={{ color: 'var(--primary-maRoon)' }}>Fueling your business growth.</p>
                </div>
                <div className={styles.grid}>
                     <div className={`${styles.card} ${styles.finance}`}>
                        <h3>Internal Audit</h3>
                        <p>Risk-based internal audits to improve operational efficiency and controls.</p>
                     </div>
                     <div className={`${styles.card} ${styles.finance}`}>
                        <h3>Investment Advisory</h3>
                        <p>Analysis of capital market opportunities and portfolio management.</p>
                     </div>
                     <div className={`${styles.card} ${styles.finance}`}>
                        <h3>Business Valuation</h3>
                        <p>Valuation for mergers, acquisitions, or fundraising (startups).</p>
                     </div>
                      <div className={`${styles.card} ${styles.finance}`}>
                        <h3>Foreign Investment (FDI)</h3>
                        <p>Facilitating FII approval and repatriation of profits.</p>
                     </div>
                </div>
            </section>
            
            <div className={styles.cta}>
                <h2>Ready to streamline your business?</h2>
                <Link href="/consultation" className="btn btn-primary">
                    Book a Consultation
                </Link>
            </div>
        </div>
    );
};

export default ServicesPage;
