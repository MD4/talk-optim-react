import React, { PureComponent } from 'react';
import './index.css';
import Message from '../Message';


export default class Conversation extends PureComponent {
  scrollToEnd() {
    this.node.scrollTop = this.node.scrollHeight;
  }

  componentDidUpdate({ messages }) {
    if (messages !== this.props.messages) {
      this.scrollToEnd();
    }
  }

  render() {
    const { messages, onMessageDelete } = this.props;

    return (
      <div
        className="Conversation"
        ref={node => (this.node = node)}
      >
        {
          messages.map(
            message => (
              <Message
                onMessageDelete={onMessageDelete}
                {...message}
              />
            ),
          )
        }
      </div>
    );
  }
}
