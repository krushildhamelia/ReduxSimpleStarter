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
        return <div className="search-bar">
        <input 
        placeholder="Search Youtube"
        value={this.state.term}
        onChange={ (event) => this.onInputChange(event.target.value) }
        onClick={(event) => console.log(event.target.value)} 
        /></div>
    }

    //Allow only numbers in search box
    // onInputChange(term){
    //     if(term[term.length-1] in numbers){
    //         this.setState({term});
    //         this.props.onSearch(term);    
    //     }else if(!term){
    //         this.setState({term : ""});
    //         this.props.onSearch(term); 
    //     }
    // }

    onInputChange(term){
            this.setState({term});
            this.props.onSearch(term);    
    }

}


export default SearchBar;