/* eslint-disable no-console */
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    axios.get("/api/v.1/").then(res => {
      this.setState({ data: res.data });
    });
  }

  render() {
    const { data } = this.state;
    const content = (
      <div className="wrapper headline">
        a mern stack development boilerplate, see console for app details
      </div>
    );

    if (data) {
      console.log(
        "%c Welcome to your fresh Mern Stack Starter Boilerplate",
        "color: #2196F3; font-weight: 600;"
      );

      console.log(
        "%c ****************************************************",
        "color: #2196F3; font-weight: 600;"
      );

      console.log(
        "app name: %c mernstack-boilerplate",
        "color: #2196F3; font-weight: 600;"
      );

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

    return <div className="App">{content}</div>;
  }
}

export default App;
