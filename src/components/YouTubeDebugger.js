
import React from "react";

export default class YouTubeDebugger extends React.Component {
  
  state= {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }
  
  changeBitrate = () => {
    this.setState({settings: { 
      ...this.state.settings, bitrate: 12 
      }
    }, () => console.log(this.state))
  }

  changeResolution = () => {
    this.setState({settings: {
      ...this.state.settings, video: {
         resolution: '720p'
      }
    }}, () => console.log(this.state))
  }

  render(){
    return <div>
      <button className="bitrate" onClick={this.changeBitrate}>bitrate</button>
      <button className="resolution" onClick={this.changeResolution}>resolution</button>
    </div>
  }
}

// 3. Create a button with the class `'bitrate'`. Clicking this button changes the
// `settings.bitrate` state property to `12`.

// 4. Create a button with the class `'resolution'`. Clicking this button changes
//    the `settings.video.resolution` state property to `'720p'`.