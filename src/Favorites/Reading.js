import React, { Component } from "react";
import ReactTable from "react-table";

import 'react-table/react-table.css';
import './css/Reading.css';

class ReadingList extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const columns = [{
    Header: 'Author',
    accessor: "author",
  }, {
    Header: 'Title',
    accessor: "title",
  }, {
    Header: 'Publisher',
    accessor: "publisher",
  }]

    return(
      <div className="favorites-table-div">
      <ReactTable
        className="favorites-table"
        data={[{},{},{},{}]}
        columns={columns}
        pageSizeOptions = {[5, 10, 20]}
        defaultPageSize= {5}
        />
      </div>
    );
  }
}

export default ReadingList
