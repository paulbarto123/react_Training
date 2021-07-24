//import logo from './logo.svg';
import React from 'react';
import './App.css';
import UserInfo from "./Atom/UserInfo";
import axios from 'axios';


export default class Lifecycle extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                author : {
                    avatarUrl : "https://images-ext-1.discordapp.net/external/PIPWYtqms7laKOw1ect6Ams3U5pBlBWtQtYfQGUCQTQ/%3Fq%3Dtbn%3AANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g/https/encrypted-tbn2.gstatic.com/images?width=348&height=521",
                    name : "Paulus B. Siahaan"
                  }, 
                  text: "Learn React Js",
                  date: new Date(),
                  isToggleOn: true
            }
            //cara binding seperti ini  diperlukan untuk membuat 'this' dapat berfungsi pada calback binding
            this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
        this.getTodos();
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date: new Date()                       
        })
    }
    async getTodos() {
        let data = await axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
        this.setState({ todos: data.data});
    }   
    render(){
        var {text, date,todos, ...rest} = this.state;
        return (
            <div className="Comment">
            <UserInfo author={rest.author}/>
            <div className="Comment-text">
            {text}
            </div>
            <div className="Comment-date">
            {this.state.date.toLocaleTimeString()}.
            </div>
            <tiv className="button">
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </tiv>
            <div>
                <h3>Using componentDidMount for initial data members</h3>
                <hr />
                {todos &&
                    todos.map(todo => {
                        return (
                            <table>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>
                                        <p key={todo.id}>{todo.title}</p>
                                    </td>
                                </tr>
                                
                            </table>
                        )
                    })
                }
            </div>
           
        </div>
        )
    }
}
