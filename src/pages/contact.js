import React, { useState } from 'react';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
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

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => setShowModal(false)}>&times;</span>
            <p>Form submitted successfully!</p>
            <button className={styles.closeButton} onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
