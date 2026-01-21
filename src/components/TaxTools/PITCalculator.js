"use client";

import { useState } from 'react';
import { calculatePIT } from '@/utils/calculators/pit';
import styles from './PITCalculator.module.css';

const PITCalculator = () => {
    const [income, setIncome] = useState('');
    const [type, setType] = useState('individual');
    const [contributingToSSF, setContributingToSSF] = useState(false);
    const [isFemaleWorker, setIsFemaleWorker] = useState(false);
    const [result, setResult] = useState(null);

    const handleCalculate = (e) => {
        e.preventDefault();
        const incomeValue = parseFloat(income);
        if (isNaN(incomeValue) || incomeValue < 0) {
            alert("Please enter a valid income amount.");
            return;
        }

        const res = calculatePIT(incomeValue, type, { contributingToSSF, isFemaleWorker });
        setResult(res);
    };

    return (
        <div className={styles.calculatorCard}>
            <h2 className={styles.title}>Personal Income Tax Calculator (FY 2081/82)</h2>
            <form onSubmit={handleCalculate} className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Annual Gross Income (NPR)</label>
                    <input 
                        type="number" 
                        value={income} 
                        onChange={(e) => setIncome(e.target.value)}
                        placeholder="e.g. 500000"
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Filing Status</label>
                    <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                            <input 
                                type="radio" 
                                name="type" 
                                value="individual" 
                                checked={type === 'individual'} 
                                onChange={() => setType('individual')}
                            /> Individual
                        </label>
                        <label className={styles.radioLabel}>
                            <input 
                                type="radio" 
                                name="type" 
                                value="couple" 
                                checked={type === 'couple'} 
                                onChange={() => setType('couple')}
                            /> Couple
                        </label>
                    </div>
                </div>
                
                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}>
                        <input 
                            type="checkbox" 
                            checked={contributingToSSF} 
                            onChange={(e) => setContributingToSSF(e.target.checked)}
                        /> Contributing to Social Security Fund? (Waives 1% Tax)
                    </label>
                    
                    {type === 'individual' && (
                         <label className={styles.checkboxLabel}>
                            <input 
                                type="checkbox" 
                                checked={isFemaleWorker} 
                                onChange={(e) => setIsFemaleWorker(e.target.checked)}
                            /> Female Citizen (10% Tax Rebate)
                        </label>
                    )}
                </div>

                <button type="submit" className="btn btn-primary">Calculate Tax</button>
            </form>

            {result && (
                <div className={styles.result}>
                    <h3 className={styles.resultTitle}>Tax Breakdown</h3>
                    <div className={styles.summary}>
                        <p>Total Tax Payable: <strong>NPR {result.totalTax.toLocaleString()}</strong></p>
                        <p>Net Income: <strong>NPR {result.netIncome.toLocaleString()}</strong></p>
                        {result.rebate > 0 && <p className={styles.rebate}>Wait!, Applied Rebate: NPR {result.rebate.toLocaleString()}</p>}
                    </div>

                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Slab</th>
                                <th>Taxable Amount</th>
                                <th>Rate</th>
                                <th>Tax</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.breakdown.map((row, idx) => (
                                <tr key={idx}>
                                    <td>{row.slab}</td>
                                    <td>{row.amount.toLocaleString()}</td>
                                    <td>{(row.rate * 100).toFixed(0)}%</td>
                                    <td>{row.tax.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default PITCalculator;
