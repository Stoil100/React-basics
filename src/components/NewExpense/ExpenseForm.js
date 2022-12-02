import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // 1st Way(better but depends)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 2nd and 3rd Way(worse but depends)
  // const[userInput,setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // });

  const ChangedTitleValue = (e) => {
    // 1st Way(best but depends):
    setEnteredTitle(e.target.value);

    // 2nd Way(bad):
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:e.target.value
    // });

    // 3rd Way(good):
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:e.target.value};
    // });
  };
  const ChangedAmountValue = (e) => {
    // 1st Way(best but depends):
    setEnteredAmount(e.target.value);

    // 2nd Way(bad):
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:e.target.value
    // });

    // 3rd Way(good):
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount:e.target.value};
    // });
  };
  const ChangedDateValue = (e) => {
    // 1st Way(best but depends)
    setEnteredDate(e.target.value);

    // 2nd Way(bad):
    // setUserInput({
    //     ...userInput,
    //     enteredDate:e.target.value
    // });

    // 3rd Way(good):
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredDate:e.target.value};
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData={
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={ChangedTitleValue} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={ChangedAmountValue}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2010-01-01"
            max="2030-01-01"
            onChange={ChangedDateValue}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
