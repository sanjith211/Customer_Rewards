import React, { useState, useEffect } from 'react';
import { fetchTransaction } from './fetchTransaction';
import CustomerPoints from './customerPoints';

const Rewards = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    fetchTransaction()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetch transaction:", error);
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>
      <h2>Something went wrong.</h2>
      <p>We couldn't load the content. Please try again later.</p>
    </div>
  }

  return (
      <div>
        {data.map((customer) => (
          <CustomerPoints key={customer.customerId} customer={customer} />
        ))}
      </div>
  )
}

export default Rewards