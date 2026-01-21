import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Tax, Legal & Compliance Solutions for Individuals and Businesses in Nepal
          </h1>
          <p className={styles.subtitle}>
            FinLexa helps individuals and businesses in Nepal manage tax compliance, company registration, legal advisory, and financial services—securely and efficiently.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/consultation" className="btn btn-primary">
              Book Expert Consultation
            </Link>
            <Link href="/tax-tools" className="btn btn-secondary">
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services} id="services">
        <h2 className={styles.sectionTitle}>Holistic Business Solutions</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Tax & Compliance</h3>
            <p>Master complexities of Nepal's tax system using our precision tools and expert CA guidance.</p>
            <ul className={styles.featureList}>
                <li>Personal & Corporate Tax</li>
                <li>VAT & PAN Registration</li>
                <li>Digital Filing</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Legal Advisory</h3>
            <p>From company registration to contract law, ensure your business stands on solid ground.</p>
             <ul className={styles.featureList}>
                <li>Company Registration</li>
                <li>Legal Drafting</li>
                <li>Labor Law Compliance</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Financial Strategy</h3>
            <p>Strategic planning, audit services, and investment advisory to drive sustainable growth.</p>
             <ul className={styles.featureList}>
                <li>Internal & External Audit</li>
                <li>Investment Planning</li>
                <li>Financial Risk Assessment</li>
            </ul>
          </div>
        </div>
      </section>
      
       {/* Trust Signals */}
       <section className={styles.features}>
         <div className={styles.featureContent}>
            <h2>Why FinLexa?</h2>
            <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                    <h4>🚀 Future-Ready</h4>
                    <p>Digital-first approach to traditional compliance.</p>
                </div>
                <div className={styles.featureItem}>
                    <h4>🛡️ Verified Experts</h4>
                    <p>Access a vetted network of CAs, Lawyers, and Financial Analysts.</p>
                </div>
                <div className={styles.featureItem}>
                    <h4>🔒 Bank-Grade Security</h4>
                    <p>Your data is encrypted and protected with industry-leading standards.</p>
                </div>
            </div>
         </div>
       </section>
    </div>
  );
}
