import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false); // State to handle modal visibility

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);  // Show success modal after form is submitted
    setFormData({
      name: '',
      address: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div id="fontt">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div id="inputbox">
          <div>
            <input
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <input
              id="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <br />
          </div>
          <div>
            <input
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <input
              id="phone"
              placeholder="Enter your number"
              value={formData.phone}
              onChange={handleChange}
            />
            <br />
            <input
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <br />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Show success modal when form is submitted */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '400px',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <span 
              onClick={() => setShowModal(false)} 
              style={{
                position: 'absolute', 
                top: '10px', 
                right: '10px', 
                fontSize: '24px', 
                color: '#333', 
                cursor: 'pointer'
              }}
            >
              &times;
            </span>
            <p id='yor'>Your form has been submitted successfully!</p>
            <button 
              onClick={() => setShowModal(false)} 
              style={{
                padding: '10px 20px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
