
import React, { useState } from 'react';

function MessageSend() {
  const [customerName, setCustomerName] = useState('');
  const [messages, setMessages] = useState([]); // State to store message log entries

  const handleAddLogEntry = () => {
    if (customerName.trim()) {
      const newMessage = `Message to ${customerName}: This is a log entry.`; // Example message
      setMessages([...messages, newMessage]); // Add new message to messages list
      setCustomerName(''); // Clear input
    } else {
      alert("Please enter a customer name.");
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={customerName} 
        onChange={(e) => setCustomerName(e.target.value)} 
        placeholder="Customer Name" 
      />
      <button onClick={handleAddLogEntry}>Add Log Entry</button>
      
      <h4>Communication Log:</h4>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageSend;
