import React, { Component } from 'react'
import images from './data.js'
import ImageItem from './ImageItem.js'
import Header from './Header/Header.js'
import './App.css'
import ImageList from './ImageList.js'




export default class App extends Component {
  render() {

    // const hornedCreatures = images.map((image)=>(
    //   <ImageItem src={image.url}/>
    // ))

    return (

      <div>
        <Header/>
        <div className="image-container">

        <ImageList images={ images } />

        </div>
      </div>
    )
  }
}

          
