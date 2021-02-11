import React, { Component } from 'react'
import './App.css'
export default class Dropdown extends Component {
    render() {
        
        return (

            <div className="dropdown">

                   <select value={this.props.currentValue}
                     onChange={this.props.handleChange}>
                {
                    this.props.options.map(listItem => {
                       return  <option value={listItem} key={listItem}>{listItem}</option>
                    })
                }
                    </select>

            </div>
        )
    }
}
           
         