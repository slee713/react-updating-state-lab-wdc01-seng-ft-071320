// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    constructor(){
        super()
        this.state={
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitRateClick=()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video:{
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.handleBitRateClick} className = "bitrate">BitRate: {this.state.settings.bitrate}</button>
                <button onClick={this.handleResolutionClick} className = "resolution">Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger