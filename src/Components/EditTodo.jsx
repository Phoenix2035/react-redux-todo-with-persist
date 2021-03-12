import React, {useState} from 'react'
import TextField from "@material-ui/core/TextField"
import makeStyles from "@material-ui/core/styles/makeStyles"
import {Button} from "@material-ui/core"
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
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

function EditTodo({edit, item}) {
    const classes = useStyles()
    const todoList = useSelector(state => state.todo.todoList.find(todo => todo.id === item.id))


    const [text, setText] = useState(item.text)

    return (
        <div className={classes.root}>
            <TextField
                onChange={e => setText(e.target.value)}
                value={text}
                className={classes.input}
                variant="outlined"/>
            <Button
                onClick={() => edit(item.id,text)}
                className={classes.btn}
                variant={"contained"}
                color={"primary"}>
                Edit
            </Button>
        </div>
    );
}

export default EditTodo;
