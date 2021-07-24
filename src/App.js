//import logo from './logo.svg';
import './App.css';
import UserInfo from "./Atom/UserInfo";

function App(props) {
  //const { text, date, ...author} = this.props;
  return (
   <div className="Comment">
     <UserInfo author={props.author}/>
     <div className="Comment-text">
      {props.text}
     </div>
     <div className="Comment-date">
       {props.date}
     </div>
   </div>
  
  );
}

export default App;
