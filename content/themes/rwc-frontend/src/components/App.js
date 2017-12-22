import './style.css';

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ApplicantList from './Applicant/ApplicantList';
import ApplicantNew from './Applicant/ApplicantNew';
import ApplicantEdit from './Applicant/ApplicantEdit';

class App extends Component {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={ApplicantList} />
						<Route exact path="/new" component={ApplicantNew} />
						<Route exact path="/edit/:id" component={ApplicantEdit} />
						<Route component={ApplicantList} /> 
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
