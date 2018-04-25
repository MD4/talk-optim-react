import React, { Component } from 'react';
import './index.css';

const esotericlyComputeAvatarUrl = avatar => {
  for (let i = 0; i < 500000; i++) {
    String(Number('321654984321'));
  }

  return avatar;
};

export default class Avatar extends Component {
  render() {
    const { avatar } = this.props;
    const computedAvatar = esotericlyComputeAvatarUrl(avatar);

    return (
      <img
        className="Avatar"
        src={computedAvatar}
      />
    );
  }
}
