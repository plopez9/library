import React, { Component } from "react";
import ReactTable from "react-table";

import 'react-table/react-table.css';
import './css/SearchTable.css';

class SearchTable extends Component {
  constructor(props){
    super(props)
  }

  render(){

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
      <div className="add-button-div">
        <button className="add-button"> Add </button>
      </div>)
  }]

    return(
      <div className="list-table-div">
      <ReactTable
        className="list-table"
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
        showPagination={false}
        defaultPageSize= {5}
        />
      </div>
    );
  }
}

export default SearchTable
