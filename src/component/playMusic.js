import React, { Component } from 'react'
import Sound from 'react-sound';
import { Button } from 'react-bootstrap';
class PlayMusic extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            
        music:true,
        sound:props.sound,
        }
    }
    music=()=>{
        this.setState({music:!this.state.music})
    }
    
    render()
    {
        const {sound,music}=this.state;
        return(<div className="d-flex justify-content-center">
        <Button  variant="danger" className="rounded-circle"   onClick={this.music}>{this.state.music ? "puse" : "play"}</Button>
        <Sound
           url={sound}
           playStatus={music ? Sound.status.PLAYING : Sound.status.PAUSED}
              onLoading={this.handleSongLoading}
              onPlaying={this.handleSongPlaying}
              onFinishedPlaying={this.handleSongFinishedPlaying}
           />
        </div>)
    }
}
export {PlayMusic};