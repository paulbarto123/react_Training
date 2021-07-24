//import logo from './logo.svg';
import React from 'react';
import './App.css';
import UserInfo from "./Atom/UserInfo";
import axios from 'axios';
// function Clock(props) {
//     return (
//         <div>
//             <h1>Halo, Dunia!</h1>
//             <h2>Ini {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }
// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()}/>,
//         document.getElementById('root')
//     )
// }

export default class GetFromApi extends React.Component {
    
    constructor(props){
        super(props)
            this.state = {
                author : {
                    avatarUrl : "https://images-ext-1.discordapp.net/external/PIPWYtqms7laKOw1ect6Ams3U5pBlBWtQtYfQGUCQTQ/%3Fq%3Dtbn%3AANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g/https/encrypted-tbn2.gstatic.com/images?width=348&height=521",
                    name : "Paulus B. Siahaan"
                  }, 
                  text: "Learn React Js",
                  date: new Date()
            }
            this.getTodos = this.getTodos.bind(this);
        
    };
  
    componentDidMount() {
        //this.timerID = setInterval(() => this.tick(), 1000);
        this.getTodos();
    }
    async getTodos() {
        let data = await axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((response) => {
            this.setState({todos: response.data})
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
       // this.setState({ todos: data.data});
    }   
    render(){
        const {text, date, todos, ...rest} = this.state;
        return (
            <div className="Comment">
            <UserInfo author={rest.author}/>
            <div className="Comment-text">
            {text}
            </div>
            <div className="Comment-date">
            {this.state.date.toLocaleDateString()}.
            </div>
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
