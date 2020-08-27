import React from 'react';
import {Container, Grid} from "@material-ui/core"
import Login from "../Components/Login"
import Logout from "../Components/Logout"
import AddTodoInput from "../Components/AddTodoInput"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0',
        background: '#333'
    },
    header: {
        height: '6rem'
    },
    headerInside: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        color: 'white',
        fontSize: '2rem'
    },
    content: {
        padding: '0'
    },
    contentBody: {
        height: '27rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#e9edf0',
    },
    contentHead: {
        fontSize: '4rem',
        margin: '0'
    },
    contentDesc:{
        fontSize: '2rem',
        color: '#6c7981'
    },
    contentLogin:{
        fontSize: '1.5rem',
        color: '#444',
        margin: '0'
    }
}));

function Header() {
    const classes = useStyles()
    return (
        <header>
            <Container className={classes.root} maxWidth={'xl'}>
                <Container className={classes.header} maxWidth={'lg'}>
                    <Grid className={classes.headerInside} container>
                        <p className={classes.logo}>Todo App</p>
                        <Login/>
                    </Grid>
                </Container>
            </Container>

            <Container className={classes.content} maxWidth={'xl'}>
                <Grid className={classes.contentBody} container>
                    <h1 className={classes.contentHead}>Welcome!</h1>
                    <p className={classes.contentDesc}>To get started, add some items to your list</p>
                    {/*<p className={classes.contentLogin}>you must be login</p>*/}
                    <AddTodoInput/>
                </Grid>
            </Container>
        </header>
    );
}

export default Header;