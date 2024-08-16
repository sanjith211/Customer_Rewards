import React, { useState, useEffect } from 'react';
import { fetchTransaction } from './fetchTransaction';
import CustomerPoints from './customerPoints';
 
const Rewards = () => {
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
    <div>
        {data.map((customer)=>(
            <CustomerPoints key={customer.customerId} customer={customer} />
        ))}
    </div>
  )
}

export default Rewards