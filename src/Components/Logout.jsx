import React from 'react'
import {Button} from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: '1.2rem',
        background: '#dd3546',
        color: 'white',
        "&:hover": {
            background: 'rgb(134,9,20)'
        }
    }
}));


function Logout({handleClick}) {
    const classes = useStyles()
    return (
        <Button
            onClick={handleClick}
            className={classes.root}
            variant={"contained"}
            size={"large"}>Logout</Button>
    );
}

export default Logout;