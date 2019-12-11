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

  disableButton(item){
    const checkList = this.props.list

    return !!checkList.find((input)=>{
      return item.id === input.id
    })

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
    if (this.props.data !== undefined){
      return this.props.data.items.slice(0,5).map((item) => {

        return(

          <tr key={item.id} style={{background: "rgb(245,245,245)"}}>
            <td style={{width:"30%"}}>
             {item.volumeInfo.authors}
            </td>
            <td style={{width:"30%"}}>
              {item.volumeInfo.title}
            </td>
            <td style={{width:"25%"}}>
            {item.volumeInfo.publisher}
            </td>
            <td style={{width:"15%"}}>
            <button className="add-button" onClick={() =>{
              this.update(
                {id:item.id,
                author:item.volumeInfo.authors,
                title:item.volumeInfo.title,
                publisher:item.volumeInfo.publisher},
              )
            }}
              disabled = {this.disableButton(item)}>

            add</button></td>
          </tr>
        )
      })
    }
    }

  contents(){
    if (this.props.data.items !== undefined){
      return (
      <table className="Results-Table"
        style={{height:"98%", width:"98%", overflow:"auto", textAlign:"center"}}>
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

    return(
      <div className="list-table-div">
        {this.contents()}
      </div>
    );
  }
}

export default SearchTable
