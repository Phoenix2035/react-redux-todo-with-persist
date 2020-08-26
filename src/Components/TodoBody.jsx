import React, {useState} from 'react';
import { Button, Container, Grid, Paper, Tab, Tabs} from "@material-ui/core";




function TodoBody() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <section>
            <Container maxWidth={'md'} style={{height: 'calc(100vh - 35rem)', marginTop: '2rem'}}>
                <Grid item xs={12}>
                    <Tabs

                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab value={0} label="Undone"
                             style={{fontSize: '1.4rem', marginRight: '4rem'}}/>

                        <Tab value={1} label="Done"
                             style={{fontSize: '1.4rem', marginLeft: '4rem'}}/>
                    </Tabs>
                </Grid>

                <Grid item xs={10} md={8} style={{margin: '1rem auto'}}>
                    <Paper elevation={1}
                           style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <span style={{margin: '1rem', fontSize: '1.2rem'}}>Hello</span>

                        <span>
                            <Button style={{margin: '0 .5rem', color: 'white'}} variant={"contained"}
                                    color={"secondary"}>Done</Button>
                            <Button style={{margin: '0 .5rem', color: 'white'}} variant={"contained"}
                                    color={"primary"}>Edit</Button>
                            <Button style={{margin: '0 .5rem', color: 'white', background: '#dd3546'}}
                                    variant={"contained"}
                            >Delete</Button>
                        </span>
                    </Paper>

                </Grid>
            </Container>
        </section>
    );
}

export default TodoBody;