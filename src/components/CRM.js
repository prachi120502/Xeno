
/*import React, { useState } from 'react';
import AudienceSegment from './AudienceSegment';
import CampaignHistory from './CampaignHistory';
import MessageSend from './MessageSend';

function CRM() {
  const [criteria, setCriteria] = useState('');
  const [audienceSize, setAudienceSize] = useState(0);
  const [segments, setSegments] = useState([]);

  // Function to add a rule to the segments list
  const handleAddRule = () => {
    if (criteria.trim()) {
      setSegments([...segments, criteria]);
      setCriteria('');
    } else {
      alert('Please enter a criteria.');
    }
  };

  // Function to check audience size (dummy implementation)
  const handleCheckAudienceSize = () => {
    setAudienceSize(Math.floor(Math.random() * 1000)); // Random size for demo
  };

  // Function to save audience (placeholder for actual API functionality)
  const handleSaveAudience = () => {
    alert('Audience Saved!');
  };

  return (
    <div className="crm-dashboard">
      <h2>Simple Audience Builder</h2>
      <div className="audience-builder">
        <select>
          <option>Total Spends</option>
          <option>Age</option>
          <option>Location</option>
          {/* Add more criteria options as needed } */
       /* </select>

        <input
          type="text"
          value={criteria}
          onChange={(e) => setCriteria(e.target.value)}
          placeholder="Enter Criteria"
        />

        <select>
          <option>AND</option>
          <option>OR</option>
        </select>

        <button onClick={handleAddRule}>Add Rule</button>
      </div>

      <div className="audience-actions">
        <button onClick={handleCheckAudienceSize}>Check Audience Size</button>
        <button onClick={handleSaveAudience}>Save Audience</button>
        <p>Audience Size: <strong>{audienceSize}</strong></p>
      </div>

      <h3>Created Segments:</h3>
      <ul>
        {segments.map((segment, index) => (
          <li key={index}>{segment}</li>
        ))}
      </ul>

      <h3>Past Campaigns</h3>
      <CampaignHistory />

      <h3>Communication Log</h3>
      <MessageSend />
    </div>
  );
}

export default CRM; */

/*import React from 'react';

function CRM() {
  return (
    <div className="crm-container">
      <h2 className="crm-title">Simple Audience Builder</h2>
      <div className="crm-section">
        <label>
          <select>
            <option>Total Spends</option>
            {/* Other options }*/
 /*         </select>
          <input type="text" placeholder="Enter Criteria" />
          <select>
            <option>AND</option>
            <option>OR</option>
          </select>
          <button>Add Rule</button>
        </label>
        <button>Check Audience Size</button>
        <button>Save Audience</button>
      </div>
      
      <p>Audience Size: 0</p>
      
      <div className="crm-section">
        <h3>Created Segments:</h3>
        {/* Dynamic segment entries }*/
 /*     </div>
      
      <div className="crm-section">
        <h3>Past Campaigns</h3>
        <p>Previous campaigns displayed here...</p>
      </div>

      <div className="crm-section">
        <h3>Communication Log</h3>
        <input type="text" placeholder="Customer Name" />
        <button>Add Log Entry</button>
        <p>Communication Log:</p>
      </div>
    </div>
  );
}

export default CRM; */

import React, { useState } from 'react';
import AudienceSegment from './AudienceSegment';
import CampaignHistory from './CampaignHistory';
import MessageSend from './MessageSend';

function CRM() {
  const [criteria, setCriteria] = useState('');
  const [audienceSize, setAudienceSize] = useState(0);
  const [segments, setSegments] = useState([]);

  // Function to add a rule to the segments list
  const handleAddRule = () => {
    if (criteria.trim()) {
      setSegments([...segments, criteria]);
      setCriteria('');
    } else {
      alert('Please enter a criteria.');
    }
  };

  // Function to check audience size (dummy implementation)
  const handleCheckAudienceSize = () => {
    setAudienceSize(Math.floor(Math.random() * 1000)); // Random size for demo
  };

  // Function to save audience (placeholder for actual API functionality)
  const handleSaveAudience = () => {
    alert('Audience Saved!');
  };

  return (
    <div className="crm-dashboard">
      <h2 className="crm-title">Simple Audience Builder</h2>
      
      {/* Audience Builder Section */}
      <div className="audience-builder">
        <label>
          <select>
            <option>Total Spends</option>
            <option>Age</option>
            <option>Location</option>
            {/* Add more criteria options as needed */}
          </select>

          <input
            type="text"
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
            placeholder="Enter Criteria"
          />

          <select>
            <option>AND</option>
            <option>OR</option>
          </select>

          <button onClick={handleAddRule}>Add Rule</button>
        </label>
      </div>

      {/* Audience Actions Section */}
      <div className="audience-actions">
        <button onClick={handleCheckAudienceSize}>Check Audience Size</button>
        <button onClick={handleSaveAudience}>Save Audience</button>
        <p>Audience Size: <strong>{audienceSize}</strong></p>
      </div>

      {/* Created Segments Section */}
      <div className="crm-section">
        <h3>Created Segments:</h3>
        <ul>
          {segments.map((segment, index) => (
            <li key={index}>{segment}</li>
          ))}
        </ul>
      </div>

      {/* Past Campaigns Section */}
      <div className="crm-section">
        <h3>Past Campaigns</h3>
        <CampaignHistory />
      </div>

      {/* Communication Log Section */}
      <div className="crm-section">
        <h3>Communication Log</h3>
        <MessageSend />
      </div>
    </div>
  );
}

export default CRM;




