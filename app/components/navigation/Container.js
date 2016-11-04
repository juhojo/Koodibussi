import React, { Component } from 'react';
import { Nav } from './Nav.js';

export class Container extends Component {
	render() {
		return (
			<div>
			  <Nav />
				{this.props.children}
			</div>
		);
	}
}