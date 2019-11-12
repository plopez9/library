import React, {Component} from 'react';

import SearchBar from "./Search/SearchBar";
import ReadingList from "./Favorites/Reading";
import SearchList from "./Lists/searchList";

import './App.css';

class App extends Component {
  state = {
    readingList:[],
    searchTerm:"",
    favorites:false,
  };

  termSelect(input){
    this.setState({
      searchTerm:input
    })
  }

  favorite_push(input){
    this.setState({
      favorites: !this.state.favorites
    })
  }

  search_push(input){
    this.setState({
      favorites: false
    })
  }

  render(){
    let view, blob

// Start of view code. If-Else statements render specific view components
    if(this.state.favorites){

      view = <ReadingList readingList={this.state.readingList}/>
    }

    else{
      if(this.state.searchTerm){

        blob =this.state.searchTerm

        view = <SearchList
        searchTerm={this.state.searchTerm}
        blob={blob}/>

      } else{
        view = <SearchList
        searchTerm={this.state.searchTerm}/>
      }
      }
// End view components

    return (
      <div className="App">
        <div className="Containment-div">
          <div className ="Search-div">
            <SearchBar
            querySet={this.termSelect.bind(this)}
            favSet = {this.favorite_push.bind(this)}
            searchPush ={this.search_push.bind(this)}/>
          </div>
          <div className="Results-div">
            {view}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
