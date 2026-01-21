"use client";

import { useState } from 'react';
import styles from './Documents.module.css';

export default function DocumentsPage() {
    const [dragging, setDragging] = useState(false);
    const [files, setFiles] = useState([]);

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => setDragging(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(prev => [...prev, ...droppedFiles]);
    };

    const handleFileInput = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...selectedFiles]);
    };

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 className={styles.title}>Secure Document Portal</h1>
            <p className={styles.subtitle}>
                Upload your tax documents securely. All files are encrypted end-to-end.
                Only you and your assigned CA can view them.
            </p>

            <div 
                className={`${styles.dropzone} ${dragging ? styles.dragging : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className={styles.icon}>🔒</div>
                <h3>Drag & Drop Tax Documents Here</h3>
                <p>or</p>
                <label className="btn btn-secondary">
                    Browse Files
                    <input type="file" multiple onChange={handleFileInput} style={{ display: 'none' }} />
                </label>
                <p className={styles.secureNote}>Supported: PDF, JPG, PNG, Excel (Max 25MB)</p>
            </div>

            {files.length > 0 && (
                <div className={styles.fileList}>
                    <h3>Uploaded Files ({files.length})</h3>
                    <ul>
                        {files.map((file, idx) => (
                            <li key={idx} className={styles.fileItem}>
                                <span className={styles.fileName}>{file.name}</span>
                                <span className={styles.fileSize}>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                <span className={styles.status}>Encrypted ✅</span>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => alert("Files sent to your dedicated CA.")}>
                        Share with My CA
                    </button>
                </div>
            )}
        </div>
    );
}
