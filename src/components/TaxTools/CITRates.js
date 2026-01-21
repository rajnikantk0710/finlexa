import styles from './CITRates.module.css';

const CITRates = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Corporate Income Tax Rates (FY 2081/82)</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h3>General Business</h3>
            <span className={styles.rate}>25%</span>
          </div>
          <p>Standard rate for Trading, Manufacturing, and Service businesses.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.header}>
            <h3>Banks & Financial Inst.</h3>
            <span className={styles.rate}>30%</span>
          </div>
          <p>Banks, Finance Companies, Insurance, and other financial institutions.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.header}>
            <h3>Special Industries</h3>
            <span className={styles.rate}>20%</span>
          </div>
          <p>IT, Hydropower, Agriculture-based manufacturing, and Tourism.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.header}>
            <h3>Infrastructure</h3>
            <span className={styles.rate}>15%</span>
          </div>
          <p>Roads, Bridges, Tunnels, and other national infrastructure projects.</p>
        </div>
      </div>
      <div className={styles.infoBox}>
        <p><strong>Note:</strong> Startups with turnover up to 10 Crore may be eligible for full tax exemption for 5 years.</p>
      </div>
    </div>
  );
};

export default CITRates;
