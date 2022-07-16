import React,{useContext} from 'react'
import{List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core'
import {Delete, MoneyOff} from '@material-ui/icons'

import useStyles from './styles'
import {ExpenseTrackerContext} from '../../../context/context'

const List = () => {
    const classes = useStyles();
    const {deleteTransaction}=useContext(ExpenseTrackerContext)


    const transactions = [
        {id:1, type:"Income", category:'Salary', amount:200, date:"Sat Jul 16"},
        {id:2, type:"Expense", category:'Pet', amount:100, date:"Sat Jul 16"},
        {id:3, type:"Income", category:'Business', amount:20, date:"Sat Jul 16"},
        {id:4, type:"Expense", category:'Football', amount:2000, date:"Sat Jul 16"},
        {id:5, type:"Income", category:'Cricket', amount:2, date:"Sat Jul 16"}
    ];

  return (
    <MUIList dense="false" className={classes.list}>
{transactions.map((transaction)=>(
    <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
        <ListItem>
            <ListItemAvatar>
                <Avatar className={transaction.type==='Income' ? classes.avatarIncome : classes.avatarExpense}>
                    <MoneyOff />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick="">
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </Slide>
))}
    </MUIList>
  )
}

export default List