import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home.js';
import Sui from './pages/Sui.js';
import Project from './pages/Project.js';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sui" exact component={Sui}/>
        <Route path="/project" exact component={Project}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;