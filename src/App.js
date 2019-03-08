import React, { Component } from 'react';
import './App.css';
import {fetchData} from "./fetchData/fetchData";
import {connect} from 'react-redux';
import ShowCard from "./component/showCard";
import {Button} from "react-bootstrap"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const backgroundColor=["linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
'linear-gradient(315deg, #e899dc 0%, #d387ab 74%)',
'linear-gradient(315deg, #20bf55 0%, #01baef 74%)'];

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      random:0
    }
  }
  /////////////////////////////////////////////////////////////// 


  componentWillMount() {
    this.props.dispatch(fetchData());
  }


  //////////////////////////////////////////////////////////////////


  creatRandom=()=>{
    const {cards}=this.props;
    this.setState({random: Math.floor(Math.random() * cards.length)});
  }

  //////////////////////////////////////////////////////////////////


  render() {
    const { error, loading, cards } = this.props;
    const {random}=this.state;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    const bg=cards[random].tag==="fun"? 0 : cards[random].tag==="art"? 1 : 2;
    return (
      <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"100vh",backgroundImage: backgroundColor[bg]}}>
        <ShowCard cardShow={cards[random]} key={random} index={random}/>
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