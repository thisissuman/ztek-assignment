export function fetchTransactions() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, customer: "John", amount: 120, date: "2025-01-15" },
          { id: 2, customer: "Jane", amount: 75, date: "2025-02-10" },
          { id: 3, customer: "John", amount: 200, date: "2025-03-05" },
          { id: 4, customer: "Alice", amount: 90, date: "2025-01-20" },
        ]);
      }, 1000);
    });
  }