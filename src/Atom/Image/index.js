import React from "react";

export default function Image (props) {
    //let {avatarUrl, name} = this.props.author;
     return (
         <img className="Avatar"
         src={props.author.avatarUrl}
         alt={props.author.name}
         />
     );
}