import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { getUsersRequest } from "../actions/wordsActions";
import WordsList from '../components/WordsList'


class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  }

  render() {
    const words = this.props.words;
    const styleContainer = {
      margin: '0 auto',
      padding: '20px',
      maxWidth: '600px'
    }
    return (
      <div style={styleContainer}>
        <WordsList words={words.items}/>
      </div>
    );
  }
}

export default connect(({words}) => ({words}),{
  getUsersRequest
})(App);
