import React from 'react';
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        width: '40rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '30rem',
    },
    btn: {
        width: '2rem',
        height: '4rem',
        color: 'white',
        fontSize: '1.2rem'
    }
}));

function AddTodoInput() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.input} label="I want to do..." variant="outlined"/>
            <Button className={classes.btn} variant={"contained"} color={"primary"}>
                Add
            </Button>
        </form>
    );
}

export default AddTodoInput;