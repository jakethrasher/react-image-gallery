import React, { Component } from 'react'
import ImageItem from './ImageItem'

export default class ImageList extends Component {
    render() {

        const creaturesArray = this.props.images;

        return (
            <ul>

            { creaturesArray.map((image)=>(
            <ImageItem key={image.description} src={image.url}/>))}

            </ul>
        )
    }
}
       
