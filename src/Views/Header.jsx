import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Login from "../Components/Login";

function Header() {
    return (
        <header>
            <Container maxWidth={'xl'} style={{padding: '0', background: '#333'}}>
                <Container maxWidth={'lg'} style={{height: '6rem'}}>
                    <Grid container justify={"space-between"} alignItems={'center'}
                          style={{display: 'flex', height: '100%'}}>
                        <p style={{color: 'white', fontSize: '2rem'}}>Todo App</p>
                        <Login/>
                    </Grid>
                </Container>
            </Container>

            <Container maxWidth={'xl'} style={{padding: '0'}}>
                <Grid container style={{display: 'flex', background: '#e9edf0', height: '27rem'}} justify={'center'}
                      alignItems={"center"} direction={'column'}>
                    <h1 style={{fontSize: '4rem', margin: '0'}}>Welcome!</h1>
                    <p style={{fontSize: '2rem', color: '#6c7981'}}>To get started, add some items to your list</p>
                    <p style={{fontSize: '1.5rem', color: '#444', margin: '0'}}>you must be login</p>
                </Grid>
            </Container>
        </header>
    );
}

export default Header;