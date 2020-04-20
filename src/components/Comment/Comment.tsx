import React from 'react'
import ReactDOM from 'react-dom';

export interface AvatarIProps {
    user: any;
}

function Avatar(props:AvatarIProps) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }

function UserInfo(props:AvatarIProps) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }

function Comment(props: { author: any; text: React.ReactNode; }) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
      </div>
    );
  }
  
  
  export default Comment
