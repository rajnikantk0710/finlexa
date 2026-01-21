import styles from './faq.module.css';

export const metadata = {
  title: 'FAQ - FinLexa',
  description: 'Frequently Asked Questions about Tax, Legal, and Compliance services in Nepal.',
};

const faqs = [
  {
    question: "How do I register a private company in Nepal?",
    answer: "Registration involves reserving a company name at the OCR, preparing the Memorandum and Articles of Association, and submitting verified documents. FinLexa handles this entire process for you digitally."
  },
  {
    question: "What is the new flat-rate consultation fee?",
    answer: "We offer simplified pricing: NPR 199 for Individuals, NPR 499 for Small Businesses, and NPR 999 for Large Enterprises. No hidden commissions."
  },
  {
    question: "Do you handle non-resident taxation?",
    answer: "Yes, we specialize in cross-border taxation and compliance for expatriates and foreign investors in Nepal."
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-grade encryption for all document uploads and data storage. Your privacy is our top priority."
  },
  {
    question: "Can I book a consultation for a customized legal concern?",
    answer: "Yes, you can choose the 'Large Enterprise' or 'Legal Advisory' slot for complex, tailored discussions with our senior legal experts."
  }
];

export default function FAQPage() {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>Common questions about our services and Nepal's tax laws.</p>
      </div>

      <div className={styles.faqGrid}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.question}>{faq.question}</h3>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
