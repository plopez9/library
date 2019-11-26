import React, { Component } from "react";

import './css/SearchTable.css';

class TempTable extends Component {
  constructor(props){
    super(props)
  }

  state = {
    id:[]
  }

  search_push(input){
    this.setState({
      id: false
    })
  }

  render(){


    return(
      <div className="list-table-div" style={{display:"flex", alignItems:"center", justifyContent:"center", overflow:"auto"}}>
        <table style={{height:"98%", width:"98%", overflow:"auto", textAlign:"center"}}>
          <tbody>

          <tr className="List-Header" style={{width:"100%", height:"16.6%"}}>
            <th> Author </th>
            <th> Title</th>
            <th> Publisher </th>
            <th> Add </th>
          </tr>

          <tr key={0} style={{background: "rgb(245,245,245)"}}>
            <td>
             {this.props.data.items[0].volumeInfo.authors}
            </td>
            <td>
              {this.props.data.items[0].volumeInfo.title}
            </td>
            <td style={{width:"25%"}}>
            {this.props.data.items[0].volumeInfo.publisher}
            </td>
            <td style={{width:"15%"}}> <button className="add-button"> add </button></td>
          </tr>

          <tr key={1}>
            <td>
             {this.props.data.items[1].volumeInfo.authors}
            </td>
            <td>
              {this.props.data.items[1].volumeInfo.title}
            </td>
            <td style={{width:"25%"}}>
              {this.props.data.items[1].volumeInfo.publisher}
            </td>
            <td style={{width:"15%"}}> <button className="add-button"> add </button></td>
          </tr>

          <tr key={2}  style={{background: "rgb(245,245,245)"}}>
            <td>
             {this.props.data.items[2].volumeInfo.authors}
            </td>
            <td>
              {this.props.data.items[2].volumeInfo.title}
            </td>
            <td style={{width:"25%"}}>
              {this.props.data.items[2].volumeInfo.publisher}
            </td>
            <td style={{width:"15%"}}> <button className="add-button"> add </button></td>
          </tr>

          <tr key={3}>
            <td>
             {this.props.data.items[3].volumeInfo.authors}
            </td>
            <td>
              {this.props.data.items[3].volumeInfo.title}
            </td>
            <td style={{width:"25%"}}>
              {this.props.data.items[3].volumeInfo.publisher}
            </td>
            <td style={{width:"15%"}}> <button className="add-button"> add </button></td>
          </tr>

          <tr key={4}  style={{background: "rgb(245,245,245)"}}>
            <td>
             {this.props.data.items[4].volumeInfo.authors}
            </td>
            <td>
              {this.props.data.items[4].volumeInfo.title}
            </td>
            <td style={{width:"25%"}}>
              {this.props.data.items[4].volumeInfo.publisher}
            </td>
            <td style={{width:"15%"}}> <button className="add-button"> add </button></td>
          </tr>
          </tbody>

        </table>
      </div>
    );
  }
}

export default TempTable
