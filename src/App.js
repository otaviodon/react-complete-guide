import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      />
        <ExpenseItem 
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      />
        <ExpenseItem 
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      />
    </div>
  );
}

export default App;
