import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home.js';

import Sui from './pages/Sui.js';
import Nextgen from './pages/Nextgen.js';
import Pepi from './pages/Pepi.js';
import Maryrevs from './pages/Maryrevs.js';
import Jazelbites from './pages/Jazelbites.js';
import Cg from './pages/Cg.js';
import Jv from './pages/Jv.js';
import Sounddistrict from './pages/Sounddistrict.js';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sui" exact component={Sui}/>
        <Route path="/nextgen" exact component={Nextgen}/>
        <Route path="/pepi" exact component={Pepi}/>
        <Route path="/maryrevs" exact component={Maryrevs}/>
        <Route path="/jazelbites" exact component={Jazelbites}/>
        <Route path="/cg" exact component={Cg}/>
        <Route path="/jv" exact component={Jv}/>
        <Route path="/sounddistrict" exact component={Sounddistrict}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;