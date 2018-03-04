import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import { numbers } from './components/search_bar';
import SearchBar from './components/search_bar';

import YOUTUBE_API_KEY from './config/Youtube_API';

//Create a components(set of HTML tags) that can be rendered inside DOM
class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { videos : [] };
       
        YTSearch({key : YOUTUBE_API_KEY, term : "selena gomez"}, (videos) => {
            this.setState( { videos } );
            //ES5 this.setState({ videos : videos });
        })
    }
    render (){
        return (    //if ( ) this brackets are not used than the <div> element must be next to return ;
        <div>
            <SearchBar />
        </div>
        );
    }
        
    
}

// const App = () => <div>Hi!!!!!!</div>;  // equals above code

//Tell React to display the component that are developed and place it onto the DOM
ReactDOM.render(<App />,document.querySelector(".container"));