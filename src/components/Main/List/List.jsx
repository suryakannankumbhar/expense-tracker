import React,{useContext} from 'react'
import{List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core'
import {Delete, MoneyOff} from '@material-ui/icons'

import useStyles from './styles'
import {ExpenseTrackerContext} from '../../../context/context'

const List = () => {
    const classes = useStyles();
    const {deleteTransaction, transactions}=useContext(ExpenseTrackerContext)

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
            <ListItemText primary={transaction.category} secondary={`Rs ${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransaction(transaction.id)}>
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