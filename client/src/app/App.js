import React from "react";
import axios from "axios";

import brand from "../__mernstack-brand.svg";

class App extends React.Component {
  state = {
    data: undefined
  }

  componentDidMount() {
    axios.get("/api/v.1/")
      .then(res => {
        this.setState({ data: res.data });
      });
  }

  render() {
    const { data } = this.state;

    const content = data
      ? (
        <div className="wrapper">
          <img src={brand} alt="mernstack-brand" />

          <h1 className="headline">
            a mern stack boilerplate created by
            {` ${data.fname} ${data.lname} `}
            [eclair]
          </h1>
        </div>
      )
      : null;

    return <div className="App">{content}</div>;
  }
}

export default App;
