//import logo from './logo.svg';
import React from 'react';
import './App.css';
import UserInfo from "./Atom/UserInfo";



export default class Apps extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                author : {
                    avatarUrl : "https://images-ext-1.discordapp.net/external/PIPWYtqms7laKOw1ect6Ams3U5pBlBWtQtYfQGUCQTQ/%3Fq%3Dtbn%3AANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g/https/encrypted-tbn2.gstatic.com/images?width=348&height=521",
                    name : "Paulus B. Siahaan"
                  }, 
                  text: "Learn React Js",
                  date: "15 Juli 2021"
            }
        
    }
    render(){
        var {text, date, ...rest} = this.state;
        return (
            <div className="Comment">
            <UserInfo author={rest.author}/>
            <div className="Comment-text">
            {text}
            </div>
            <div className="Comment-date">
            {date}
            </div>
        </div>
        )
    }
}
