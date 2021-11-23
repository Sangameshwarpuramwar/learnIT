import React from "react";
import Header from "./components/header/header";
import "./App.css";
import SearchBar from "./components/searchbar/searchbar";
import { UserProvider } from "./UserContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "Sanga" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(text) {
    this.setState({ searchText: text });
  }

  render() {
    const userDetails={name:"sanga"}
    return (
      <UserProvider value={userDetails}>
        <section className="app">
          <Header></Header>
          {this.state.searchText}
          <div className="content-wraper">
            <div className="search-container">
              <SearchBar onSearchTxtUpdate={this.handleChange}></SearchBar>
            </div>
          </div>
        </section>
      </UserProvider>
    );
  }
}

export default App;
