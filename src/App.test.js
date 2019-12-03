import React from "react"
import { shallow, mount } from "enzyme"

import App from "./App"
import ReadingList from "./Favorites/Reading"
import SearchList from "./Lists/searchList"
import SearchBar from "./Search/SearchBar"


describe("Main App Component", () => {

  it ("It should render Search Bar", () => {
  const component = shallow(<App />)
  const wrapper = component.find(".SearchBar")
  expect(wrapper.length).toBe(1)

  })

  it ("It should render Search List", () => {
    const component = shallow(<App />)
    component.setState({favorites:false})
    const wrapper = component.find(".SearchList")
    expect(wrapper.length).toBe(1)
  })

  it ("It should render Favorites List", () =>{
    const component = mount(<App />)
    component.setState({favorites:true})
    const wrapper = component.find(".favoritesList")
    expect(wrapper.length).toBe(1)
  })

})
