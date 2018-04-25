import React, { PureComponent } from 'react';
import './index.css';

export default class ComposeInput extends PureComponent {
  state = {
    value: '',
  };

  onChange({ target: { value } }) {
    this.props.onComposeInputChanged(value);
    this.setState({ value });
  }

  onKeyDown({ keyCode }) {
    if (keyCode === 13) { // return key code
      this.props.onComposeInputSendPressed();
    }
  }

  componentWillReceiveProps({ currentInput }) {
    if (currentInput !== this.state.value) {
      this.setState({ value: currentInput });
    }
  }

  render() {
    const { value } = this.state;

    return (
      <input
        className="ComposeInput"
        type="text"
        value={value}
        placeholder={'Type your message here, then press `return`'}

        onKeyDown={this.onKeyDown.bind(this)}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}
