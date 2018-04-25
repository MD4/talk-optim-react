import React, { PureComponent, createRef } from 'react';
import './index.css';
import Message from '../Message';


export default class Conversation extends PureComponent {

  constructor(props) {
    super(props);
    this.conversationRef = createRef();
  }

  scrollToEnd() {
    this.conversationRef.current.scrollTop = this.conversationRef.current.scrollHeight;
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
        ref={this.conversationRef}
      >
        {
          messages.map(
            message => (
              <Message
                key={message.id}
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
