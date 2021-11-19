import React from "react";

export default class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0
  }

  render() { 
    return <button onClick={this.click}>{this.JanMichaelScott()}</button>;
  }

  JanMichaelScott() {
    return this.state.timesClicked;
  }

  click = () => {
    this.setState((previousState) => {
      return {
        timesClicked: previousState.timesClicked + 1 
      }
    })
  }

}