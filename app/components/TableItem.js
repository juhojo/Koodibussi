import React, { Component } from 'react';

export default class TableItem extends Component {

	render() {
		const { firstname, lastname } = this.props;
		return (
			<tr>
				<td>{ firstname }</td>
				<td>{ lastname }</td>
			</tr>
		);
	}
}

React.propTypes = {
	firstname: React.PropTypes.string,
	lastname: React.PropTypes.string,
}