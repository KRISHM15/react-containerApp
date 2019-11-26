import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default class Header extends Component {
  render() {
    return (
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6"> Batch Container</Typography>
        </Toolbar>
        <p>Click the icon to Assign/Reassign</p>
      </AppBar>
    );
  }
}
