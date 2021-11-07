import React from 'react';
import User from './User/User';
import './users-board.css'

function UsersBoard(props) {
  return (
    <div className="main">
      {Object.keys(props.teams).map(team => <User key={team} team={props.teams[team]} activeTeamName={props.activeTeamName}/>)}
    </div>
  );
}

export default UsersBoard;