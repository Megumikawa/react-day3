import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'

class ItemDetail extends Component {
    /*

    this.props = {
        onItemAdd: function, 
        book: {
            title: '',
            price: 12
        }
    }
    */

   state = {
       quantity: 1
   } 

   handleQuantity = (event) => {
        this.setState({
            quantity: event.target.value
        })
   }

    render() {
        const {book,onItemAdd} = this.props
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.price}
                        <input onChange={this.handleQuantity} type="number" />
                    </Card.Text>
                    <Button onClick={() => { onItemAdd(book, this.state.quantity ) } } variant="primary">Add</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ItemDetail
