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
        <div>
          <h2>Curious about these challenges?</h2>
          <button>Check them out here</button>
        </div>
        <div>
          <h2>Have an idea for a challenge?</h2>
          <button>Submit a challenge here</button>
        </div>
      </div>
    );
  }
}
