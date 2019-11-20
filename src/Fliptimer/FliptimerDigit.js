import React, { PureComponent } from 'react'

export default class FliptimerDigit extends PureComponent {
  digits = Array(10)
    .fill(0)
    .map((val, i) => i)

  render () {
    const { value, max = 9 } = this.props

    return (
      <div className="fliptimer-digit">
        {this.digits
          .filter(val => val <= max)
          .map(val => {
            const classNames = ['fliptimer-digit-item']
            if (val === value) {
              classNames.push('fliptimer-digit-item-active')
            } else if (value !== 0 && val + 1 === value) {
              classNames.push('fliptimer-digit-item-previous')
            } else if (value === 0 && val === max) {
              classNames.push('fliptimer-digit-item-previous')
            }
            return (
              <div key={val} className={classNames.join(' ')}>
                <div className="fliptimer-digit-item-top">{val}</div>
                <div className="fliptimer-digit-item-bottom">
                  <span className="fliptimer-digit-item-bottom-val">{val}</span>
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}
