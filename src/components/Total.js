import React, { Component } from 'react'

class Total extends Component {
    /*
    this.props = {
        items: Array
    }

    */

    render() {
        const {items} = this.props
        return (
            <div>
                <h1>Total</h1>
                {
                   items.map((singleItem) => {
                        return (<div>
                            {singleItem.title} {singleItem.price} {singleItem.quantity} = {singleItem.price * singleItem.quantity}
                            
                        </div>)
                    })
                }
            </div>
        )
    }
}

export default Total
