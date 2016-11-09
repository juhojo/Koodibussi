import React, { Component } from 'react';
import faker from 'faker';
import { Nav } from './navigation/Nav.js';
import Loader from './Loader.js';
import TableItem from './TableItem.js';

export class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: props.location.pathname,
			loading: true,
			percentage: 0,
			tbody: <tbody></tbody>,
			tableHeight: 0,
		};
		this.loadingStarted = false;
		this.percentage = 0;
		this.itemCount = 1000;

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
				this.updateProgressBar(Math.floor(i / this.itemCount * 100));
				if (i < this.itemCount) this.populate();
				else { this.setState({ tbody: <tbody>{ contents }</tbody> }); }
			}, 0);
		}
	};

	componentDidMount() {
		this.populate.call(this);
	}

	changePage(activePage) {
		this.setState({ activePage });
	}

	updateProgressBar(percentage) {
		this.percentage = percentage;
	  this.setState({ percentage });
	}

	setTableHeight(tableHeight) {
		this.setState({ tableHeight });
	}

	componentDidUpdate() {
		if (this.percentage === 100 && this.state.loading) {
			this.setState({ loading: false });
		}
	}

	render() {
		const { activePage, loading, percentage, tbody, tableHeight } = this.state;
		return (
			<div className="container">
			  <Nav activePage={activePage} changePage={ this.changePage.bind(this) } />
			  <div className="content">
					{
						React.cloneElement(this.props.children, { 
							tbody: tbody,
							tableHeight: tableHeight,
							setTableHeight: this.setTableHeight.bind(this),
						})
					}
			  </div>
	      { loading && <Loader percentage={ percentage } /> }
			</div>
		);
	}
}