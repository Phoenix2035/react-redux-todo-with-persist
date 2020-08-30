import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    toDoBtn: {
        marginRight: '.5rem',
        color: 'white',
        background: 'rgba(255,172,0,0.91)',
        "&:hover": {
            background: 'rgba(133,93,12,0.78)'
        }
    }
}));


function UndoneBtn({done,item}) {
    const classes = useStyles()
    return (
        <Button
            onClick={()=>done(item.id)}
            className={classes.toDoBtn}
            variant={"contained"}>UnDone</Button>
    );
}

export default UndoneBtn;