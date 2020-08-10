import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMsg: null }; // only do direct assignment first time

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMsg: err.message });
      }
    );
  }
  render() {
    if (this.state.lat && !this.state.errorMsg) {
      return <div>Latitude:{this.state.lat}</div>;
    }
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error:{this.state.errorMsg}</div>;
    }
    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
