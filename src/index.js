import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const YOUTUBE_API_KEY = "AIzaSyBfBnV46vv9_mjPHWkICL4q8zcEjEYS5Z8";

//Create a components(set of HTML tags) that can be rendered inside DOM
const App = function(){
    return <div>Hi!!!!!!</div>
}

// const App = () => <div>Hi!!!!!!</div>;  // equals above code

//Tell React to display the component that are developed and place it onto the DOM
ReactDOM.render(<App />,document.querySelector(".container"));