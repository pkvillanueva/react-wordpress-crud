import './style.css';

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Applicants from './Applicants';

class App extends Component {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<Route exact path="/" component={Applicants} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
