import React, { Component } from 'react';
import '../styles/card.scss';
import PropTypes from 'prop-types';

export default class Card extends Component {

    showDescription(){
      //usar react router
    }

    render() {
			return (
				<div className="card" onClick={this.showDescription}>
					<h4>{ this.props.title }</h4>
					<hr/>
					<p>{ this.props.description }</p>
				</div>
			)
    }
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}
