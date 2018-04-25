import React, { PureComponent } from 'react';
import './index.css';

import Conversation from '../Conversation';
import ComposeInput from '../ComposeInput';

class App extends PureComponent {
  render() {
    const {
      conversation,
      currentInput,

      onComposeInputChanged,
      onComposeInputSendPressed,
      onMessageDelete,
    } = this.props;

    return (
      <div className="App">
        <Conversation
          {...conversation}
          onMessageDelete={onMessageDelete}
        />
        <ComposeInput
          currentInput={currentInput}

          onComposeInputChanged={onComposeInputChanged}
          onComposeInputSendPressed={onComposeInputSendPressed}
        />
      </div>
    );
  }
}

export default App;
