import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles"
import {Button} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    toDoBtn: {
        marginRight: '.5rem',
    }
}));

function DoneBtn() {
    const classes = useStyles()

    return (
        <Button className={classes.toDoBtn} variant={"contained"} color={'secondary'}>Done</Button>
    );
}

export default DoneBtn;