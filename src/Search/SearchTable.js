import React, { Component } from "react";
import ReactTable from "react-table";

import 'react-table/react-table.css';

import star from "../images/Plus Icon.png";

class SearchTable extends Component {
  constructor(props){
    super(props)
  }
  state:{
    test:[]
  }

  render(){

    console.log(this.state)

    const columns = [{
    Header: 'Author',
    accessor: "author",
  },
  {
    Header: 'Title',
    accessor: "title",
  },
  {
    Header: 'Publisher',
    accessor: "publisher",
  },
  {
    Header: "Add",
    accessor: "add",
    Cell: row => (
      <div style = {{
        height:"100%",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}>
        <button style={{
          height:"50%",
          width:"70px",
          cursor:"pointer"
        }}>
           Add
        </button>
      </div>)
  }]

    return(
      <div style={{
        height:"99%",
        width:"99%",
        display:"flex",
      }}>
      <ReactTable
        columns={columns}
        data = {[{
          author:this.props.data.items[0].volumeInfo.authors,
          title:this.props.data.items[0].volumeInfo.title,
          publisher:this.props.data.items[0].volumeInfo.publisher},
          {
            author:this.props.data.items[1].volumeInfo.authors,
            title:this.props.data.items[1].volumeInfo.title,
            publisher:this.props.data.items[1].volumeInfo.publisher},
          {
            author:this.props.data.items[2].volumeInfo.authors,
            title:this.props.data.items[2].volumeInfo.title,
            publisher:this.props.data.items[2].volumeInfo.publisher},
          {
            author:this.props.data.items[3].volumeInfo.authors,
            title:this.props.data.items[3].volumeInfo.title,
            publisher:this.props.data.items[3].volumeInfo.publisher},
          {
            author:this.props.data.items[4].volumeInfo.authors,
            title:this.props.data.items[4].volumeInfo.title,
            publisher:this.props.data.items[4].volumeInfo.publisher},
        ]}
        resolveData={data => data.map(row => row)}
        style={{width:"100%"}}
        showPagination={false}
        defaultPageSize= {5}
        />
      </div>
    );
  }
}

export default SearchTable
