import React from "react"
import { shallow } from "enzyme"
import SearchBar from "./SearchBar"

describe("SearchBar Component", () => {

  it ("It should render Search Button", ()=>{
  const component = shallow(<SearchBar />)
  const wrapper = component.find(".Search-button")
  expect(wrapper.length).toBe(1)
  })

  it ("It should render Book Search", ()=>{
  const component = shallow(<SearchBar />)
  const wrapper = component.find(".BookSearch")
  expect(wrapper.length).toBe(1)
  })

  it ("It should render Favorites Button", ()=>{
  const component = shallow(<SearchBar />)
  const wrapper = component.find(".Favorites-button")
  expect(wrapper.length).toBe(1)
  })

})
