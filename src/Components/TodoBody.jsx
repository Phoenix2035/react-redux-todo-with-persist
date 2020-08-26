import React, {useState} from 'react';
import {Badge, Button, Container, Grid, Paper, Tab, Tabs} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";


const StyledBadge = withStyles((theme) => ({
    badge: {
        left: 105,
        top: 22,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    }
}))(Badge);

function TodoBody() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <section>
            <Container maxWidth={'md'} style={{height: 'calc(100vh - 34rem)', marginTop: '1rem'}}>
                <Grid item>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <StyledBadge badgeContent={4} color="secondary"/>
                        <Tab value={0} label="Undone" style={{fontSize: '1.4rem'}}/>

                        <StyledBadge badgeContent={2} color="primary" style={{right: 10}}/>
                        <Tab value={1} label="Done" style={{fontSize: '1.4rem'}}/>
                    </Tabs>
                </Grid>

                <Grid item xs={7} style={{margin: '1rem auto'}}>
                    <Paper elevation={1}
                           style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <span style={{margin: '1rem', fontSize: '1.2rem'}}>Hello</span>

                        <span>
                            <Button style={{margin: '0 .5rem'}} variant={"contained"} color={"primary"}>Done</Button>
                            <Button style={{margin: '0 .5rem'}} variant={"contained"} color={"primary"}>Edit</Button>
                            <Button style={{margin: '0 .5rem'}} variant={"contained"} color={"primary"}>Delete</Button>
                        </span>
                    </Paper>

                </Grid>
            </Container>
        </section>
    );
}

export default TodoBody;