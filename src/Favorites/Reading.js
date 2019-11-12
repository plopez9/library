import React, { Component } from "react";
import ReactTable from "react-table";

import 'react-table/react-table.css';

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
      <div style={{
        height:"99%",
        width:"99%",
        display:"flex",

      }}>
      <ReactTable
        data={[{},{},{},{}]}
        columns={columns}
        style={{width:"100%"}}
        pageSizeOptions = {[5, 10, 20]}
        defaultPageSize= {5}
        />
      </div>
    );
  }
}

export default ReadingList
