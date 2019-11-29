import React, { Component } from "react";

import './css/SearchTable.css';

import owl from "../images/Owl.png";

class SearchTable extends Component {
  constructor(props){
    super(props)
  }

  state = {
    id:""
  }

  update(input){
    const {id} = this.state.id
    const favorite = input

    this.setState({
      id: favorite
    }, () =>{
      this.props.readingList(this.state.id)
    })
  }

  TableBody(){
    if (this.props.data.items !== undefined){
      return this.props.data.items.slice(0,5).map((items, index) => {

        return(
          <tr key={this.props.data.items[index].id} style={{background: "rgb(245,245,245)"}}>
            <td style={{width:"30%"}}>
             {this.props.data.items[index].volumeInfo.authors}
            </td>
            <td style={{width:"30%"}}>
              {this.props.data.items[index].volumeInfo.title}
            </td>
            <td style={{width:"25%"}}>
            {this.props.data.items[index].volumeInfo.publisher}
            </td>
            <td style={{width:"15%"}}>
            <button className="add-button" onClick={() =>{
              this.update(
                {id:this.props.data.items[index].id,
                author:this.props.data.items[index].volumeInfo.authors,
                title:this.props.data.items[index].volumeInfo.title,
                publisher:this.props.data.items[index].volumeInfo.publisher},
              )
            }}>

            add</button></td>
          </tr>
        )
      })
    }
    }

  contents(){
    if (this.props.data.items !== undefined){
      return (
      <table style={{height:"98%", width:"98%", overflow:"auto", textAlign:"center"}}>
        <tbody>

        <tr className="List-Header" style={{width:"100%", height:"16.6%"}}>
          <th> Author </th>
          <th> Title</th>
          <th> Publisher </th>
          <th> Add </th>
        </tr>

        {this.TableBody()}

        </tbody>

    </table>)
    } else{
      return(
        <div className="owl-table">
            <img className="owl" src={owl}/>
          <h1 style={{textAlign:"center", color:"rgb(97, 97, 97 )" }}> No Listings Found </h1>
        </div>
      )
    }
  }

  render(){

    console.log(this.props.readingList.id)

    return(
      <div className="list-table-div">
        {this.contents()}
      </div>
    );
  }
}

export default SearchTable
