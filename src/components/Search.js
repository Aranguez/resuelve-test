import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { search } from '../actions/data';

class Search extends Component {

  onChangeValue = (e) =>{
    if(this.props.location.pathname !== '/') {
      this.props.history.push('/');
    }
    this.props.search(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="search movies"
        value={this.props.textField}
        onChange={this.onChangeValue}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  textField: state.dataReducer.searchInput
})

const mapDispatchToProps = {
  search
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
