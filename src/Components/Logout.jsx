import React from 'react';
import {Button} from "@material-ui/core";

function Logout() {
    return (
        <Button variant={"contained"}
                style={{fontSize: '1.2rem', background: '#dd3546', color: 'white'}}>Logout</Button>
    );
}

export default Logout;