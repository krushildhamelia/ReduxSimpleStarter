import React, { Component } from 'react';

import { numbers } from './numbers';
// const SearchBar = () => <input />; functional component //No State

//class component // With State
class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = { term : ""};
      
    }

    render(){
        return <input 
        value={this.state.term}
        onKeyPress={this.onInputKeyPress} onClick={(event) => console.log(event.target.value)} 
        />
    }

    onInputKeyPress(event){
        console.log(event.key,this,state);
        if(event.key in numbers){
            this.setState({term : (this.state.term + event.key) })
        }
        
    }
}


export default SearchBar;