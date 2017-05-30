import React, { Component } from 'react';

export default (props) => {

	return (
    <div className="team-member-card">
      <img className="avatar" src={props.member.avatarSrc}></img>
      <h3>{props.member.name}</h3>
      <div className="challenge">{props.member.currentChallenge}</div>
    </div>
  );
}
