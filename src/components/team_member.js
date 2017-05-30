import React, { Component } from 'react';

export default (props) => {

	return (
    <div className="team-member-card">
      <img className="team-member-avatar" src={props.member.avatarSrc}></img>
      <div className="team-member-details">
        <div className="team-member-intro"><span className="team-member-name">{props.member.name}</span> will attempt to...</div>
        <div className="challenge">{props.member.currentChallenge}</div>
      </div>
    </div>
  );
}
