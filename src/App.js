import React, { useState, useEffect } from 'react';
import { fetchTransaction } from './Components/rewards/fetchTransaction';
import { customerPoints } from './Components/rewards/Points';
import './App.css';

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTransaction()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetch transaction:", error);
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <h1>Customer Rewards</h1>
      <ul>
        {data.map((customer) => {
          const points = customerPoints(customer.transactions);
          const totalPoints = Object.values(points).reduce((acc, val) => acc + val, 0)
          return (
            <li key={customer.customerId}>
              <h2>{customer.customerName}</h2>
              <p>Total Points: {totalPoints}</p>
              <ul>
                {Object.entries(points).map(([month, points]) => (
                  <li key={month}>Month {parseInt(month) + 1}: {points} points</li>
                ))}
              </ul>
            </li>
          )

        })
        }
      </ul>
    </div>
  );
}

export default App;
