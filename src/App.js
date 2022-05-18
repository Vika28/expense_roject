import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";
const DUMMY_EXPENSES = [
    { id: 'el1', title: 'Car Insurance', amount: 267.4, date: new Date(2021, 2, 28)},
    { id: 'el2', title: 'Medicine', amount: 26, date: new Date(2021, 5, 2)},
    { id: 'el3', title: 'Entertainment', amount: 76, date: new Date(2021, 9, 813)},
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        });
    }
  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
