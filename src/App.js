import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Clock from './Clock';
import 'typeface-roboto'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    console.log('state', this.state);
    this.setState({ deadline: this.state.newDeadline })
  }

  render() {
    return(
      <Grid container style={{ marginTop: '20%' }}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <div style={{ textAlign: 'center', fontSize: '45' }}>
              <div className="Title">
                <Typography type="title" gutterBottom>
                  Countdown to {this.state.deadline}
                </Typography>
              </div>
              <div>
                <Clock
                  deadline={this.state.deadline}
                />
              </div>
              <div>
              <TextField
                placeholder="New date"
                onChange={event => this.setState({ newDeadline: event.target.value })}
              />
              <Button raised color="primary" onClick={() => this.changeDeadline()}>
                Submit
              </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
