import React, { Component } from 'react'
import images from './data.js'
import Header from './Header/Header.js'
import './App.css'
import ImageList from './ImageList.js'
import Dropdown from './Dropdown.js'




export default class App extends Component {
  state = {
    keyWord:'',
    horns:'',
  }
  handleCreatureSelect =(e)=>{
    this.setState({
      keyWord:e.target.value
    })
  }
  handleHornsSelect =(e)=>{
    this.setState({
      horns:Number(e.target.value)
    })
  }
  render() {
    
  const filteredImages = images.filter( (image) => {
    if(!this.state.keyWord && !this.state.horns)return true;

    if (this.state.keyWord && !this.state.horns) {
      if (image.keyword === this.state.keyWord) return true;
    }
      
    if (this.state.horns && !this.state.keyWord) {
      if (image.horns === this.state.horns) return true;
    }

    if(this.state.keyWord === image.keyword && this.state.horns === image.horns){
      return true;
    } 
    return false
  })
  
    return (

      <div className="main-container">

        <Header/>

        <p className="select-prompt">Select A Creature</p>

        <Dropdown  handleChange={this.handleCreatureSelect} currentValue={this.state.keyWord} options={['unicorn', 'rhino','narwhal', 'markhor', 'unilego','triceratops','chameleon','lizard', 'dragon','mouflon']}/>

        <p className="select-prompt">Select Number of Horns</p>

        <Dropdown  handleChange={this.handleHornsSelect} currentValue={this.state.horns} options={[1,2,3,100]} />

        <div className="image-container">
        <ImageList images={ filteredImages } />
        </div>

      </div>
    )
  }
}
