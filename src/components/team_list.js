import React, { Component } from 'react';

import TeamMember from './team_member';

export default (props) => {

	const teamMembers = props.teamMembers.map((member, index) => {
		console.log(member);
		return <TeamMember
			key={ `${member.name}-${index}`}
			member={member} />;
	})

	return (
		<div>
			{teamMembers}
		</div>
	);
}
