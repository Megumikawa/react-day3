import React, { Component } from 'react'

class Search extends Component {

    /*

        this.props = {
            myChange: function
        }

    */

    render() {
        return (
            <div>
               <input onChange={this.props.myChange} type="text" placeholder="Search book name"/> 
            </div>
        )
    }
}

export default Search
