"use client";

import { useState, useEffect } from 'react';
import { calculateConsultationFee } from '@/utils/pricing';
import { generateTimeSlots, addBooking, updateTeamSize } from '@/utils/scheduler';
import styles from './BookingWizard.module.css';

const BookingWizard = () => {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        type: 'individual',
        taxSaved: 0,
        date: '',
        time: '',
        name: '',
        email: '',
        meetingType: 'online' // online or face-to-face
    });
    
    const [fee, setFee] = useState({ fee: 200, isEstimate: false });
    const [slots, setSlots] = useState([]);
    
    // Debug/Demo Config
    const [debugTeamSize, setDebugTeamSize] = useState(1);
    
    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    // Update Fee when type changes (no longer depends on taxSaved)
    useEffect(() => {
        const calculated = calculateConsultationFee(bookingData.type);
        setFee(calculated);
    }, [bookingData.type]);

    // Fetch Slots when date changes. 
    // In a real app, this would be an API call.
    useEffect(() => {
        if (bookingData.date) {
            updateTeamSize(debugTeamSize); // Ensure config is synced for demo
            const generated = generateTimeSlots(bookingData.date);
            setSlots(generated);
        }
    }, [bookingData.date, debugTeamSize, step]); // Refresh on step change too (simulate re-check)

    const handleBooking = () => {
        try {
            const success = addBooking({
                date: bookingData.date,
                time: bookingData.time,
                type: bookingData.meetingType,
                contact: bookingData.email
            });
            if (success) {
                setStep(4); // Success Step
            }
        } catch (error) {
            alert(error.message);
            // Refresh slots
            const generated = generateTimeSlots(bookingData.date);
            setSlots(generated);
        }
    };

    // --- Render Steps ---

    const renderStep1_Service = () => (
        <div className={styles.stepContainer}>
            <h3>Step 1: Choose Service Type</h3>
            <div className={styles.grid}>
                <div 
                    className={`${styles.card} ${bookingData.type === 'individual' ? styles.selected : ''}`}
                    onClick={() => setBookingData({...bookingData, type: 'individual'})}
                >
                    <h4>Individual</h4>
                    <p>30 Min Consultation</p>
                    <span className={styles.priceTag}>NPR 199</span>
                </div>
                <div 
                    className={`${styles.card} ${bookingData.type === 'small_business' ? styles.selected : ''}`}
                    onClick={() => setBookingData({...bookingData, type: 'small_business'})}
                >
                    <h4>Small Business</h4>
                    <p>1 Hour Consultation</p>
                    <span className={styles.priceTag}>NPR 499</span>
                </div>
                <div 
                    className={`${styles.card} ${bookingData.type === 'large_business' ? styles.selected : ''}`}
                    onClick={() => setBookingData({...bookingData, type: 'large_business'})}
                >
                    <h4>Large Enterprise</h4>
                    <p>1 Hour Consultation</p>
                    <span className={styles.priceTag}>NPR 999</span>
                </div>
            </div>

            <div className={styles.actions}>
                <button className="btn btn-primary" onClick={handleNext}>Next: Select Date</button>
            </div>
        </div>
    );

    const renderStep2_Date = () => (
        <div className={styles.stepContainer}>
             <h3>Step 2: Select Date & Time</h3>
             <input 
                type="date" 
                className={styles.dateInput}
                value={bookingData.date}
                onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
             />
             
             {bookingData.date && (
                 <div className={styles.slotsGrid}>
                     {slots.map((slot) => (
                         <button 
                            key={slot.time}
                            disabled={!slot.available}
                            className={`${styles.slotBtn} ${bookingData.time === slot.time ? styles.slotSelected : ''}`}
                            onClick={() => setBookingData({...bookingData, time: slot.time})}
                         >
                            {slot.time}
                            {!slot.available && <span className={styles.fullLabel}>(Full)</span>}
                         </button>
                     ))}
                 </div>
             )}
             
             <div className={styles.debugPanel}>
                 <small>Debug: Team Size </small>
                 <select value={debugTeamSize} onChange={(e) => setDebugTeamSize(parseInt(e.target.value))}>
                     <option value="1">1 (Single Slot)</option>
                     <option value="2">2 (Parallel Slots)</option>
                     <option value="3">3 (Parallel Slots)</option>
                 </select>
             </div>

             <div className={styles.actions}>
                <button className="btn btn-secondary" onClick={handleBack}>Back</button>
                <button className="btn btn-primary" disabled={!bookingData.time} onClick={handleNext}>Next: Your Details</button>
            </div>
        </div>
    );

    const renderStep3_Details = () => (
         <div className={styles.stepContainer}>
            <h3>Step 3: Your Details</h3>
            <div className={styles.formGroup}>
                <label>Full Name</label>
                <input 
                    type="text" 
                    value={bookingData.name} 
                    onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                />
            </div>
            <div className={styles.formGroup}>
                <label>Email Address</label>
                <input 
                    type="email" 
                    value={bookingData.email} 
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                />
            </div>
            <div className={styles.formGroup}>
                <label>Meeting Type</label>
                <select 
                    value={bookingData.meetingType}
                    onChange={(e) => setBookingData({...bookingData, meetingType: e.target.value})}
                >
                    <option value="online">Online (Video Call)</option>
                    <option value="face-to-face">Face-to-Face (Office Visit)</option>
                </select>
            </div>
            
            <div className={styles.summaryCard}>
                <h4>Booking Summary</h4>
                <p><strong>Service:</strong> {bookingData.type}</p>
                <p><strong>Date:</strong> {bookingData.date} at {bookingData.time}</p>
                <p><strong>Fee:</strong> NPR {fee.total ? fee.total.toFixed(2) : fee.fee}</p>
            </div>
            
            <div className={styles.actions}>
                <button className="btn btn-secondary" onClick={handleBack}>Back</button>
                <button className="btn btn-primary" onClick={handleBooking}>Confirm Booking</button>
            </div>
         </div>
    );

    const renderStep4_Success = () => (
        <div className={styles.successContainer}>
            <div className={styles.successIcon}>✅</div>
            <h3>Booking Confirmed!</h3>
            <p>Your consultation has been scheduled for <strong>{bookingData.date}</strong> at <strong>{bookingData.time}</strong>.</p>
            <p>A confirmation email has been sent to {bookingData.email}.</p>
            <button className="btn btn-primary" onClick={() => { setStep(1); setBookingData({...bookingData, date: '', time: ''}); }}>Book Another</button>
        </div>
    );

    return (
        <div className={styles.wizardWrapper}>
            {step === 1 && renderStep1_Service()}
            {step === 2 && renderStep2_Date()}
            {step === 3 && renderStep3_Details()}
            {step === 4 && renderStep4_Success()}
        </div>
    );
};

export default BookingWizard;
