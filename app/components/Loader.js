import React, { Component } from 'react';

export default class Loader extends Component {
	constructor() {
		super();
		this.three = require('./Box.js');
	}

	componentWillUnmount() {
		this.three = null;
	}

	render() {
		console.log(this.props.loading);
		return null;
	}
}

React.propTypes = {
	loading: React.PropTypes.bool,
}