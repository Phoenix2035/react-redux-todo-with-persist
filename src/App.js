import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from "./Themes/theme"

import TodoBody from "./Components/TodoBody"
import Header from "./Views/Header"
import EditTodo from "./Components/EditTodo";
import {Provider} from "react-redux";
import store from "./Redux/store";


function App() {


    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <Header/>
                <TodoBody/>
                {/*<EditTodo/>*/}
            </MuiThemeProvider>
        </Provider>
    )

}

export default App;
