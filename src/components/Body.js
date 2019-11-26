import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

export default class Body extends Component {
  // selectElement = data => {
  //   let index = this.props.names.indexOf(data);
  //   return console.log(this.props.names[index].Name);
  // };
  // purpleStyle = () => {
  //   if (this.props.names.indexOf(this.data) === this.props.tempStore)
  //     return {
  //       backgroundColor: "purple"
  //     };
  // };

  render() {
    const myStyle = {
      marginTop: "50px",
      height: "350px",
      opacity: "0.9"
    };

    return (
      <Paper style={myStyle}>
        <Grid style={{ textAlign: "center" }} container>
          <Grid item xs={5}>
            <List>
              {this.props.names.map(name => (
                <ListItem
                  key={name.id}
                  onClick={this.props.selectElement.bind(this, name)}

                  // onClick={this.selectElement.bind(this, name)}
                >
                  <ListItemAvatar>
                    <Avatar src={name.Avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={name.Name} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={2}>
            <br></br>
            <br></br>
            <Button
              variant="contained"
              color="primary"
              disabled={
                !this.props.tempStore.Name || this.props.rights.length === 5
              }
              //   || this.props.rights.indexOf(this.props.tempStore) > 0
              // }
              onClick={this.props.batchAssign.bind(this)}
            >
              Assign
            </Button>
            <br></br>
            <br></br>

            <Button
              variant="contained"
              color="secondary"
              disabled={this.props.tempStore.length === 0}
              //   this.props.rights.length === 0 ||
              //
              //   // ||this.props.names.indexOf(this.props.tempStore) > 0
              // }
              onClick={this.props.batchReassign.bind(this)}
            >
              Reassign
            </Button>
          </Grid>
          <Grid item xs={5}>
            <List>
              {this.props.rights.map(right => (
                <ListItem
                  key={right.id}
                  onClick={this.props.selectElement.bind(this, right)}
                >
                  <ListItemAvatar>
                    <Avatar src={right.Avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={right.Name} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

Body.propTypes = { names: PropTypes.array.isRequired };
Body.propTypes = { rights: PropTypes.array.isRequired };
