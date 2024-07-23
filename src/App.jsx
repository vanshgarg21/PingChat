
import './App.css';
import { Routes, Route, Router } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"




function App() {




  return (
        <Routes>
        <Route exact path="/" Component={Join}/>
        <Route path="/chat" Component={Chat}/>
        </Routes>
  );
}

export default App;
