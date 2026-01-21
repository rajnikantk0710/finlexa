"use client";
import { useState } from 'react';
import PITCalculator from '@/components/TaxTools/PITCalculator';
import CITRates from '@/components/TaxTools/CITRates';

export default function TaxToolsPage() {
    const [activeTab, setActiveTab] = useState('pit');

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', color: 'var(--primary-blue)' }}>
                Nepal Tax Calculators
            </h1>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: '1rem' }}>
                <button 
                    onClick={() => setActiveTab('pit')}
                    className={`btn ${activeTab === 'pit' ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ opacity: activeTab === 'pit' ? 1 : 0.7 }}
                >
                    Personal Income Tax
                </button>
                <button 
                    onClick={() => setActiveTab('cit')}
                    className={`btn ${activeTab === 'cit' ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ opacity: activeTab === 'cit' ? 1 : 0.7 }}
                >
                    Corporate Info
                </button>
            </div>

            {activeTab === 'pit' ? <PITCalculator /> : <CITRates />}
        </div>
    );
}
