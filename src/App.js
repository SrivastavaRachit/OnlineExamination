// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import signup from './components/signup';
import Home from './components/Home';
import Footer from './components/Footer';
import AddPaper from './components/paper';
import { Paper } from '@material-ui/core';

function App() {
  return (
    <div>

      <Header></Header>
      <Router>
        <Redirect to="/Home" path="/">
        </Redirect>
        <Route component={Login} path={"/Login"}></Route>
        <Route component={Home} path={"/home"}></Route>
        <Route component={signup} path={"/signup"}></Route>
        <Route component={AddPaper} path={"/addpaper"}></Route>
        <Route component={Paper} path={"/addpaper"}></Route>
        <Footer></Footer>
        
      </Router>

    </div>
  );
}

export default App;
