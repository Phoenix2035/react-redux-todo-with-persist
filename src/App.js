import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from "./Themes/theme"

import Header from "./Views/Header"
import TodoBody from "./Components/TodoBody"
// import EditTodo from "./Components/EditTodo";


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
