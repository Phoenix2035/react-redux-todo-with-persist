import React from 'react';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import theme from "./Themes/theme"

import TodoBody from "./Components/TodoBody"
import Header from "./Components/Header";
import EditTodo from "./Components/EditTodo";



function App() {


    return (
        <MuiThemeProvider theme={theme}>
            <Header/>
            <TodoBody/>
            {/*<EditTodo/>*/}
        </MuiThemeProvider>
    )

}

export default App;
