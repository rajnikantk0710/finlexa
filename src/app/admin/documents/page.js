"use client";
import { useState } from 'react';

export default function AdminDocumentsPage() {
    // Mock user files for admin view
    const [userFiles, setUserFiles] = useState([
        { id: 1, user: "Ram Kumar", file: "PAN_Card.pdf", date: "2024-07-20", status: "Pending" },
        { id: 2, user: "Sita Sharma", file: "Tax_Relief_Form.docx", date: "2024-07-21", status: "Reviewing" },
        { id: 3, user: "ABC Corp", file: "VAT_Return_Q4.pdf", date: "2024-07-19", status: "Verified" }
    ]);

    const handleStatusUpdate = (id, newStatus) => {
        setUserFiles(userFiles.map(file => 
            file.id === id ? { ...file, status: newStatus } : file
        ));
    };

    return (
        <div className="container" style={{ padding: '8rem 1rem 4rem 1rem' }}>
            <h1 style={{ color: 'var(--primary-blue)', marginBottom: '2rem' }}>Admin Document Control</h1>

            <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>User Uploads Queue</h2>
                
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: 'var(--gray-100)', textAlign: 'left' }}>
                            <th style={{ padding: '1rem', borderBottom: '2px solid var(--gray-200)' }}>Client</th>
                            <th style={{ padding: '1rem', borderBottom: '2px solid var(--gray-200)' }}>File Name</th>
                            <th style={{ padding: '1rem', borderBottom: '2px solid var(--gray-200)' }}>Date</th>
                            <th style={{ padding: '1rem', borderBottom: '2px solid var(--gray-200)' }}>Status</th>
                            <th style={{ padding: '1rem', borderBottom: '2px solid var(--gray-200)' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userFiles.map((file) => (
                            <tr key={file.id} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '1rem' }}>{file.user}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        📄 {file.file}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem', color: 'var(--gray-600)' }}>{file.date}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{ 
                                        padding: '0.25rem 0.5rem', 
                                        borderRadius: '4px', 
                                        fontSize: '0.85rem',
                                        background: file.status === 'Verified' ? '#d1fae5' : 
                                                   file.status === 'Reviewing' ? '#fef3c7' : '#fee2e2',
                                        color: file.status === 'Verified' ? '#065f46' : 
                                               file.status === 'Reviewing' ? '#92400e' : '#991b1b'
                                    }}>
                                        {file.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button 
                                            onClick={() => handleStatusUpdate(file.id, 'Verified')}
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', background: '#059669', color: 'white' }}
                                        >
                                            Verify
                                        </button>
                                        <button 
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', background: 'var(--gray-800)', color: 'white' }}
                                        >
                                            Download
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
