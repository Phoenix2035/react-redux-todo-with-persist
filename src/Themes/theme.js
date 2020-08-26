import {createMuiTheme} from "@material-ui/core/styles";

export default createMuiTheme({

    MuiInput: {
        input: {
            "&:placeholder": {
                fontSize: "5rem",
                color: 'red'
            }
        }
    }

})


