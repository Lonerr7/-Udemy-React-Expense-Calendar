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

  const filteredExpense = props.items.filter(expense => expense.date.getFullYear().toString() === enteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          startingYear={enteredYear}
          onChageFilter={saveYearHandler}
        />
        {filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
