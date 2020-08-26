import React from 'react';
import {Button} from "@material-ui/core";

function Login() {
    return (
        <Button variant={"contained"} color={"primary"} size={"large"}
                style={{fontSize: '1.2rem'}}>Login</Button>
    );
}

export default Login;