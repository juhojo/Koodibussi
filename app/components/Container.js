import React, { Component } from 'react';
import { Nav } from './navigation/Nav.js';
import Loader from './Loader.js';

export class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: props.location.pathname,
			loading: true,
			percentage: 0,
		};
		this.loadingStarted = false;
		this.percentage = 0;
	};

	changePage(activePage) {
		this.setState({ activePage });
	}

	updateProgressBar(percentage) {
		this.percentage = percentage;
	  this.setState({ percentage });
	}

	componentDidUpdate() {
		if (this.percentage === 100 && this.state.loading) {
			this.setState({ loading: false });
		}
	}

	render() {
		const { activePage, loading, percentage } = this.state;
		return (
			<div className="container">
			  <Nav activePage={activePage} changePage={ this.changePage.bind(this) } />
			  <div className="content">
					{
						React.cloneElement(this.props.children, { 
							updateProgressBar: this.updateProgressBar.bind(this),
							itemCount: 1000,
						})
					}
			  </div>
	      { loading && <Loader percentage={ percentage } /> }
			</div>
		);
	}
}