import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 2,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 3,
      title: "New TV",
      amount: 799.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      title: "New Desk(Wooden)",
      amount: 300.67,
      date: new Date(2021, 2, 25),
    },
  ];

  return (
    <div>
      <h2>Let's get started 2</h2>
      <p>This is also visible!</p>
      <NewExpense></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
