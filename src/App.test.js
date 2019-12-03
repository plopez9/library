import React from "react"
import { shallow } from "enzyme"

import App from "./App"
import ReadingList from "./Favorites/Reading"
import SearchList from "./Lists/searchList"
import SearchBar from "./Search/SearchBar"


describe("Main App Component", () => {

  it ("It should render Search Bar", ()=>{
  const component = shallow(<App />)
  const wrapper = component.find(".SearchBar")
  expect(wrapper.length).toBe(1)

  })

})
