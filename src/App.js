import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home.js';
import Project from './pages/Project.js';
import Nextgen from './pages/Nextgen.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/project" exact component={Project}/>
        <Route path="/nextgen" exact component={Nextgen}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;