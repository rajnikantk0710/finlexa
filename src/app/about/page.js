import styles from './about.module.css';

export const metadata = {
  title: 'About Us - FinLexa',
  description: 'Learn about FinLexa mission to simplify tax, legal, and financial compliance in Nepal.',
};

export default function AboutPage() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <h1 className={styles.title}>Empowering Nepal's Economy</h1>
        <p className={styles.subtitle}>
          FinLexa is Nepal’s first comprehensive digital platform unifying Tax Compliance, Legal Advisory, and Financial Strategy.
        </p>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.card}>
          <h2>Our Mission</h2>
          <p>
            To democratize access to expert legal and financial advice, making it affordable, transparent, and accessible for every business and individual in Nepal.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Our Vision</h2>
          <p>
            A digitally empowered Nepal where compliance is not a burden but a stepping stone to growth and prosperity.
          </p>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet Our Experts</h2>
        <div className={styles.grid}>
          <div className={styles.teamCard}>
            <div className={styles.avatar}></div>
            <h3>Rajnikant Kushwaha</h3>
            <span className={styles.role}>Founder & Lead CA</span>
          </div>
          <div className={styles.teamCard}>
             <div className={styles.avatar}></div>
            <h3>Aarav Sharma</h3>
            <span className={styles.role}>Senior Legal Counsel</span>
          </div>
          <div className={styles.teamCard}>
             <div className={styles.avatar}></div>
            <h3>Priya Adhikari</h3>
            <span className={styles.role}>Financial Strategist</span>
          </div>
        </div>
      </section>
    </div>
  );
}
