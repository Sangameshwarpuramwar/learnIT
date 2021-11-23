import React from "react";
import UserContext from "../../UserContext";
import "./searchbar.css";
import TempComponent from "./tempcomponent";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { searchValue: "", counter: 1 };
  }
  handleChange(e) {
    this.setState({ searchValue: e.target.value });
    this.props.onSearchTxtUpdate(e.target.value);
  }
  handleCounter() {
    const count = this.state.counter + 1;

    this.setState({ counter: count });
  }
  render() {
    const searchTextValue = this.state.searchValue;
    return (
      <div className="search-bar">
        <input
          type="text"
          name="searchtext"
          className="search-field"
          value={searchTextValue}
          onChange={this.handleChange}
        ></input>
        <button type="button" onClick={() => this.handleCounter()}>
          increase
        </button>
        {this.context.name}=={this.state.counter}
        <TempComponent></TempComponent>
      </div>
    );
  }
}
SearchBar.contextType = UserContext;
export default SearchBar;
