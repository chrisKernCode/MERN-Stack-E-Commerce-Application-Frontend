import React from "react";

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <div>
    <p>
      <span>Bestell-ID: {order.paymentIntent.id}</span>
      {" / "}
      <span>
        Betrag:{" / "}
        {(order.paymentIntent.amount /= 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      {" / "}
      <span>Währung: {order.paymentIntent.currency.toUpperCase()}</span>
      {" / "}
      <span>Methode: {order.paymentIntent.payment_method_types[0]}</span>
      {" / "}
      <span>Bezahlung: {order.paymentIntent.status}</span>
      {" / "}
      <span>
        Bestellt am:{" / "}
        {new Date(order.paymentIntent.created * 1000).toLocaleString()}
      </span>
      {" / "}
      <br />
      {showStatus && (
        <span className="badge bg-primary text-white">
          STATUS: {order.orderStatus}
        </span>
      )}
    </p>
  </div>
);

export default ShowPaymentInfo;
