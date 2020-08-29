import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles"
import {Button} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: '1.2rem',
    }
}));

function Login({handleClick}) {
    const classes = useStyles()

    return (
        <Button
            onClick={handleClick}
            className={classes.root}
            variant={"contained"}
            color={"secondary"}
            size={"large"}>Login</Button>
    );
}

export default Login;