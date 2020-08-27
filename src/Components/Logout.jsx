import React from 'react'
import {Button} from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: '1.2rem',
        background: '#dd3546',
        color: 'white'
    }
}));


function Logout() {
    const classes = useStyles()
    return (
        <Button className={classes.root} variant={"contained"} size={"large"}>Logout</Button>
    );
}

export default Logout;