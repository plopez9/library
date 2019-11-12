import React, { Component } from "react";

import './css/searchbar.css';
import star from "../images/Favorites.png";

class SearchBar extends Component {
  state = {
    searchEntry: "",
  };

  eventHandle(event) {
    this.setState({
      searchEntry: event.target.value
    })
  }

  favSet(){
    this.props.favSet()
  }

  changeSearch(){
    this.props.searchPush();
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchEntry)
    .then(response => response.json())
    .then(json => {
      this.props.querySet(json)
    });
  }

  render(){

    return(
      <div className="Search-container">
        <div className= "First-div">

          <button
          className= "Search-button"
          onClick= {this.changeSearch.bind(this)}>
          Search
          </button>

          <input
          className="BookSearch"
          type="text"
          placeholder = "Search Book Name or Author"
          value={this.state.searchEntry}
          onChange={(event)=> this.eventHandle(event)}
          />

          <button
          className = "Favorites-button"
          onClick={this.favSet.bind(this)}>
            <img className="star" src={star}/>
          </button>
        </div>

      </div>
    );
  }
}

export default SearchBar
