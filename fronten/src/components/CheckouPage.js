import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({ name: '', email: '', phone: '', address: '' });
  const [shippingDetails, setShippingDetails] = useState({ address: '' });
  const [shippingSameAsBilling, setShippingSameAsBilling] = useState(true);
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expirationDate: '', cvv: '' });
  const [orderSummary] = useState({
    items: [
      { name: 'Product 1', quantity: 1, price: 100 },
      { name: 'Product 2', quantity: 2, price: 50 },
    ],
    subtotal: 200,
    shipping: 10,
    tax: 15,
  });

  const handleBillingChange = (e) => setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  const handleCardChange = (e) => setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });

  const calculateTotal = () => orderSummary.subtotal + orderSummary.shipping + orderSummary.tax;

  const handleOrderSubmit = () => {
    // Handle form submission logic here
    alert("Order has been successfully placed!");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* Billing Details Section */}
      <div className="billing-section">
        <h3>Billing Details</h3>
        <input type="text" name="name" placeholder="Full Name" value={billingDetails.name} onChange={handleBillingChange} required />
        <input type="email" name="email" placeholder="Email Address" value={billingDetails.email} onChange={handleBillingChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={billingDetails.phone} onChange={handleBillingChange} required />
        <input type="text" name="address" placeholder="Billing Address" value={billingDetails.address} onChange={handleBillingChange} required />
      </div>

      {/* Shipping Address Section */}
      <div className="shipping-section">
        <h3>Shipping Address</h3>
        <label>
          <input type="checkbox" checked={shippingSameAsBilling} onChange={() => setShippingSameAsBilling(!shippingSameAsBilling)} />
          Use billing address as shipping address
        </label>
        {!shippingSameAsBilling && (
          <input type="text" name="shippingAddress" placeholder="Shipping Address" value={shippingDetails.address} onChange={(e) => setShippingDetails({ address: e.target.value })} required />
        )}
      </div>

      {/* Payment Method Section */}
      <div className="payment-section">
        <h3>Payment Details</h3>
        <input type="text" name="cardNumber" placeholder="Card Number" maxLength="16" value={cardDetails.cardNumber} onChange={handleCardChange} required />
        <input type="text" name="expirationDate" placeholder="Expiration Date (MM/YY)" maxLength="5" value={cardDetails.expirationDate} onChange={handleCardChange} required />
        <input type="text" name="cvv" placeholder="CVV" maxLength="3" value={cardDetails.cvv} onChange={handleCardChange} required />
      </div>

      {/* Order Summary Section */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        {orderSummary.items.map((item, index) => (
          <div key={index} className="order-item">
            <span>{item.name} (x{item.quantity})</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="summary-details">
          <p>Subtotal: ${orderSummary.subtotal}</p>
          <p>Shipping: ${orderSummary.shipping}</p>
          <p>Tax: ${orderSummary.tax}</p>
          <h4>Total: ${calculateTotal()}</h4>
        </div>
      </div>

      {/* Place Order Button */}
      <button className="place-order-btn" onClick={handleOrderSubmit}>Place Order</button>
    </div>
  );
};

export default Checkout;