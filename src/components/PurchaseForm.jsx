import React, { useState } from "react";

function PurchaseForm({ setTransactions }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    const newTransaction = {
      id: Date.now(),
      customer: name,
      amount: parseFloat(amount),
      date: new Date().toISOString().split("T")[0],
    };
    setTransactions((prev) => [...prev, newTransaction]);
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 border p-4">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      <input
        type="number"
        placeholder="Enter purchase amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Purchase</button>
    </form>
  );
}

export default PurchaseForm;
