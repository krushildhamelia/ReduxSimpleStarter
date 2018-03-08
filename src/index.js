import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import YTSearch from 'youtube-api-search';

import { numbers } from './components/search_bar';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
import AppRedux from './components/app';
import reducers from './reducers/reducer_index';

import YOUTUBE_API_KEY from './config/Youtube_API';


const createStoreWithMiddleware = applyMiddleware()(createStore);
//Create a components(set of HTML tags) that can be rendered inside DOM
class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { videos : [], selectedVideo : null };

        this.onSearch("Selena Gomez");
            //ES5 this.setState({ videos : videos });
    }
    render (){
        const onSearch = _.debounce((term) => this.onSearch(term),300);

        return (    //if ( ) this brackets are not used than the <div> element must be next to return ;
        <div>
            <SearchBar onSearch={ onSearch } />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList videos={this.state.videos} onVideoSelect={ (selectedVideo) => this.setState({selectedVideo})} />

            <Provider store={createStoreWithMiddleware(reducers)} >
                <AppRedux />
            </Provider>
        </div>
        );
    }

    onSearch(term){
            YTSearch({key : YOUTUBE_API_KEY, term }, (videos) => {
                this.setState( { 
                    videos , //used when key and variable name are meant to same in ES6
                    selectedVideo : videos ? videos[0] : null
                } 
            );
        });
    }
        
    
}

// const App = () => <div>Hi!!!!!!</div>;  // equals above code

//Tell React to display the component that are developed and place it onto the DOM
ReactDOM.render(<App />,document.querySelector(".container"));