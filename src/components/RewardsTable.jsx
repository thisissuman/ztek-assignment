import React from "react";
import { calculatePoints, getMonthName } from "../utils";

function RewardsTable({ transactions, selectedMonth }) {
  const filteredTransactions =
    selectedMonth === "All"
      ? transactions
      : transactions.filter((t) => getMonthName(t.date) === selectedMonth);

  const customerPoints = filteredTransactions.reduce((acc, { customer, amount }) => {
    acc[customer] = (acc[customer] || 0) + calculatePoints(amount);
    return acc;
  }, {});

  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Customer</th>
          <th className="border px-4 py-2">Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(customerPoints).map(([customer, points]) => (
          <tr key={customer}>
            <td className="border px-4 py-2">{customer}</td>
            <td className="border px-4 py-2">{points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RewardsTable;