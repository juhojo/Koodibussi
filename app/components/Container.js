import React, { Component } from 'react';
import { Nav } from './navigation/Nav.js';
import Loader from './Loader.js';

export class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: props.location.pathname,
			loading: true,
		};
	};

	changePage(activePage) {
		this.setState({ activePage });
	}

	loadingFinished() {
		this.setState({ loading: false });
	}

	render() {
		const { activePage, loading } = this.state;
		return (
			<div className="container">
			  <Nav activePage={activePage} changePage={ this.changePage.bind(this) } />
			  <div className="content">
					{ React.cloneElement(this.props.children, { loadingFinished: this.loadingFinished.bind(this) }) }
			  </div>
	      { loading && <Loader loading={loading} /> }
			</div>
		);
	}
}