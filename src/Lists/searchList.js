import React, { Component } from "react";

import SearchTable from "./Search_Table"
import owl from "../images/Owl.png";

import './css/searchList.css';

class SearchList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let view

// Renders Owl for no data or Row items for searched terms
    if (this.props.searchTerm){
      view = <SearchTable data={this.props.blob} readingList={this.props.readingList}/>}
      else{
        view=<img className="owl" src={owl}/>
      }


    return(
      <div className="view-div"> {view} </div>
    );
  }
}

export default SearchList
