import React from 'react';
import {Link, Route, Switch, HashRouter} from 'react-router-dom'
import './App.css';
import 'react-dropdown/style.css'
import {RivenHunterQueryBuilder} from "./components/pages/RivenHunterQueryBuilder";


function App() {
  return (
    <HashRouter>
      <Link to="/lal">lllal</Link>
      <Switch>
        <Route exact path="/">
          looool
        </Route>
        <Route path="/:secret" children={<RivenHunterQueryBuilder/>}/>
      </Switch>
    </HashRouter>
  );
}


export default App;
