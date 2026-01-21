import styles from './brackets.module.css';

export const metadata = {
  title: 'Tax Brackets 2081/82 - FinLexa',
  description: 'Current Tax Rates and Brackets for Individuals and Couples in Nepal.',
};

export default function TaxBracketsPage() {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className={styles.title}>Tax Brackets FY 2081/82</h1>
        <p className={styles.subtitle}>Current Personal Income Tax rates for Resident Individuals and Couples.</p>
      </div>

      <div className={styles.tablesContainer}>
        {/* Individual Table */}
        <div className={styles.tableCard}>
            <h2 className={styles.tableTitle}>Individual (Unmarried)</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Taxable Income Slab</th>
                        <th>Tax Rate</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First 5,00,000</td>
                        <td>1%</td>
                        <td>Social Security Tax</td>
                    </tr>
                    <tr>
                        <td>Next 2,00,000</td>
                         <td>10%</td>
                         <td>-</td>
                    </tr>
                    <tr>
                        <td>Next 3,00,000</td>
                        <td>20%</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Next 10,00,000</td>
                        <td>30%</td>
                        <td>-</td>
                    </tr>
                     <tr>
                        <td>Next 30,00,000</td>
                        <td>36%</td>
                        <td>Includes 20% Surcharge</td>
                    </tr>
                     <tr>
                        <td>Above 50,00,000</td>
                        <td>39%</td>
                         <td>Includes 30% Surcharge</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Couple Table */}
        <div className={styles.tableCard}>
            <h2 className={styles.tableTitle}>Couple (Married)</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Taxable Income Slab</th>
                        <th>Tax Rate</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First 6,00,000</td>
                        <td>1%</td>
                        <td>Social Security Tax</td>
                    </tr>
                    <tr>
                        <td>Next 2,00,000</td>
                         <td>10%</td>
                         <td>-</td>
                    </tr>
                    <tr>
                        <td>Next 3,00,000</td>
                        <td>20%</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Next 9,00,000</td>
                        <td>30%</td>
                        <td>-</td>
                    </tr>
                     <tr>
                        <td>Next 30,00,000</td>
                        <td>36%</td>
                        <td>Includes 20% Surcharge</td>
                    </tr>
                     <tr>
                        <td>Above 50,00,000</td>
                        <td>39%</td>
                         <td>Includes 30% Surcharge</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
