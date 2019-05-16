import React, { Component } from 'react'

export default class Search extends Component {

  constructor(){
    super();
    this.state = {
      textField: ''
    }
  }

  search(value) {
    //search by value, how???
    setTimeout(() => {
      fetch(`url/${value}`)
        .then(res => res.json())
        .then(movies => console.log(movies));
    })
  }

  onChangeValue = (e) =>{
    console.log(e.target.value);
    this.setState({
      textField: e.target.value,
    })
  }

  render() {
    return (
      <input
        type="text"
        placeholder="search movies"
        value={this.state.textField}
        onChange={this.onChangeValue}
      />
    )
  }
}
