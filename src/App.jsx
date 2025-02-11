import React, { useState, useEffect, lazy, Suspense } from "react";
import { fetchTransactions } from "./api";
import PurchaseForm from "./components/PurchaseForm";
import Loading from "./components/Loading";

const RewardsTable = lazy(() => import("./components/RewardsTable"));

function App() {
  const [transactions, setTransactions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("All");

  useEffect(() => {
    fetchTransactions().then(setTransactions);
  }, []);

  const months = ["All", "January", "February", "March"];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Rewards Program</h1>
      <PurchaseForm setTransactions={setTransactions} />
      <div className="my-4">
        <label className="font-bold">Select Month: </label>
        <select
          className="border p-2 ml-2"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>
      <Suspense fallback={<Loading />}>
        <RewardsTable transactions={transactions} selectedMonth={selectedMonth} />
      </Suspense>
    </div>
  );
}

export default App;