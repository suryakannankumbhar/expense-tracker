import React from 'react';
import { Grid } from '@material-ui/core';

import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid
                className={classes.grid}
                container
                spacing={0}
                alignItems='center'
                justify='center'
                style={{
                    height: '100vh',
                    textAlign: 'center',
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={4}
                    className={classes.mobile}
                    style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                >
                    <Details title='Income' />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop}>
                    <Details title='Income' />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.last}>
                    <Details title='Expense' />
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
