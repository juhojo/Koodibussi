import React, { Component } from 'react';

export class NotFound extends Component {

	render() {
		return (
			<h1>404.. This page does not exists!</h1>
		);
	}
}

React.propTypes = {
	componentLoaded: React.PropTypes.func,
}