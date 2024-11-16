
import React, { useState } from 'react';
import axios from 'axios';

function AudienceSegment() {
  const [criteria, setCriteria] = useState('');
  const [segments, setSegments] = useState([]); // State to store segments

  const handleCreateSegment = async () => {
    if (criteria.trim()) {
      try {
        await axios.post('/api/customers/add', { criteria }); // Assuming you are sending this to an API
        setSegments([...segments, criteria]); // Add the new criteria to the segments list
        setCriteria(''); // Clear the input
      } catch (error) {
        console.error('Error creating segment:', error);
      }
    } else {
      alert("Please enter a valid criteria.");
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={criteria} 
        onChange={(e) => setCriteria(e.target.value)} 
        placeholder="Enter Criteria" 
      />
      <button onClick={handleCreateSegment}>Create Segment</button>
      
      <h4>Created Segments:</h4>
      <ul>
        {segments.map((segment, index) => (
          <li key={index}>{segment}</li>
        ))}
      </ul>
    </div>
  );
}

export default AudienceSegment;

