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

  update_list(input){
    const {list} = this.state.readingList
    const test = input

    this.setState({
      readingList: [...this.state.readingList, test]
    })
  }

  remove_list(input){
    console.log(input)
  }

  render(){
    let view

// Start of view code. If-Else statements render specific view components
    if(this.state.favorites){
      view = <ReadingList readingList={this.state.readingList}
      remove = {this.remove_list.bind(this)}/>
    }

    else{
      if(this.state.searchTerm){

        view = <SearchList
        searchTerm={this.state.searchTerm}
        readingList={this.update_list.bind(this)}
        list = {this.state.readingList}/>

      }
        else{
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
            className="SearchBar"
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
