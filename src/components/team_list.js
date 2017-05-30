import React, { Component } from 'react';

import TeamMember from './team_member';

export default (props) => {

	const teamMembers = props.teamMembers.map((member, index) => {
		return <TeamMember
			key={ `${member.name}-${index}`}
			member={member} />;
	})

	return (
		<div className="team-list">
			{teamMembers}
		</div>
	);
}
