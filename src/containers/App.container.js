import React, { Component } from 'react';
import {
  getInitialState,
  composeInputChanged,
  composeInputSendPressed,
  messageDeleted,
} from '../reducers';
import App from '../components/App';

export default class AppContainer extends Component {
  state = getInitialState();

  listeners = {
    onComposeInputChanged: (value) => this.setState(
      composeInputChanged(this.state, value),
    ),
    onComposeInputSendPressed: () => this.setState(
      composeInputSendPressed(this.state),
    ),
    onMessageDelete: (value) => this.setState(
      messageDeleted(this.state, value),
    ),
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.listeners}
      />
    );
  }
}
