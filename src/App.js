import React from 'react';
import {Grid, Button, Container} from "@material-ui/core";

function App() {
    return (
        <>
            <Container maxWidth={'xl'} style={{padding: '0', background: '#333'}}>
                <Container maxWidth={'lg'} style={{height: '6rem'}}>
                    <Grid item justify={"space-between"} alignItems={'center'}
                          style={{display: 'flex', height: '100%'}}>
                        <p style={{color: 'white', fontSize: '2rem'}}>Todo App</p>
                        <Button variant={"contained"} color={"primary"} size={"large"}
                                style={{fontSize: '1.2rem'}}>Login</Button>
                    </Grid>
                </Container>
            </Container>

            <Container maxWidth={'xl'} style={{padding: '0'}}>
                <Grid item style={{display: 'flex', background: '#e9edf0', height: '27rem'}} justify={'center'}
                      alignItems={"center"} direction={'column'}>
                    <h1 style={{fontSize: '4rem',margin:'0'}}>Welcome!</h1>
                    <p style={{fontSize: '2rem', color: '#6c7981'}}>To get started, add some items to your list</p>
                    <p style={{fontSize: '1.5rem', color: '#444',margin:'0'}}>you must be login</p>
                </Grid>
            </Container>
        </>
    )

}

export default App;
