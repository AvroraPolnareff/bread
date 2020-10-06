import React from 'react';
import {Link, Route, Switch, HashRouter} from 'react-router-dom'
import {RivenHunterQueryBuilder} from "./components/pages/RivenHunterQueryBuilder";


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <h1 style={{textAlign: 'center', paddingTop: '30vh'}}>You visited a wrong page.</h1>
        </Route>
        <Route path="/api/rivenhunter/:secret" children={<RivenHunterQueryBuilder/>}/>
      </Switch>
    </HashRouter>
  );
}


export default App;
