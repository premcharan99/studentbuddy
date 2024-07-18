import React from 'react';
import './Aboutus.css'; // Import the CSS file



const Aboutus = () => {
    return (
        <div className="aboutus-container">
            <div>
                <h2 className="aboutus-heading">Welcome to Student Buddy</h2>
            </div>
            <div className="aboutus-content">
                <p>
                    Hello! I'm Gudipudi Prem Chran, a second-year B.Tech student with a strong passion for data science and web design. I'm excited about leveraging these skills to create innovative solutions to real-world problems.
                </p>
                <p>
                    Alongside my studies, I've been deeply involved in exploring the realms of data science and web development. My interest in data science drives me to uncover insights and patterns within complex datasets, while my expertise in web design enables me to build intuitive and user-friendly interfaces for these solutions.
                </p>
                <p>
                    Student Buddy represents one such endeavor where I've combined my interests in data science and web design. This platform offers a seamless experience for students, university professionals, and HR managers alike, facilitating easy access to information about events across various universities.
                </p>
                <p>
                    I believe in the power of technology to drive positive change, and I'm committed to contributing my skills to create meaningful solutions that benefit society as a whole.
                </p>
            </div>
            <div className="aboutus-contact">
                <h4>Contact Us</h4>
                <p>
                    If you have any questions or inquiries, feel free to reach out to us using the contact information below:
                </p>
                <p>Email: premcharan8447@gmail.com</p>
                <p>Phone: +91 8977797679</p>
                <p>Address: Eluru, AP</p>
            </div>
            {/* Scrolling marquee */}
            <div className="marquee-container">
                <div className="marquee">
                    THANK YOU FOR VISITING STUDENT BUDDY
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
