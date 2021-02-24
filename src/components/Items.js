import React, { Component } from 'react'
import axios from 'axios'
import {Spinner} from 'react-bootstrap'
import ItemDetail from './ItemDetail'
import Search from './Search'

class Items extends Component {

    state = {
        books: [],
        filteredBooks: [], //create a clone state for filter
    }
    
    // Lifecycle method called after the first render just ONCE 
    componentDidMount(){
       //always fecth data here
       axios.get('https://6035eac86496b9001749f90e.mockapi.io/items')
        .then((response) => {
              console.log('data fetched')
              // in axios the real response is always inside that data keyword

              //   Update the filteredBooks state as well with the data we get
              this.setState({
                books: response.data,
                filteredBooks: response.data,
              })  
        })
        .catch(() => {
            console.log('err')
        })
    }


    handleChange = (event) => { 
        // remember that these are event listener callbacks. 
        // You will always get the event parameter in the callback defined in the onChange listener
        console.log(event.target.value)
        let searchText = event.target.value.toLowerCase()

        // Grab all the original books from the state `books`
        let filteredList = this.state.books.filter((singleBook) => {
            return singleBook.title.toLowerCase().includes(searchText)
        })

        // Always update your state once your filter
        // only update the `filteredBooks` state here
        // because we dont want to loose all our original books updating the state `books`
        this.setState({
            filteredBooks: filteredList
        })
    }

    render() {
        //destructure the state
        const {books,filteredBooks} = this.state

        //------- CONDITIONALLY RENDERING SPINNERS ----------------
        // check if we have books in our state
        // dont use `filteredBooks` here becuase that will be empty depending on the search
        if (!books.length) {
            return  <Spinner animation="border" variant="danger" />
        }

        return (
            <div>
                <h1 >Lists</h1>
                <Search  myChange={this.handleChange}/>
                {
                    // we loop over the filtered books, not the original books
                    filteredBooks.map((singleBook, index) => {
                        return <ItemDetail key={index} 
                        book={singleBook} />
                    })
                }
            </div>
        )
    }
}

export default Items
