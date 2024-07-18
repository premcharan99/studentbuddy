// Help.js

import React, { useState, useEffect } from 'react';
import './Help.css'; // Import CSS for styling

const Help = () => {
  const [formData, setFormData] = useState({
    universityName: '',
    eventName: '',
    contactInfo1: '',
    contactInfo2: '',
    description: ''
  });

  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('premcharan8447@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000); // Reset copied state after 3 seconds
  };

  const handleCopyFormat = () => {
    const emailFormat = `University Name: ${formData.universityName}\nEvent Name: ${formData.eventName}\nContact Info 1: ${formData.contactInfo1}\nContact Info 2: ${formData.contactInfo2}\nDescription: ${formData.description}`;
    navigator.clipboard.writeText(emailFormat);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailFormat = `University Name: ${formData.universityName}\nEvent Name: ${formData.eventName}\nContact Info 1: ${formData.contactInfo1}\nContact Info 2: ${formData.contactInfo2}\nDescription: ${formData.description}`;
    console.log('Sending email with the following format:\n', emailFormat);
  };

  useEffect(() => {
    const container = document.querySelector('.raindrops');

    for (let i = 0; i < 100; i++) {
      const raindrop = document.createElement('div');
      raindrop.classList.add('raindrop');
      raindrop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation duration
      container.appendChild(raindrop);
    }
  }, []); // Run only once after initial render

  return (
    <>
      <div className="raindrops"></div>
      <div className="HelpPage">
        <div className="CautionBox">
          <h4>Caution:</h4>
          <p>This form is for informational purposes only. Please do not misuse it for any unauthorized activities.</p>
          <div className="FormatBox">
            <h4>Wanted Information:</h4>
            <p> * University Name: {formData.universityName}</p>
            <p>* Event Name: {formData.eventName}</p>
            <p>* Address : {formData.Address}</p>
            <p>* Contact Info 1: {formData.contactInfo1}</p>
            <p>* Contact Info 2: {formData.contactInfo2}</p>
            <p>* Description about the event: {formData.description}</p>
            <button onClick={handleCopyFormat}>Copy Format</button>
          </div>
          <div className="GmailButton">
            <p>If you want to send the mail directly to our mail just click this "Send mail"</p>
            <button onClick={() => window.open(`mailto:premcharan8447@gmail.com?subject=Event%20Information&body=${encodeURIComponent("University Name: " + formData.universityName + "\nEvent Name: " + formData.eventName +"\nAddress " + formData.Address + "\nContact Info 1: " + formData.contactInfo1 + "\nContact Info 2: " + formData.contactInfo2 + "\nDescription: " + formData.description)}`)}>Send Email</button>
            <p>IF ANY PROBLEM IN SENDING MAIL: premcharan8447@gmail.com</p>
            <p><button onClick={handleCopyEmail}>{copied ? 'Email Copied!' : 'Copy Email'}</button></p>
          </div>
        </div>
        <div className="PrivacyPolicy">
          <h3><center>Privacy & Policy</center></h3>
          <p>At STUDENT BUDDY, we prioritize the privacy and security of your personal information. Our Privacy Policy outlines how we collect, use, and protect your data to ensure transparency and trust in our services.</p>
          <p>Collection and Use of Information: We collect personal information such as name, email address, and contact details when you voluntarily submit them through our website or forms. This information is used solely for the purpose of providing event-related information and enhancing your experience with our services. We may also use your information to communicate with you about updates, promotions, or other relevant content, provided you have opted in to receive such communications. We do not share your information with third parties without your explicit consent.</p>
          <p>Data Security: We employ industry-standard security measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction. Your information is stored securely and accessed only by authorized personnel who are bound by confidentiality obligations. We regularly review and update our security protocols to ensure the highest level of protection for your data.</p>
          <p>Data Retention: We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected or as required by law. When data is no longer needed, we securely dispose of it in accordance with our data retention policies. You have the right to request the deletion of your data from our records at any time.</p>
          <p>Consent: By submitting your information through our forms, you consent to the collection, processing, and storage of your personal data for the specified purposes outlined in this Privacy Policy. You have the right to withdraw your consent at any time by contacting us. Withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal.</p>
          <p>Your Rights: You have the right to access, update, or delete your personal information held by us. If you would like to exercise these rights or have any questions about our Privacy Policy, please contact us at privacy@example.com. We will respond to your requests in a timely manner and ensure that your rights are upheld in accordance with applicable data protection laws.</p>
          <p>Changes to this Policy: We may update our Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and we encourage you to review this Policy periodically. By continuing to use our website and services after any changes to this Policy, you acknowledge and agree to the updated terms.</p>
        </div>
      </div>
    </>
  );
};

export default Help;
