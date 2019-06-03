import React, { Component } from 'react';
import '../styles/card.scss';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router';

class Card extends Component {
	
	showDescription = () => {
    this.props.history.push(`/movies/${this.props.id}`);
  }
	
	render() {
		return (
			<div className="card" onClick={ this.showDescription }>
				<div>
					<img src={`/assets/img/posters/${this.props.title}.jpg`} alt={ this.props.title }/>
				</div>
				<div>
					<h3>{ this.props.title }</h3>
					<br/>
					<hr/>
					<br/>
					<p><strong>Director</strong> { this.props.director }</p>
					<p><strong>Producer</strong> { this.props.producer }</p>
				</div>
			</div>
		);
	}
};

export default withRouter(Card);

Card.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string,
	img: PropTypes.string,
	director: PropTypes.string,
	producer: PropTypes.string,
}
