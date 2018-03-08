import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/action_book_select';

class BookList extends Component{
    books(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
    
    render(){
        return (
            <ul className="list-group col-sm-4">
                { this.books() }
            </ul>
        )
    }
}

//This function maps the State to the props of the container
//E.x this.props.books 
function mapStateToProps(state){
    return {
        books : state.books
    }
}

//this function maps Dispatch Event to props
//E.X this.props.selectBook is a dispatch event triggering the selectBook Action 
//and dispatching it to all reducers
function mapDispatchToProps(dispatch){
    //bindActionCreators binds the actions and dispatches to all the reducers
    //E.X 
    return bindActionCreators( { selectBook : selectBook }, dispatch  );
}

//Creates a container with (state Mapping to Props) and (Dispatch Actions Mapping to Props) and (a component)
export default connect(mapStateToProps,mapDispatchToProps)(BookList);