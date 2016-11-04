import React, { Component } from 'react';
import { Methods } from '../../methods.js';
import FontAwesome from 'react-fontawesome';

import NavOpen from './NavOpen.js';
import NavClosed from './NavClosed.js';

export class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 70,
			navBarOpen: false,
		};
	};

	expandNavBar() {
		const { navBarOpen } = this.state;
		if (navBarOpen) this.setState({ width: 70 });
		else this.setState({ width: 300 });
		this.setState({ navBarOpen: !navBarOpen });
	};

	render() {
		const { width, navBarOpen } = this.state;
		const { activePage, changePage } = this.props;
		const props = { activePage, changePage };
		const height = Methods.viewportToPixels('100vh');
		return (
			<div className="nav-container" style={{width: width + 'px'}}>
			  <div className="navi-item-container">
			  	{ navBarOpen ? 
			  		<NavOpen onClick={this.expandNavBar.bind(this)} {...props} />
				    :
				    <NavClosed onClick={this.expandNavBar.bind(this)} {...props} />
			  	}
		    </div>
		  </div>
		);
	}
}

React.propTypes = {
	activePage: React.PropTypes.string,
	changePage: React.PropTypes.func,
}