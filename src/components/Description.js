import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { getMovieById } from '../actions/data';

import '../styles/description.scss';

class Description extends Component {

  constructor(props){
    super(props);
    this.state = {
      movie: {},
    }
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params['id']}`)
        .then(res => res.json())
        .then((data) => {
          this.setState({
            movie: data,
          });
        });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="container">
        
        <div className="desc-content">

          <div className="main-description">
            <div className="video">
              <video autoPlay controls src={`/assets/video/${this.state.movie.title}.mp4`}></video>
            </div>
            <p className="description">{ this.state.movie.description }</p>

            <div className="rt-score">
              <span>{ this.state.movie.rt_score }</span>
            </div>
            
            
            <footer>
              <div>
                <small>Director</small>
                <h5>{ this.state.movie.director }</h5>
              </div>
              <div>
                <small>Producer</small>
                <h5>{ this.state.movie.producer }</h5>
              </div>
            </footer>
            
          </div>

          <div className="main-title">
            <small className="release-date">{ this.state.movie.release_date }</small>
            <h1 className="title">{ this.state.movie.title }</h1>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(null, {getMovieById})(withRouter(Description));

Description.propTypes = {
  getMovieById: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  staticContext: PropTypes.object,
}
