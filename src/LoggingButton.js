import React from 'react';
import Modals from './Atom/Modals'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default class LoggingButton extends React.Component {
    handleClick(param, e){
        e.preventDefault();
        console.log('this is', this);
        return(
            <Modals />
        )
    }
    render(){
        return(
            <button onClick={(e) => this.handleClick("this is event onclick", e)}>
                Klick Saya
            </button>
        )
    }
}