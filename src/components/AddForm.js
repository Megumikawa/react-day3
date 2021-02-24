import React, { Component } from 'react'

class AddForm extends Component {
    render() {
        return (
            <form>
                <input name="title" type="text" placeholder="Enter title" />
                <input name="price" type="number" />
                <button type="submit" >Add Item</button>
            </form>
        )
    }
}

export default AddForm
