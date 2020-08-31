import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles"
import {Container, Grid,} from "@material-ui/core"
import {useSelector} from "react-redux"
import TodoCard from "./TodoCard";

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: '2rem'
    },
    toDos: {
        margin: '1.5rem auto'
    }
}));


function TodoBody() {
    const classes = useStyles()

    const todoList = useSelector(state => state.todo.todoList)


    return (
        <section>
            <Container className={classes.root} maxWidth={'md'}>

                <Grid className={classes.toDos} item xs={10} md={8}>

                    {
                        todoList.map(item =>
                           <TodoCard item={item} key={item.id}/>
                        )
                    }

                </Grid>
            </Container>
        </section>
    );
}


export default TodoBody