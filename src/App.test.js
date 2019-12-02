import React from "react"
import { shallow } from "enzyme"
import App from "./App"

describe("Main App Component", () => {

  it ("It should render React Table", ()=>{
  const component = shallow(<App />)
  const wrapper = component.find(".AppSearch")
  expect(wrapper.length).toBe(1)
  })

})
