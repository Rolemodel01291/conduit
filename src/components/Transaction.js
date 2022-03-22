import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { deleteTransaction } from '../features/store/conduitSlice';


export default function Transaction({ transaction }) {
    const dispatch = useDispatch();
    const sign = transaction.amount < 0 ? '-' : '+';
    const handleDelete = (id) => {
        dispatch(deleteTransaction(id));
    }

    return (
        <>
            <li className="flex w-full">
                <div className="flex w-1/5 px-4 items-center">
                    <Typography>
                        {transaction.user}
                    </Typography>
                </div>
                <div className="flex w-1/5 px-4 items-center">
                    <Typography className={clsx(transaction.amount < 0 ? "text-red-400" : "text-green-400")}>
                        {sign}${Math.abs(transaction.amount)}
                    </Typography>
                </div>
                <div className="flex w-1/5 px-4 items-center">
                    <Typography>
                        {transaction.date}
                    </Typography>
                </div>
                <div className="flex w-1/5 px-4 items-center">
                    <Typography>
                        {transaction.note}
                    </Typography>
                </div>
                <div className="flex w-1/5 px-4 items-center">
                    <IconButton aria-label="delete" size="small" onClick={() => handleDelete(transaction.id)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </div>
            </li>
            <Divider className="w-full pt-2" />
        </>

    )
}