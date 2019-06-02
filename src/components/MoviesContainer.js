import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getMovies } from '../actions/data';

import Card from './Card';

class MoviesContainer extends Component {

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    return (
      <div className="container container-grid container--small">

        { this.props.searchInput === '' ?
        
          this.props.movies.map((data, i) => {
            return <Card key={ i }
                        onHandleShowDescription= { this.showDescription }
                        { ...data }/>
          }) :

          this.props.filteredData.map((data, i) => {
            return <Card key={ i }
                        onHandleShowDescription= { this.showDescription }
                        { ...data }/>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.dataReducer.movies,
  filteredData: state.dataReducer.filteredData,
  searchInput: state.dataReducer.searchInput,
})

const mapDispatchToProps = {
  getMovies
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);