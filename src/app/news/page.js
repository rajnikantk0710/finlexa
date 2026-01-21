import styles from './news.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Tax & Legal News - FinLexa',
  description: 'Latest updates on Nepal Tax Laws, Budget Announcements, and Legal Reforms.',
};

const newsItems = [
    {
        id: 1,
        date: "July 12, 2024",
        category: "Tax Alert",
        title: "Nepal Budget 2081/82: Key Changes in Income Tax",
        summary: "The government has introduced new tax slabs for high earners and revised digital service tax rates. Read our comprehensive breakdown."
    },
    {
        id: 2,
        date: "June 28, 2024",
        category: "Company Law",
        title: "Digital Signature Now Mandatory for Company Registration",
        summary: "The Office of Company Registrar (OCR) has mandated digital signatures for all new online registrations starting Shrawan 1."
    },
    {
        id: 3,
        date: "May 15, 2024",
        category: "Compliance",
        title: "VAT Threshold Increased for Service Sector",
        summary: "Small businesses in the service sector see relief as the VAT registration threshold is revised to NPR 30 Lakhs."
    }
];

export default function NewsPage() {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className={styles.title}>News & Insights</h1>
        <p className={styles.subtitle}>Stay updated with the latest in Tax, Law, and Finance.</p>
      </div>

      <div className={styles.newsGrid}>
        {newsItems.map((item) => (
            <article key={item.id} className={styles.card}>
                <div className={styles.meta}>
                    <span className={styles.date}>{item.date}</span>
                    <span className={styles.category}>{item.category}</span>
                </div>
                <h2 className={styles.headline}>{item.title}</h2>
                <p className={styles.summary}>{item.summary}</p>
                <Link href="#" className={styles.readMore}>Read Full Article →</Link>
            </article>
        ))}
      </div>
    </div>
  );
}
