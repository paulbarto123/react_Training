import React from 'react';
import Image from './Image'
function UserInfo(props) {
    //let {author} = this.props;
    return (
        <div className="UserInfo">
            <Image author={props.author} />
            <Image author={props.author} />
            <Image author={props.author} />
            <Image author={props.author} />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    );
}

export default UserInfo