import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        const{
            src,
            description,
        } = this.props
        return (
          <li className="image-item">
              <img src={src} alt={description}/>
          </li>
        )
    }
}
