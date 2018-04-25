import React, { Component } from 'react';
import './index.css';
import Avatar from '../Avatar';

const Date = ({ date }) => (
  <div className="Date">
    {date.toLocaleTimeString()}
  </div>
);

export default class Message extends Component {
  render() {
    const { id, text, participant, date, mine, onMessageDelete } = this.props;

    return (
      <div
        className={`Message${mine ? ' mine' : ''}`}
        onClick={() => onMessageDelete(id)}
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
