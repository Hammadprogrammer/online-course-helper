"use client";
import React, { useState } from 'react';
import styles from './lead_form.module.scss';

interface LeadFormProps {
  variant?: 'inline' | 'stacked';
  buttonText?: string;
  showMessage?: boolean;
  tone?: 'yellow' | 'green';
}

const emptyForm = { name: '', email: '', phone: '', message: '' };

const LeadForm: React.FC<LeadFormProps> = ({ variant = 'stacked', buttonText = 'Get Instant Quote', showMessage = false, tone = 'yellow' }) => {
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://contact-a-pi-one.vercel.app/api/allexamhelp-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowSuccess(true);
        setFormData(emptyForm);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to submit request. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={`${styles.form} ${styles[variant]} ${styles[tone]}`} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} required />
      {showMessage && (
        <textarea name="message" placeholder="Exam Details" rows={3} value={formData.message} onChange={handleChange} />
      )}
      <button type="submit" disabled={loading}>{loading ? 'Submitting...' : buttonText}</button>
      {showSuccess && <p className={styles.success}>Form submitted successfully!</p>}
    </form>
  );
};

export default LeadForm;
