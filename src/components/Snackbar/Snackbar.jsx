import React from 'react';
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles'


const CustomisedSnackbar = ({open, setOpen}) => {
    const classes = useStyles();

    const handleClose = (event,reason) => {
        if(reason === 'clickaway') return;

        setOpen(false);
    }

  return (
    <div className={classes.root}>
        <Snackbar
        anchorOrigin={{vertical: 'top', horizontal:'right'}}
        open={open}
        autoHideDuration={3000}
        onClose = {handleClose}
        >
            <MuiAlert 
            onClose={handleClose}
            severity="Success"
            elevation={6} 
            variant="filled"
            >
                Transaction Created Successfully!
            </MuiAlert>

        </Snackbar>
    </div>
  )
}

export default CustomisedSnackbar