import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Welcome'
import reportWebVitals from './reportWebVitals';
import Apps from './Apps'
import Comment from './Comment'
import Lifecycle from './Lifecycle'
import LoggingButton  from './LoggingButton';
//import GetFromApi from './GetFromApi';

const obj = {
  author : {
    avatarUrl : "https://images-ext-1.discordapp.net/external/PIPWYtqms7laKOw1ect6Ams3U5pBlBWtQtYfQGUCQTQ/%3Fq%3Dtbn%3AANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g/https/encrypted-tbn2.gstatic.com/images?width=348&height=521",
    name : "Paulus B. Siahaan"
  }, 
  text: "Learn React Js",
  date: "19 Juli 2021"
} 
ReactDOM.render(
  <React.StrictMode>
    <Welcome name="Sara" />
    {/* <App {...obj} />
    <Apps />
    <Lifecycle /> */}
    <LoggingButton />
    {/* <GetFromApi /> */}
    {/* <Comment {...obj} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
