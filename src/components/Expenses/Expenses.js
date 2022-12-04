import React,{useState} from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear,setFilteredYear]=useState('2022');

  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.map(expense=>
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
      />)}
    </Card>
  );
};

export default Expenses;
