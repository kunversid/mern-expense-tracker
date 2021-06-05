import React from "react";

export const IncomeExpenses = () => {
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +&#8377;0.00
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            -&#8377;0.00
          </p>
        </div>
      </div>
    </div>
  );
};
