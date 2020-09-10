import React from "react";
class SearchBar extends React.Component {
  state = { term: "cars" };
  onInputChange(event) {
    console.log(event.target.value);
  }
  onFormSubmit=(event)=>
  {
    event.preventDefault();
   this.props.onSubmit(this.state.term);
  }
  render() { 
    return (
      <div className="ui segment">
        <form className="ui fluid form" onSubmit={this.onFormSubmit}>
          <div className="field">
            Image search <br></br>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value})
              }
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
