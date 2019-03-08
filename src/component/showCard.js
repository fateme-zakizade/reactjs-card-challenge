import React, { Component } from 'react';
import { Card,Button } from 'react-bootstrap';
import {connect} from 'react-redux';
class ShowCard extends Component{
    constructor(props)
    {
        super(props);
        const {title,description}=props.cardShow;
        this.state={
            title:title,
            description:description,
            edit:false
        }
    }
    editSave=()=>{
        this.setState({edit:!this.state.edit});
    }
    changeInput=({target:{value,name}})=>{
        this.setState({[name]:value});

    }
    render(){
       
        const {title,description,edit}=this.state;
        return (<div >

<Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>{edit? <input name="title"  value={title} onChange={this.changeInput}/> : title}</Card.Title>
    <Card.Text>{edit? <textarea row={5} name="description" value={description} onChange={this.changeInput} style={{width:'100%'}}/> : description}</Card.Text>
  </Card.Body>
  <Button variant="primary" onClick={this.editSave}>{edit ? "Save" : "Edit"} </Button>
</Card>
            </div>)

    }
    
}
  
export  {ShowCard};