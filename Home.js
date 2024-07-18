// Home.js

import React, { useState, useEffect } from 'react';
import RectangleBox from './RectangleBox/RectangleBox';
import DetailedView from './DetailedView/DetailedView';
import './Home.css'; // Import home styles

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [typingAnimation, setTypingAnimation] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [isBoxClickable, setIsBoxClickable] = useState(true);

  useEffect(() => {
    // Start typing animation after component mounts
    setTypingAnimation(true);
    // Stop typing animation after 6 seconds
    const timeout = setTimeout(() => {
      setTypingAnimation(false);
    }, 6000);
    return () => clearTimeout(timeout);
  }, []);

  const universities = [
    { 
      name: 'University 1',
      imageUrl: 'path_to_image',
      date: '2024-04-01',
      address: '123 University St, City',
      contact: '123-456-7890',
      email: 'info@example.com',
      website: 'https://www.example.com',
      description: 'University 1 is a prestigious institution known for its excellent academic programs and vibrant campus life.'
    },
    { 
      name: 'University 2',
      imageUrl: 'path_to_image',
      date: '2024-04-05',
      address: '456 College Ave, Town',
      contact: '987-654-3210',
      email: 'info2@example.com',
      website: 'https://www.example2.com',
      description: 'University 2 offers a diverse range of courses and is committed to providing students with hands-on learning experiences.'
    },
    // Add more universities with additional information and description as needed
    { 
      name: 'University 3',
      imageUrl: 'path_to_image',
      date: '2024-04-10',
      address: '789 Campus Rd, Village',
      contact: '456-789-1230',
      email: 'info3@example.com',
      website: 'https://www.example3.com',
      description: 'University 3 is known for its cutting-edge research facilities and supportive learning environment.'
    },
    { 
      name: 'University 4',
      imageUrl: 'path_to_image',
      date: '2024-04-15',
      address: '890 Education Blvd, County',
      contact: '789-123-4560',
      email: 'info4@example.com',
      website: 'https://www.example4.com',
      description: 'University 4 offers a wide range of extracurricular activities and community engagement opportunities.'
    },
    { 
      name: 'University 5',
      imageUrl: 'path_to_image',
      date: '2024-04-20',
      address: '567 Main St, Town',
      contact: '012-345-6789',
      email: 'info5@example.com',
      website: 'https://www.example5.com',
      description: 'University 5 focuses on fostering creativity and innovation among its students through various programs.'
    },
    { 
      name: 'University 6',
      imageUrl: 'path_to_image',
      date: '2024-04-25',
      address: '345 Campus Dr, City',
      contact: '234-567-8901',
      email: 'info6@example.com',
      website: 'https://www.example6.com',
      description: 'University 6 is committed to promoting diversity and inclusion within its campus community.'
    },
    { 
      name: 'University 7',
      imageUrl: 'path_to_image',
      date: '2024-04-30',
      address: '678 College Rd, Village',
      contact: '345-678-9012',
      email: 'info7@example.com',
      website: 'https://www.example7.com',
      description: 'University 7 offers state-of-the-art facilities and resources to support student success.'
    },
    { 
      name: 'University 8',
      imageUrl: 'path_to_image',
      date: '2024-05-01',
      address: '901 University Ave, County',
      contact: '456-789-0123',
      email: 'info8@example.com',
      website: 'https://www.example8.com',
      description: 'University 8 provides students with opportunities for internships and real-world experiences.'
    },
    { 
      name: 'University 9',
      imageUrl: 'path_to_image',
      date: '2024-05-05',
      address: '123 Education St, City',
      contact: '567-890-1234',
      email: 'info9@example.com',
      website: 'https://www.example9.com',
      description: 'University 9 emphasizes global citizenship and cross-cultural understanding.'
    },
    { 
      name: 'University 10',
      imageUrl: 'path_to_image',
      date: '2024-05-10',
      address: '456 Campus Ave, Town',
      contact: '678-901-2345',
      email: 'info10@example.com',
      website: 'https://www.example10.com',
      description: 'University 10 encourages students to explore their passions and pursue their dreams.'
    },
  ];

  // Filter universities based on search term and date range
  const filteredUniversities = universities.filter(university =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (startDate === '' || university.date >= startDate) &&
    (endDate === '' || university.date <= endDate)
  );

  const handleViewDetails = (university) => {
    setSelectedUniversity(university);
    setIsBoxClickable(false); // Disable clicking on rectangle boxes
  };

  const handleCloseDetails = () => {
    setSelectedUniversity(null);
    setIsBoxClickable(true); // Enable clicking on rectangle boxes
  };

  return (
    <div className="HomePage">
      <h1 className="text"></h1>
      <div className="SearchBarContainer">
        <input
          type="text"
          placeholder="Search for a university/events..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="SearchBar"
        />
        <i className="fas fa-search SearchIcon"></i>
      </div>
      <div className="DateRangeContainer">
        <label>Date</label>
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <label>-</label>
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
      </div>
      <div className="RectangleBoxContainer">
        {filteredUniversities.map((university, index) => (
          <RectangleBox
            key={index}
            university={university}
            onViewDetails={() => handleViewDetails(university)}
            isClickable={isBoxClickable}
          />
        ))}
      </div>
      {selectedUniversity && (
        <DetailedView
          university={selectedUniversity}
          onClose={handleCloseDetails}
        />
      )}
      <div className={`VerticalRectangleContainer ${typingAnimation ? 'typing-animation' : ''}`}>
        <h2 className="NoteTitle"><center>How to Use</center></h2>
        <ul className="InstructionList">
          <li>Enter a keyword in the search bar to find universities or events.</li>
          <li>Choose a date range to filter the results by event dates.</li>
          <li>Click on the "View Details" button to see more information about a university or event.</li>
          <li>Use the provided navigation to explore different sections of the website.</li>
          <li>For any assistance, click on the "Help" section in the navigation menu.</li>
          <li>Enjoy using Student Buddy to discover exciting opportunities!</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
