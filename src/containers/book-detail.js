import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {


    render() {
        if(!this.props.book){
            return <div> Select a book to get started </div>
        }
        return(
            <div>
            <h1> Details are: </h1>
            <div> <b>Title: </b> {this.props.book.title} </div>
            <div> <b>Pages:</b> {this.props.book.pages} </div> 
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);