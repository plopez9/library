import React from "react"
import { shallow } from "enzyme"

import SearchList from "./searchList"

describe("Search List Conditional Render", () => {

  describe("Empty Owl", () => {

    it ("Should Return Owl Image", () => {
      const component = shallow(<SearchList />)
      const wrapper = component.find(".owl")
      expect(wrapper.length).toBe(1)
    })

  })

  describe("Search Table", () => {

    let wrapper

    const beforeTest = ()=> {
      const props = {
        searchTerm:"jake"
      }

      const favorites = (setProps={}) =>{
        const component = shallow(<SearchList {...props}/>)
        const wrapper = component.find(".SearchSwitch")
        return wrapper
      }

      expect(favorites().length).toBe(1)
    }

    it ("Should Return Search Table", () => {
      beforeTest()
    })

  })

})
