import React from 'react';
import UserInfo from './Atom/UserInfo';
import './Comment.css';

export default class Comment extends React.Component {
    
    render(){
        let {text, date, ...author} = this.props;
        return (
            <div className="Comment">
                <UserInfo {...author} />
                <div className="Comment-text">
                    {text}
                </div>
                <div className="Comment-date">
                    {date}
                </div>
            </div>
        );
    }
}