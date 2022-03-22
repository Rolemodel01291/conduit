import React from 'react';
import { useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Transaction from '../components/Transaction';

export default function TransactionList() {
  const transactions = useSelector((state) => state.conduit.transactions);
  
  return (
    <div className="flex flex-wrap flex-col mx-auto w-full">
      <p className="flex mx-auto my-4 text-lg">Recording Payments</p>
      <div className="flex w-full">
        <div className="flex w-1/5 px-4">
          <Typography>Sender</Typography>
        </div>
        <div className="flex w-1/5 px-4">
          <Typography>Amount</Typography>
        </div>
        <div className="flex w-1/5 px-4">
          <Typography>Date</Typography>
        </div>
        <div className="flex w-1/5 px-4">
          <Typography>Note</Typography>
        </div>
        <div className="flex w-1/5 px-4">
        </div>
      </div>
      <Divider className="w-full pt-2"/>
      <ul className="flex flex-col">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}