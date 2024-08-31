// PaymentMockup.jsx
import React from 'react';
// import './PaymentMockup.css'; // Import the CSS file for styling

const PaymentMockup = () => {
  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <div className="payment-form">
        <h2>Order Summary</h2>
        <div className="summary">
          <p><strong>Subtotal:</strong> ₹500</p>
          <p><strong>Shipping Fee:</strong> ₹50</p>
          <p><strong>Total Amount:</strong> ₹550</p>
        </div>

        <h2>Payment Details</h2>
        <form id="payment-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="johndoe@example.com" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" placeholder="1234567890" required />

          <label htmlFor="card-number">Card Number:</label>
          <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required />

          <label htmlFor="expiry">Expiry Date:</label>
          <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required />

          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" placeholder="123" required />

          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentMockup;
