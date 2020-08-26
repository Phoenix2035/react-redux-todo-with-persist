import React from 'react';
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddBtn from "./AddBtn";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '30rem'
        }
    },
    input: {
        "&::placeholder": {
            fontSize: '3rem'
        }
    }
}));

function AddTodoInput() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%'
        }}>
            <TextField className={classes.input} label="I want to do..." variant="outlined"/>
            <AddBtn/>
        </form>
    );
}

export default AddTodoInput;