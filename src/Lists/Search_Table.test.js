import React from "react"
import { shallow } from "enzyme"

import SearchTable from "./Search_Table"

describe("Conditional Search Table Component", () => {

  describe("No listings Owl", () => {

    let wrapper

    const beforeTest = ()=> {
      const props = {
        data:{kind:"books#volumes",
              totalIems:0}
      }

      const search = (setProps={}) =>{
        const component = shallow(<SearchTable {...props}/>)
        const wrapper = component.find(".owl-table")
        return wrapper
      }
      expect(search().length).toBe(1)
    }

    it ("It Should Render a No Listings Owl", () => {
      beforeTest()
    })
  })


  describe("It Should Return the Search Table Results", ()=>{
    let wrapper

    const beforeTest = ()=> {
      const props = {
        data:{items:[
          {id:123, volumeInfo:{authors:"John", title:"book", publisher:"dummy"}},
          {id:456, volumeInfo:{authors:"John", title:"book", publisher:"dummy"}},
          {id:789, volumeInfo:{authors:"John", title:"book", publisher:"dummy"}},
          {id:876, volumeInfo:{authors:"John", title:"book", publisher:"dummy"}},
          {id:543, volumeInfo:{authors:"John", title:"book", publisher:"dummy"}},
        ]},
        list: [],
      }

      const search = (setProps={}) =>{
        const component = shallow(<SearchTable {...props}/>)
        const wrapper = component.find(".List-Header")
        return wrapper
      }
      expect(search().length).toBe(1)
    }

    it ("It Should Render Search Listings", () => {
      beforeTest()
    })
  })

})
