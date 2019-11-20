import React, { PureComponent } from 'react'
import Fliptimer from './Fliptimer'

export default class App extends PureComponent {
  render () {
    return (
      <div>
        <Fliptimer />
        <Fliptimer />
        <Fliptimer />
      </div>
    )
  }
}
