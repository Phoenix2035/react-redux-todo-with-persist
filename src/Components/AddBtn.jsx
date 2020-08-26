import React from 'react';
import {Button,Grid} from "@material-ui/core";

function AddBtn(props) {
    return (
        <Button variant={"contained"} color={"primary"} style={{width:'2rem', height:'3rem'}}>
               Add
           </Button>
    );
}

export default AddBtn;