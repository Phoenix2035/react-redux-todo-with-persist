import React from 'react';
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "@material-ui/core";

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
function EditTodo() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:'3rem'
        }}>
            <TextField className={classes.input}  variant="outlined"/>
            <Button variant={"contained"} color={"primary"} style={{width:'2rem', height:'4rem'}}>
                Edit
            </Button>
        </form>
    );
}

export default EditTodo;