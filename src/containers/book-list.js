import React, {Component} from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators} from 'redux';

import selectBook from '../actions/index'

class BookList extends Component {

    renderList() {
        return this.props.books.map((book)=>{
            return( 
                <li 
                key={book.title}
                onClick={()=>this.props.selectBook(book)}
                className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return(
        <ul className="list-group col-sm-4 ">
            {this.renderList()}
        </ul>
        )
    } 
}

function mapStateToProps(state) {
    return {
        //Whatever is returned from this function will end up as props
        // inside of BookList
        books: state.books
    }
}

//Anything return from this function will ened up as props
// on the BookList Container
function mapDispatchToProps(dispatch){
    //Whenever SelectBook is called, the result should be passed
    //to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to Container - it need to know
//about this new dispatch method, SelectBook. Make it availbale as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);