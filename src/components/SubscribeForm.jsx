import React, { useState } from 'react';
import ThemeIcon from './ThemeIcon';

function SubscribeForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Endpoint URL from Mailchimp's setup for form submission
    const postUrl = `YOUR_MAILCHIMP_FORM_ACTION_URL&EMAIL=${encodeURIComponent(
      email
    )}`;
    fetch(postUrl, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        console.log('Subscription successful:', data);
        setEmail(''); // Reset email input after successful subscription
      })
      .catch(error => console.error('Error subscribing:', error));
  };

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <div
        style={{
          marginTop: '15px',
          display: 'flex',
          gap: '20px',
          marginBottom: '20px',
          justifyContent: 'center',
        }}
      >
        <ThemeIcon />
      </div>
      <div
        style={{
          marginTop: '15px',
          display: 'flex',
          gap: '20px',
          marginBottom: '20px',
          justifyContent: 'center',
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <button
            type='submit'
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubscribeForm;
