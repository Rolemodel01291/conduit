import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

export default function Balance() {
    const transactions = useSelector((state) => state.conduit.transactions);
    
    const amounts = transactions.map(transaction => transaction.amount);
    console.log("---ehre--", amounts);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="flex mx-auto">
            <Typography className="text-lg">Balance: ${total}</Typography>
        </div>
    )
}