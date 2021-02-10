import React, { Component } from 'react'
import images from './data.js'
import Header from './Header/Header.js'
import './App.css'
import ImageList from './ImageList.js'




export default class App extends Component {
  state = {
    keyWord:'',
  }
  handleCreatureSelect =(e)=>{
    this.setState({
      keyWord:e.target.value
    })
  }
  render() {
    
  // console.log(this.state.keyWord)
  const filteredImages = images.filter( (image) => {
    if(image.keyword === this.state.keyWord){
      return image;
    }else if(this.state.keyWord === ''){
      return images;
    }
  })
  
    return (

      <div className="main-container">

        <Header/>


        <form>
          <p className="select-prompt">Select A Creature</p>

          <select value={this.state.keyWord}
          onChange={this.handleCreatureSelect}>

            <option value=''>select one</option>
            <option value="narwhal">Narwhal</option>
            <option value="rhino">Rhino</option>
            <option value="unicorn">Unicorn</option>
            <option value="unilego">UniLego</option>
            <option value="markhor">Markhor</option>
            <option value="mouflon">Mouflon</option>
            <option value="chameleon">Chameleon</option>
            <option value="lizard">Lizard</option>
            <option value="dragon">Dragon</option>
            <option value="triceratops">Triceratops</option>
          </select>
        </form>
        <div className="image-container">
        
        <ImageList images={ filteredImages } />

        </div>
      </div>
    )
  }
}
