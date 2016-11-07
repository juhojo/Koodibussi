import React, { Component } from 'react';

export class Contact extends Component {
	
	render() {
		return (
			<h1>Hello from Contact!</h1>
		);
	}
}

React.propTypes = {
	componentLoaded: React.PropTypes.func,
}