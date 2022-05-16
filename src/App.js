import './App.css';
import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
        { title: 'Car Insurance', amount: 267.4, date: new Date(2021, 2, 28)},
        { title: 'Car Insurance', amount: 267.4, date: new Date(2021, 2, 28)},
        { title: 'Car Insurance', amount: 267.4, date: new Date(2021, 2, 28)},
        { title: 'Car Insurance', amount: 267.4, date: new Date(2021, 2, 28)},
    ]
  return (
    <div className="App">
        {/*{expenses.map((expense) => {*/}
        {/*    return <ExpenseItem*/}
        {/*        title={expense.title}*/}
        {/*        amount={expense.amount}*/}
        {/*        date={expense.date}*/}
        {/*    />*/}
        {/*})}*/}
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
