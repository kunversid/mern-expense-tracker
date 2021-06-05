import React from "react";

export const TransactionList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-&#8377;400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};
