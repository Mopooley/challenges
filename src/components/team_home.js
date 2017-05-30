import React, { Component } from 'react';

import TeamList from './team_list';

export default class TeamHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // Dummy data for front-end dev purposes
      // TODO: Redux this! Put this in an action / reducer
      // TODO: replaced with data retrieved from DB.
      // NOTE: This is a draft data model.
      // NOTE: The linking between Team <-> Users <-> Challenges is indicative
      //        of a relational database?
      team: {
        name: "The Pegleg Bandits",
        members: [
          {
            name: 'Faith Notleigh',
            currentChallenge: 'Tame a parrot',
            avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          },
          {
            name: 'Rosanna Gnash',
            currentChallenge: 'Carve a peg leg',
            avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          },
          {
            name: 'Meldrick Grim',
            currentChallenge: 'Learn to tie the Gordian knot',
            avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          },
          {
            name: 'Houston Paddle',
            currentChallenge: 'Mend a sail',
            avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          }
        ]
      }

    }
  }

  render() {

    if (!this.state.team) {
      // TODO: Replace with fancy loading spinner
      return (<div>Loading...</div>);
    }

    return (
      <div>
        <h1>{this.state.team.name}</h1>
        <h2>This week...</h2>
        <TeamList
          teamMembers={this.state.team.members} />
        <div className="info-container">
          <h2>Curious about what these mad people are doing?</h2>
          <button className="beautiful-big-button">Check out the challenges</button>
        </div>
        <div className="info-container">
          <h2>Throw down the gauntlet!</h2>
          <button className="beautiful-big-button">Submit a challenge</button>
        </div>
      </div>
    );
  }
}
