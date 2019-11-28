import React, { Component } from "react";
import ReactTable from "react-table";

import 'react-table/react-table.css';
import './css/Reading.css';

class ReadingList extends Component {
  constructor(props){
    super(props)
  }

  TableBody(){
    let counter = -1
      return this.props.readingList.map((item)=>{
        counter = counter+1
        return(item[counter])
      })}

  render(){
    console.log(this.TableBody())
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
        data={this.TableBody()}
        columns={columns}
        pageSizeOptions = {[5, 10, 20]}
        defaultPageSize= {5}
        />
      </div>
    );
  }
}

export default ReadingList
