import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyAFr4834h7QFUCwScY7HVxhBHCrYZIEfrk';



const App = ()=>{
	return (
		<div>
			<SearchBar />
		</div>);
}

ReactDOM.render(<App />, document.querySelector('.container') );