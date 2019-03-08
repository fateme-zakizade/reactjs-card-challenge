import React, { Component } from 'react';
import './App.css';
import {fetchData} from "./fetchData/fetchData";
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }
  render() {

    const { error, loading, cards } = this.props;
    console.log(cards);

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {cards.map(card =>
          <li>{card.title}</li>
        )}
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  cards: state.cards.items,
  loading: state.cards.loading,
  error: state.cards.error
});

export default connect(mapStateToProps)(App);