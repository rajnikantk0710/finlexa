"use client";

import { useState, useEffect } from 'react';
import { getSystemConfig, updateTeamSize, getBookings } from '@/utils/scheduler';

export default function AdminPage() {
    const [config, setConfig] = useState({ teamSize: 1 });
    const [bookings, setBookings] = useState([]);
    const [viewDate, setViewDate] = useState(new Date().toISOString().split('T')[0]);

    useEffect(() => {
        // Load initial config
        setConfig(getSystemConfig());
        // Load bookings for date
        setBookings(getBookings(viewDate));
    }, [viewDate]);

    const handleTeamSizeChange = (e) => {
        const size = parseInt(e.target.value);
        updateTeamSize(size);
        setConfig({ ...config, teamSize: size });
        alert(`Team Size updated to ${size}. Parallel slots will now allow ${size} concurrent bookings.`);
    };

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 style={{ color: 'var(--primary-blue)', marginBottom: '2rem' }}>Admin Dashboard</h1>
            
            <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Configuration</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <label style={{ fontWeight: 500 }}>Global Team Size (Parallel Slots):</label>
                    <select 
                        value={config.teamSize} 
                        onChange={handleTeamSizeChange}
                        style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '6px' }}
                    >
                        <option value="1">1 Member (1 Slot)</option>
                        <option value="2">2 Members (2 Parallel Slots)</option>
                        <option value="3">3 Members (3 Parallel Slots)</option>
                        <option value="5">5 Members (5 Parallel Slots)</option>
                    </select>
                </div>
                <p style={{ marginTop: '1rem', color: 'var(--gray-600)', fontSize: '0.9rem' }}>
                    Changing this value immediately affects slot availability availability for new checks.
                </p>
            </div>

            <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <h2 style={{ marginBottom: '1rem' }}>Bookings Viewer</h2>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ marginRight: '1rem' }}>View Date:</label>
                    <input 
                        type="date" 
                        value={viewDate} 
                        onChange={(e) => setViewDate(e.target.value)}
                        style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
                    />
                </div>
                
                {bookings.length === 0 ? (
                    <p style={{ color: 'var(--gray-600)', fontStyle: 'italic' }}>No bookings for this date.</p>
                ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                        <thead>
                            <tr style={{ background: 'var(--gray-100)', textAlign: 'left' }}>
                                <th style={{ padding: '0.75rem' }}>Time</th>
                                <th style={{ padding: '0.75rem' }}>Client</th>
                                <th style={{ padding: '0.75rem' }}>Type</th>
                                <th style={{ padding: '0.75rem' }}>Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((b) => (
                                <tr key={b.id} style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '0.75rem' }}>{b.time}</td>
                                    <td style={{ padding: '0.75rem' }}>{b.contact}</td>
                                    <td style={{ padding: '0.75rem' }}>{b.type}</td>
                                    <td style={{ padding: '0.75rem' }}>Consultation</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
