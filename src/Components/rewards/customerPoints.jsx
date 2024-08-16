import React from 'react'
import { Points } from './Points'

const CustomerPoints = ({ customer }) => {

    const totalPoints = customer.transactions.reduce((acc, val) => acc + Points(val.amount), 0);

    return (
        <div>
            <h2>{customer.customerName}</h2>
            <p>Total Points: {totalPoints}</p>
            <ul>
                {customer.transactions.map((transaction, index) => {
                    return(
                    <li key={index}>Month {new Date(transaction.date).getMonth()+1} : {Points(transaction.amount)} points</li>
                )})}
               
            </ul>
        </div>
    )
}

export default CustomerPoints