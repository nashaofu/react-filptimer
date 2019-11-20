import React, { PureComponent } from 'react'
import FliptimerDigit from './FliptimerDigit'
import './fliptimer.less'

export default class Fliptimer extends PureComponent {
  state = {
    date: new Date()
  }

  componentDidMount () {
    this.update()
  }

  update = () => {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.setState(
        {
          date: new Date()
        },
        () => this.update()
      )
    }, 1000)
  }

  render () {
    const { date } = this.state
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return (
      <div className="fliptimer">
        <div className="fliptimer-hours">
          <FliptimerDigit value={Math.floor(hours / 10)} max={2} />
          <FliptimerDigit
            value={hours % 10}
            max={Math.floor(hours / 10) === 2 ? 3 : 9}
          />
        </div>
        <div className="fliptimer-seperator" />
        <div className="fliptimer-minutes">
          <FliptimerDigit value={Math.floor(minutes / 10)} max={5} />
          <FliptimerDigit value={minutes % 10} max={9} />
        </div>
        <div className="fliptimer-seperator" />
        <div className="fliptimer-seconds">
          <FliptimerDigit value={Math.floor(seconds / 10)} max={5} />
          <FliptimerDigit value={seconds % 10} max={9} />
        </div>
      </div>
    )
  }
}
