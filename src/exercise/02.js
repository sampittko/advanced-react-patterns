import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    // if (typeof child.type === 'string') {
    //   return child
    // }
    if (allowedTypes.includes(child.type)) {
      const clonedChild = React.cloneElement(child, {on, toggle})
      return clonedChild
    }
    return child
  })
}

const ToggleOn = ({on, children}) => on && children

const ToggleOff = ({on, children}) => !on && children

const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

const allowedTypes = [ToggleOff, ToggleOn, ToggleButton]

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
