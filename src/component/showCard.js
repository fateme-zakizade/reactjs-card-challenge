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
        const {code,sound,image}=this.props.cardShow;
        console.log(code);
        console.log(typeof(code))
        return (<div >

<Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>{edit? <input name="title"  value={title} onChange={this.changeInput}/> : title}</Card.Title>
    <Card.Text>{edit? <textarea row={5} name="description" value={description} onChange={this.changeInput} style={{width:'100%'}}/> : description}</Card.Text>
  </Card.Body>
  {code===0 ? <Card.Img variant="bottom" src={image} /> : ""}
  <Button variant="primary" onClick={this.editSave} className="my-3 mx-auto w-50" >{edit ? "Save" : "Edit"} </Button>
</Card>
            </div>)

    }
    
}
  
export  {ShowCard};