import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import 'typeface-roboto'

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline)
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }

  setZero(number) {
    return number < 10 ? '0' + number : number;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })
  }

  render() {
    return(
      <div style={{ display: 'inline' }}>
        <div className="Days">
          <Typography type="body2" gutterBottom>
            {this.setZero(this.state.days)} days
          </Typography>
        </div>
        <div className="Hours">
          <Typography type="body2" gutterBottom>
            {this.setZero(this.state.hours)} hours
          </Typography>
        </div>
        <div className="Minutes">
          <Typography type="body2" gutterBottom>
            {this.setZero(this.state.minutes)} minutes
          </Typography>
        </div>
        <div className="Seconds">
          <Typography type="body2" gutterBottom>
            {this.setZero(this.state.seconds)} seconds
          </Typography>
        </div>
      </div>
    );
  }
}
