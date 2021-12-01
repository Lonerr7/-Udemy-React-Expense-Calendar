import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const saveYearHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === enteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          startingYear={enteredYear}
          onChageFilter={saveYearHandler}
        />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
