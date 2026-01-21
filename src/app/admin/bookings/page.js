"use client";
import { useState, useEffect } from 'react';
import { getSystemConfig } from '@/utils/scheduler';

// We need a way to get ALL bookings. 
// Since getBookings(date) only returns for a date, let's create a local helper or cheat slightly 
// by importing the raw logic if possible, or just mocking the "getAll" behavior since it's the same file.
// Ideally, scheduler.js should export getAllBookings(). 
// For now, let's assume we can fetch them or just duplicate the mock data for display 
// if we can't easily modify the export without breaking HMR.
// ACTUALLY: I should have added getAllBookings to scheduler.js. 
// Let's modify scheduler.js first to export getAllBookings.

// Wait, I can't modify scheduler.js in the same step easily if I want to use it here immediately.
// I will blindly assume I added getAllBookings() to scheduler.js in the next step or 
// I will simulate it. No, let's do it right.
// I will modify scheduler.js to export getAllBookings FIRST.
// But I already called replace_file_content on scheduler.js above. 
// I should have added the export there. 
// I will create this file assuming the export exists, and then add the export in the next tool call.

import { getAllBookings } from '@/utils/scheduler';

export default function AllBookingsPage() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Since we are adding getAllBookings to scheduler.js
        if (typeof getAllBookings === 'function') {
            setBookings(getAllBookings());
        }
    }, []);

    // Group by Date
    const groupedBookings = bookings.reduce((groups, booking) => {
        const date = booking.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(booking);
        return groups;
    }, {});

    // Sort dates
    const sortedDates = Object.keys(groupedBookings).sort();

    return (
        <div className="container" style={{ padding: '8rem 1rem 4rem 1rem' }}>
            <h1 style={{ color: 'var(--primary-blue)', marginBottom: '2rem' }}>All Scheduled Consultations</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {sortedDates.length === 0 ? (
                    <p>No bookings found.</p>
                ) : (
                    sortedDates.map(date => (
                        <div key={date} style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', color: 'var(--primary-brand)' }}>
                                {new Date(date).toDateString()}
                            </h2>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: 'var(--gray-100)', textAlign: 'left' }}>
                                        <th style={{ padding: '1rem' }}>Time</th>
                                        <th style={{ padding: '1rem' }}>Client</th>
                                        <th style={{ padding: '1rem' }}>Type</th>
                                        <th style={{ padding: '1rem' }}>Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groupedBookings[date]
                                        .sort((a, b) => a.time.localeCompare(b.time))
                                        .map(b => (
                                        <tr key={b.id} style={{ borderBottom: '1px solid #eee' }}>
                                            <td style={{ padding: '1rem', fontWeight: 'bold' }}>{b.time}</td>
                                            <td style={{ padding: '1rem' }}>{b.contact}</td>
                                            <td style={{ padding: '1rem', textTransform: 'capitalize' }}>{b.type.replace('_', ' ')}</td>
                                            <td style={{ padding: '1rem', color: '#059669', fontWeight: 'bold' }}>
                                                {b.type === 'individual' ? 'NPR 199' : 
                                                 b.type === 'small_business' ? 'NPR 499' : 
                                                 b.type === 'large_business' ? 'NPR 999' : '-'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
