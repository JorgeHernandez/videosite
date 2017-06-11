import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAFr4834h7QFUCwScY7HVxhBHCrYZIEfrk';



class App extends Component{
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'cats'}, (data)=>{
			this.setState({videos: data});//could be {videos} in ES6 if data is renamed as videos
			console.log(data);
		});

	}

	render(){
		console.log('QQQQQQQQQQQQQ '+this.state.videos[0]);
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container') );