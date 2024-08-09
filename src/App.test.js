import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { fetchTransaction } from "./Components/rewards/fetchTransaction";

jest.mock('./Components/rewards/FetchTransaction');

test('renders customer rewards data', async () => {
    fetchTransaction.mockResolvedValue([
        {
            customerId: 1,
            customerName: "Babu",
            transactions: [{ date: "2024-01-10", "amount": 110 }]
        }
    ]);

    await act(async () => {
        render(<App />);
    })
    const customerName = await screen.findByText(/babu/i);
    expect(customerName).toBeInTheDocument();
    const totalPoints = await screen.findByText(/total points: 70/i);
    expect(totalPoints).toBeInTheDocument();
})

