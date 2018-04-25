import React, { PureComponent } from 'react';
import './index.css';
import Avatar from '../Avatar';

const Date = ({ date }) => (
  <div className="Date">
    {date.toLocaleTimeString()}
  </div>
);

export default class Message extends PureComponent {
  onClick() {
    const { onMessageDelete, id } = this.props;
    onMessageDelete(id);
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const { text, participant, date, mine } = this.props;

    return (
      <div
        className={`Message${mine ? ' mine' : ''}`}
        onClick={this.onClick}
      >
        <div className="MessageContent">
          <Avatar {...participant} />
          <div className="MessageText">
            {text}
          </div>
        </div>
        <div className="MessageMeta">
          <Date date={date} />
        </div>
      </div>
    );
  }
}
