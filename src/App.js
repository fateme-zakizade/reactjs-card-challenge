import React, { Component } from 'react';
import './App.css';
import {fetchData} from "./fetchData/fetchData";
import {connect} from 'react-redux';
import ShowCard from "./component/showCard";
import {Button} from "react-bootstrap"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      random:0
    }
  }
  componentWillMount() {
    this.props.dispatch(fetchData());
  }
  creatRandom=()=>{
    const {cards}=this.props;
    this.setState({random: Math.floor(Math.random() * cards.length)});
  }
  render() {
    const { error, loading, cards } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"100vh"}}>
      <ShowCard cardShow={cards[this.state.random]} key={this.state.random} index={this.state.random}/>
      <Button variant="primary" className="mt-5 px-3 py-2" onClick={this.creatRandom}>Try</Button>
      </div>
      
    );
  }
}
const mapStateToProps = state => ({
  cards: state.cards.items,
  loading: state.cards.loading,
  error: state.cards.error
});

export default connect(mapStateToProps)(App);