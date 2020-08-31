import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles"
import {connect, useSelector} from "react-redux";
import {Button, Paper} from "@material-ui/core";
import DoneBtn from "./DoneBtn";
import UndoneBtn from "./UndoneBtn";
import EditTodo from "./EditTodo";
import {deleteTodo, editTodo, doneToggle} from "../Redux/ToDo/todo.action";
import DoneUndone from "./DoneUndone";


const useStyles = makeStyles((theme) => ({
    toDoBody: {
        height: '6rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem'
    },
    toDoJob: {
        margin: '1rem',
        fontSize: '1.2rem'
    },
    toDoBtn: {
        marginRight: '.5rem',
        color: 'white'
    },
    toDoBtnDel: {
        marginRight: '.5rem',
        color: 'white',
        background: '#dd3546',
        "&:hover": {
            background: 'rgb(134,9,20)'
        }
    }
}));

function TodoCard({item, editTodo, deleteTodo, doneToggle}) {
    const classes = useStyles()
    const [edit, setEdit] = useState(false)

    const editHandler = (id, text) => {
        editTodo(
            id,
            text
        )
        setEdit(false)
    }
    return (
        <Paper className={classes.toDoBody} elevation={1}>
            {
                !edit
                    ?
                    <>
                        <span className={classes.toDoJob}>{item.text}</span>

                        <span>
                            <DoneUndone item={item}/>
                            <Button
                                onClick={() => setEdit(true)}
                                className={classes.toDoBtn}
                                variant={"contained"}
                                color={"primary"}>Edit</Button>

                            <Button
                                onClick={() => deleteTodo(item.id)}
                                className={classes.toDoBtnDel}
                                variant={"contained"}>Delete</Button>
                        </span>
                    </>

                    :
                    <>
                        <EditTodo edit={editHandler} item={item}/>
                        {/*{console.log(item.id, item.text)}*/}
                    </>
            }
        </Paper>
    );
}

export default connect(null, {deleteTodo, editTodo, doneToggle})(TodoCard)