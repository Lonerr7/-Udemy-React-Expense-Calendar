import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const saveYearHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === enteredYear
  );

  let expensesContent = <p>No Expenses Found.</p>;

  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          startingYear={enteredYear}
          onChageFilter={saveYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
