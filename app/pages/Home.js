import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import { Scrollbars } from 'react-custom-scrollbars';
import TableItem from '../components/TableItem.js';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { tbody: <tbody></tbody> };
		let i = 0;
		const contents = [];
		this.populate = () => {
			// Using setTimeout to populate the table without freezing the browser.
			// It allows us to do the populate asyncronously.
			setTimeout(() => {
				contents.push(
					<TableItem
						key={ i }
						firstname={ faker.Name.firstName() }
						lastname={ faker.Name.lastName() }
						address={ faker.Address.streetAddress() } />
				);
				i++;
				this.props.updateProgressBar(Math.floor(i / props.itemCount * 100));
				if (i < props.itemCount) this.populate();
				else { this.setState({ tbody: <tbody>{ contents }</tbody> }); }
			}, 0);
		}
		this.height = 0;
	}

	componentDidMount() {
		this.populate.call(this);
		this.height = ReactDOM.findDOMNode(this.refs.table).height;
	};

	render() {
		const { tbody } = this.state;
		return (
			<div>
				<h1 className="bump-text">Koodibussi</h1>
				<Scrollbars
					className="table-contents"
       		renderTrackHorizontal={() => <div style={{ display: "none" }} />}
        	renderTrackVertical={props => <div {...props} className="track-vertical"/>}
					style={{ height: this.height }}>
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
	componentLoaded: React.PropTypes.func,
	itemCount: React.PropTypes.number,
}