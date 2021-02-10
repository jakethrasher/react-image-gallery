import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
          <li className="image-item">
              <img src={this.props.src} alt={this.props.description}/>
          </li>
        )
    }
}
