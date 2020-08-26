import React from 'react';
import {Button} from "@material-ui/core";

function Logout() {
    return (
        <Button variant={"contained"} color={"secondary"} size={"large"}
                style={{fontSize: '1.2rem'}}>Logout</Button>
    );
}

export default Logout;