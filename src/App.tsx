import React, {FC, useEffect, useState} from 'react';
import {useParams,  Link, Router, Route, Switch} from 'react-router-dom'
import Dropdown, {Group, Option} from 'react-dropdown'
import './App.css';
import {createBrowserHistory} from "history";
import axios from 'axios';
import styled from "styled-components";
import {weaponAttributes, weapons} from "./weapon";
import 'react-dropdown/style.css'
const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Link to="/lal">lllal</Link>
      <Switch>
        <Route exact path="/">
          looool
        </Route>
        <Route path="/:secret" children={<QueryBuilder/>}/>
      </Switch>
    </Router>
  );
}

const weaponsDropdown = [
  {value: 'any', label: 'Any'},
  {type: 'group', name: "primary", items: weapons.filter(weapon => weapon.group === 'primary').map(weapon => ({value: weapon.url_name, label: weapon.item_name})) },
  {type: 'group', name: "secondary", items: weapons.filter(weapon => weapon.group === 'secondary').map(weapon => ({value: weapon.url_name, label: weapon.item_name}))},
  {type: 'group', name: "melee", items: weapons.filter(weapon => weapon.group === 'melee').map(weapon => ({value: weapon.url_name, label: weapon.item_name}))},
  {type: 'group', name: "kitgun", items: weapons.filter(weapon => weapon.group === 'kitgun').map(weapon => ({value: weapon.url_name, label: weapon.item_name}))},
  {type: 'group', name: "archgun", items: weapons.filter(weapon => weapon.group === 'archgun').map(weapon => ({value: weapon.url_name, label: weapon.item_name}))},
  {type: 'group', name: "zaw", items: weapons.filter(weapon => weapon.group === 'zaw').map(weapon => ({value: weapon.url_name, label: weapon.item_name}))},
  {type: 'group', name: "sentinel", items: weapons.filter(weapon => weapon.group === 'sentinel').map(weapon => ({value: weapon.url_name, label: weapon.item_name}))}
]

const suggestions = weaponAttributes.map(attribute=> ({value: attribute.url_name, label: attribute.effect}))

const QueryBuilder : FC = () => {
  const {secret} = useParams()
  const [exists, setExists] = useState(false)
  const [loading, setLoading] = useState(true)
  const [tags, setTags] = useState<string[]>([])

  useEffect( () => {
    axios.get(`http://localhost:4000/api/v1/secret/${secret}`).then(res => {
      setLoading(false)
      setExists(res.status === 200)
    })

  }, [])



  return (
    <StyledQueryBuilder>
      <Dropdown options={weaponsDropdown as (Option | Group)[]}/>
      <div>
      </div>
    </StyledQueryBuilder>
  )
}

const StyledQueryBuilder = styled.div`
  width: 75%;
  margin: 15vh auto;
`

export default App;
