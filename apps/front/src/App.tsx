import React, {FC} from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom'
import {observer} from "mobx-react"
import {RivenHunterQueryBuilder} from "./components/pages/RivenHunterQueryBuilder";
import {AuthComponent} from "./components/shared/AuthComponent";
import {UserStore, userStore} from "./stores/UserStore";
import styled from "styled-components";
import {AppBar} from "./components/shared/AppBar";
import {QueriesStore} from "./stores/QueriesStore";
import {Card} from "./components/shared/Card";
import {Badge} from "./components/shared/Badge";


function App() {
  return (
    <HashRouter>
      <StyledApp>
        <AuthComponent userStore={userStore}>
          <Switch>
            <Route exact path="/">
              <MainPage userStore={userStore}/>
            </Route>
            <Route path="/api/rivenhunter/:secret" children={<RivenHunterQueryBuilder/>}/>
          </Switch>
        </AuthComponent>
      </StyledApp>
    </HashRouter>
  );
}

const StyledApp = styled.section`
  height: 100vh;
`

const MainPage: FC<{ userStore: UserStore }> = observer(({userStore}) => {
  return (
    <>
      <AppBar userStore={userStore}/>

    </>
  )
})

const RivenHunterPage: FC<{queriesStore: QueriesStore}> = ({queriesStore}) => {
  return (
    <StyledRivenHunterPage>
      {queriesStore.state === "done" &&
        queriesStore.queries.map((query) => (
          <Card>
            <Badge autoColor></Badge>
          </Card>
        ))
      }
    </StyledRivenHunterPage>
  )
}

const StyledRivenHunterPage = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export default App;
