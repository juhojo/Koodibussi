import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import TableItem from '../components/TableItem.js';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { tbody: <tbody></tbody> };
		let i = 0;
		const contents = [];
		this.populate = () => {
			setTimeout(() => {
				contents.push(
					<TableItem
						key={ i }
						firstname={ faker.Name.firstName() }
						lastname={ faker.Name.lastName() } />
				);
				i++;
				this.props.updateProgressBar(Math.floor(i / props.itemCount * 100));
				if (i < props.itemCount) this.populate();
				else { this.setState({ tbody: <tbody>{ contents }</tbody> }); }
			}, 0);
		}
	}

	componentDidMount() { this.populate.call(this) };

	render() {
		const { tbody } = this.state;
		return (
			<div>
				<h1 className="bump-text">Koodibussi</h1>
				<div className="table-contents">
					<table>
						{ tbody }
					</table>
				</div>
			</div>
		);
	}
}

React.propTypes = {
	componentLoaded: React.PropTypes.func,
	itemCount: React.PropTypes.number,
}