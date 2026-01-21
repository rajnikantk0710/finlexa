import BookingWizard from '@/components/Booking/BookingWizard';

export default function ConsultationPage() {
    return (
        <div className="container" style={{ padding: '8rem 1rem 4rem 1rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                    Schedule a Consultation
                </h1>
                <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
                    Book an appointment with our Chartered Accountants. 
                    Choose a time that works for you, online or in-person.
                </p>
            </div>
            
            <BookingWizard />
        </div>
    );
}
