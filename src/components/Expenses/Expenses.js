import React, { useState } from "react";
import "./Expenses.css";
import Card from "../Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredItems = props.items.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  console.log(filteredItems);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredItems}></ExpenseChart>
        <ExpensesList items={filteredItems}/>
      </Card>
    </div>
  );
}

export default Expenses;
