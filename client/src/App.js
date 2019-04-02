/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { name } from "../package.json";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    textTransform: "capitalize"
  },
  p: {
    color: "#2196F3"
  }
});

class App extends Component {
  state = {
    data: null,
    isLogged: false
  };

  handleClick = async () => {
    const res = await axios.get("/api/v.1/");
    this.setState({ data: res.data, isLogged: true });
  };

  render() {
    const { data, isLogged } = this.state;
    const { classes } = this.props;

    if (data) {
      console.log(
        "%c Welcome to your fresh Mern Stack Starter Boilerplate",
        "color: #2196F3; font-weight: 600;"
      );

      console.log(
        "%c ****************************************************",
        "color: #2196F3; font-weight: 600;"
      );

      console.log(`app name: %c ${name}`, "color: #2196F3; font-weight: 600;");

      console.log(
        `author: %c ${data.fname} ${data.lname}`,
        "color: #2196F3; font-weight: 600; text-transform: capitalize;"
      );

      console.log(
        `version: %c ${data.version}`,
        "color: #2196F3; font-weight: 600;"
      );

      console.log(`github repo: ${data.github_repo_URL}`);
      console.log(`github page: ${data.github_page_URL}`);
    }

    return (
      <div className="App wrapper headline">
        a mern stack development boilerplate, click the button to see app info
        &rarr;
        <Button
          onClick={this.handleClick}
          variant="outlined"
          className={classes.button}
        >
          Click me
        </Button>
        {isLogged ? (
          <p className={classes.p}>view console to see app info</p>
        ) : null}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
