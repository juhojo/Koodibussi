import React, { Component } from 'react';

export default class TableItem extends Component {

	render() {
		const { firstname, lastname, address } = this.props;
		return (
			<tr>
				<td>{ firstname }</td>
				<td>{ lastname }</td>
				<td>{ address }</td>
			</tr>
		);
	}
}

React.propTypes = {
	firstname: React.PropTypes.string,
	lastname: React.PropTypes.string,
	address: React.PropTypes.string,
}