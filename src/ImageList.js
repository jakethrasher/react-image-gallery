import React, { Component } from 'react'
import ImageItem from './ImageItem'

export default class ImageList extends Component {
    render() {

        const arr = this.props.images;

        return (
            <ul>

            { arr.map((image)=>(
            <ImageItem src={image.url}/>))}

            </ul>
        )
    }
}
       
