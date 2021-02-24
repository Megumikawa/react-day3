import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'

class ItemDetail extends Component {
    /*

    this.props = {
        book: {
            title: '',
            price: 12
        }
    }

    */

    render() {
        const {book} = this.props
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.price}
                    </Card.Text>
                    <Button variant="primary">Add</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ItemDetail
