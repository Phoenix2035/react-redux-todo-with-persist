import React, {useRef, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {addTodo} from "../Redux/ToDo/todo.action";


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

function AddTodoInput({addTodo}) {
    const classes = useStyles()
    const inputElement = useRef(null);

    const [todo, setTodo] = useState({
        text: '',
        done: false
    })


    const handleChange = e => {
        const {name, value} = e.target
        setTodo({
            ...todo,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        todo.text.length > 0 && addTodo({
            ...todo,
            id: Date.now(),
        })

        setTodo({
            text: ''
        })
        inputElement.current.focus()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={classes.root}
            autoComplete="off">

            <TextField
                onChange={handleChange}
                value={todo.text}
                inputRef={inputElement}
                name='text'
                type='text'
                className={classes.input}
                label="I want to do..."
                variant="outlined"/>

            <Button
                type='submit'
                className={classes.btn}
                variant={"contained"}
                color={"primary"}>
                Add
            </Button>
        </form>
    );
}

export default connect(null, {addTodo})(AddTodoInput)
