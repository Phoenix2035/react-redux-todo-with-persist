import React, {useState} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles"
import {Button, Container, Grid, Paper, Tab, Tabs} from "@material-ui/core"
import UndoneBtn from "./UndoneBtn";
import DoneBtn from "./DoneBtn";

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
        alignItems: 'center'
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


function TodoBody() {
    const classes = useStyles()
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <section>
            <Container className={classes.root} maxWidth={'md'}>
                <Grid item xs={12}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab className={classes.tabs} value={0} label="Undone"/>
                        <Tab className={classes.tabs} value={1} label="Done"/>
                    </Tabs>
                </Grid>

                <Grid className={classes.toDos} item xs={10} md={8}>
                    <Paper className={classes.toDoBody} elevation={1}>
                        <span className={classes.toDoJob}>Hello</span>

                        <span>
                            <DoneBtn/>
                            {/*<UndoneBtn/>*/}
                            <Button className={classes.toDoBtn} variant={"contained"} color={"primary"}>Edit</Button>
                            <Button className={classes.toDoBtnDel} variant={"contained"}>Delete</Button>
                        </span>
                    </Paper>

                </Grid>
            </Container>
        </section>
    );
}

export default TodoBody;