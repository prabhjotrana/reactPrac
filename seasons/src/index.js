import React from "react";
import ReactDOM from "react-dom";
import SeasonDiplay from "./SeasonDisplay";
import Loading from "./Loading";

class App extends React.Component {
  state = { lat: null, errorMsg: null }; // only do direct assignment first time

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  render() {
    if (this.state.lat && !this.state.errorMsg) {
      return <SeasonDiplay lat={this.state.lat} />;
    }
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error:{this.state.errorMsg}</div>;
    }
    return <Loading message="Please grant the location" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
