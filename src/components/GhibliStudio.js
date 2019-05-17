import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import '../styles/index.scss';

import { connect } from 'react-redux';
import { getFilms } from '../actions/data';

import Nav from './nav'
import Card from './Card';

class GhibliStudio extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    this.getMovies();
    this.simpleAction();
  }

  getMovies() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(movies => {
        console.log(movies)
        this.setState({
          movies: movies,
        })
      });
  }

  getMovieById(id) {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then(res => res.json())
      .then(movies => {
        console.log(movies)
      });
  }

  simpleAction = () => {
    this.props.getFilms();
  }
  
  render() {
    return (
      <Router>
        <Fragment>
          <Nav/>
          {/*<Route path="/" exact component={Index} />*/}
          {/*<Route path="/movie/:id" exact component={Description} />*/}
          <div className="container">
            { this.state.movies.map( (movie, i) => {
              return <Card key={i} title={movie.title} description={movie.description}/>
            })}
          </div>
          <pre>
            { JSON.stringify(this.props) }
          </pre>
        </Fragment>
      </Router>
    )
  };
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getFilms: () => dispatch(getFilms())
})

export default connect(mapStateToProps, mapDispatchToProps)(GhibliStudio);
