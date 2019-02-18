import React, { Component } from "react"

class ColorBox extends Component {
  render() {
    if (this.props.opacity >= 0.2) {
      const newOpacity = (this.props.opacity * 10 - 0.1 * 10) / 10
      console.log(newOpacity)
      return (
        <div className="color-box" style={{ opacity: this.props.opacity }}>
          <ColorBox opacity={newOpacity} />
        </div>
      )
    } else {
      return null
    }
  }
}

export default ColorBox
