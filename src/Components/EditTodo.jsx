import React from 'react';
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        width: '40rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '3rem',
    },
    input: {
        width: '30rem',
    },
    btn: {
        width: '2rem',
        height: '4rem',
        fontSize: '1.2rem'
    }
}));

function EditTodo() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.input} variant="outlined"/>
            <Button className={classes.btn} variant={"contained"} color={"primary"}>
                Edit
            </Button>
        </form>
    );
}

export default EditTodo;