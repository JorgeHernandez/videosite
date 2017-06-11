import React, { Component } from 'react';

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = { term: ''};
	}

	render() {
		//return <input onChange={this.onInputChange} />;
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={ (event)=>this.setState({term: event.target.value}) } 
				/>
				value of the input: {this.state.term}
			</div>
		);
	}

	onInputChange(event){
		//console.log(event.target.value);
		//this.setState({term: event.target.value});//error: this is undefined. moved to event handler
	}
}

export default SearchBar;