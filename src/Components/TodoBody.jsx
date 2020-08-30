import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Button, Container, Grid, Paper } from "@material-ui/core"
import UndoneBtn from "./UndoneBtn";
import DoneBtn from "./DoneBtn"
import { deleteTodo, doneToggle } from '../Redux/ToDo/todo.action'
import { connect, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '2rem'
    },
    tabs: {
        fontSize: '1.4rem',
        marginRight: '3rem'
    },
    toDos: {
        margin: '1.5rem auto'
    },
    toDoBody: {
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


function TodoBody({ deleteTodo, doneToggle }) {
    const classes = useStyles()

    const todoList = useSelector(state => state.todo.todoList)

    return (
        <section>
            <Container className={classes.root} maxWidth={'md'}>

                <Grid className={classes.toDos} item xs={10} md={8}>

                    {
                        todoList.map(item =>

                            <Paper className={classes.toDoBody} elevation={1} key={item.id}>
                                <span className={classes.toDoJob}>{item.text}</span>
                                <span>

                                    {!item.done
                                        ?
                                        <DoneBtn done={() => doneToggle(item.id)} item={item} />
                                        :
                                        <UndoneBtn done={() => doneToggle(item.id)} item={item} />
                                    }

                                    <Button className={classes.toDoBtn} variant={"contained"}
                                        color={"primary"}>Edit</Button>

                                    <Button
                                        onClick={() => deleteTodo(item.id)}
                                        className={classes.toDoBtnDel}
                                        variant={"contained"}>Delete</Button>
                                </span>
                            </Paper>
                        )
                    }

                </Grid>
            </Container>
        </section>
    );
}


export default connect(null, { deleteTodo, doneToggle })(TodoBody);