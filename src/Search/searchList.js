import React, { Component } from "react";

import SearchTable from "./SearchTable"
import owl from "../images/Owl.png";

class SearchList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let view

    if (this.props.searchTerm){
      view=<SearchTable data={this.props.blob}/>}
      else{
        view=<img src={owl}
          style={{
            height:"60%",
            width:"auto",
            opacity:"0.6"
          }}/>
      }


    return(
      <div style={{
        height:"100%",
        width:"100%",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
      }}>{view}</div>
    );
  }
}

export default SearchList
