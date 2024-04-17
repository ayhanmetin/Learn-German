import React, { useState } from 'react';
import './form.css';

function SubscribeForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const postUrl = `YOUR_MAILCHIMP_FORM_ACTION_URL&EMAIL=${encodeURIComponent(
      email
    )}`;
    fetch(postUrl, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        console.log('Subscription successful:', data);
        setEmail('');
      })
      .catch(error => console.error('Error subscribing:', error));
  };

  return (
    <div className='subscribe-container'>
      <form
        onSubmit={handleSubmit}
        className='subscribe-form d-flex justify-content-center'
      >
        <input
          type='email'
          className='form-control email-input'
          placeholder='enter your email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type='submit' className='btn btn-outline-warning subscribe-button'>
          {' '}
          subscribe
        </button>
      </form>
    </div>
  );
}

export default SubscribeForm;
