import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BookDetail extends Component{


    render(){
        if(!this.props.activeBook){
            return <div>Please Select A Book.</div>
        }

        return (
            <div>
                <div>
                    Title: {this.props.activeBook.title}
                </div>
                <div>
                    Pages: {this.props.activeBook.pages}
                </div>
            </div>

        );
    }
}


function mapStateToProps(state){
    return {
        activeBook : state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);