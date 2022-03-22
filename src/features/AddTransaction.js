import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion"
import moment from "moment";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addTransaction } from './store/conduitSlice';


const useStyles = makeStyles({
    field: {
        "&&": {
            marginRight: '5px',
            marginBottom: "10px"
        }
    },
});
export default function AddTransaction() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [client, setClient] = useState("");
    const [user, setUser] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(moment().format("MM-DD-YYYY"));
    const [note, setNote] = useState("");

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            client,
            user,
            amount: +amount,
            date,
            note
        }

        dispatch(addTransaction(newTransaction));
    }


    return (
        <motion.div className="flex flex-wrap mx-auto w-full">
            <motion.div className="flex flex-col py-4 w-full">
                <form onSubmit={onSubmit}>
                    <div className="flex flex-wrap w-full">
                        <TextField
                            id="outlined-basic"
                            label="Client"
                            variant="outlined"
                            className="flex w-full"
                            InputProps={{
                                className: classes.field
                            }}
                            value={client}
                            onChange={(e) => setClient(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap w-full">
                        <TextField
                            id="outlined-basic"
                            label="User"
                            variant="outlined"
                            className="flex w-full"
                            InputProps={{
                                className: classes.field
                            }}
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap w-full">
                        <TextField
                            type="number"
                            label="Amount (negative - expense, positive - income)"
                            className="flex w-full"
                            InputProps={{
                                className: classes.field
                            }}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap w-full">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Payment date"
                                inputFormat="MM/dd/yyyy"
                                InputProps={{
                                    className: classes.field
                                }}
                                className="flex w-full w-min-128"
                                value={date}
                                onChange={(date) => setDate(moment(date).format("MM-DD-YYYY"))}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="flex flex-wrap w-full">
                        <TextField
                            id="outlined-multiline-static"
                            label="Note"
                            multiline
                            rows={2}
                            className="flex w-full"
                            InputProps={{
                                className: classes.field
                            }}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap w-full">
                        <Button
                            type="submit"
                            variant="contained"
                            className="w-full"
                        >
                            Add transaction
                        </Button>
                    </div>
                </form>


            </motion.div>
        </motion.div >
    )
}