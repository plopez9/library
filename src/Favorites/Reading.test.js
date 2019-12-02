import React from "react"
import { shallow } from "enzyme"
import ReadingList from "./Reading"

describe("ReadingList Component", () => {

  it ("It should render React Table", ()=>{
  const component = shallow(<ReadingList />)
  const wrapper = component.find(".favorites-table")
  expect(wrapper.length).toBe(1)
  })

})
