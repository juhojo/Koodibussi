import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Scrollbars } from 'react-custom-scrollbars';

export class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.setTableHeight(ReactDOM.findDOMNode(this.refs.table).height);
	};

	render() {
		const { tbody, tableHeight } = this.props;
		return (
			<div>
				<h1 className="bump-text">Koodibussi</h1>
				<Scrollbars
					className="table-contents"
       		renderTrackHorizontal={() => <div style={{ display: "none" }} />}
        	renderTrackVertical={props => <div {...props} className="track-vertical"/>}
					style={{ height: tableHeight }}>
					<table ref="table">
						<thead>
							<tr>
								<th>firstname</th>
								<th>lastname</th>
								<th>address</th>
							</tr>
						</thead>
						{ tbody }
					</table>
				</Scrollbars>
			</div>
		);
	}
}

React.propTypes = {
	tbody: React.PropTypes.node,
	tableHeight: React.PropTypes.number,
	setTableHeight: React.PropTypes.func,
}