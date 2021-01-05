import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import SocialService from "./App";

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

ReactDOM.render(<SocialService theme={theme} />, document.getElementById("root"));
