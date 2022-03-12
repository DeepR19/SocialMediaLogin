import Home from "./Home/Home";
import Login from "./login/Login";
import Post from "./post";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  const user =true;
  return (
      <div className='App'>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login' element={ user ? <Navigate to='/' /> : <Login/>}/>
            <Route path='/post/:id' element={ user ? <Post/> :<Navigate to='/login' /> }/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
