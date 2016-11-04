import React, { Component } from 'react';

export class Home extends Component {

	componentDidMount() {
		this.props.loadingFinished();
	}

	render() {
		return (
			<div>
				<h1 className="bump-text">Koodibussi</h1>
			</div>
		);
	}
}

React.propTypes = {
	loadingFinished: React.PropTypes.func,
}