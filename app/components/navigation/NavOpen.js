import React, { Component } from 'react';
import { Link } from 'react-router';
import { Resizable, ResizableBox } from 'react-resizable';
import { Methods } from '../../methods.js';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';

export default class NavOpen extends Component {
	compareToActive(type) {
		const { activePage } = this.props;
		let className = "navi-item navi-icon";
		if (type === activePage) {
			className += " active";
		}
		return className;
	}
	render() {
		let linkClasses = {
			home: this.compareToActive("/"),
			documentation: this.compareToActive("/documentation")
		};
		return (
			<div>
				<p className="navi-item navi-icon" onClick={this.props.onClick}>
					<span>contents</span>
				</p>
		    <Link onClick={() => { this.props.changePage('/') }} className={ linkClasses.home } id="home" to='/'>
					<span>home</span>
				</Link>
		    <Link onClick={() => { this.props.changePage('/documentation') }} className={ linkClasses.documentation } id="documentation" to='/documentation'>
					<span>documentation</span>
		    </Link>
		  </div>
		);
	}
}

React.propTypes = {
	onClick: React.PropTypes.func,
	activePage: React.PropTypes.string,
	changePage: React.PropTypes.func,
}