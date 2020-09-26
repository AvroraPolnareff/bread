import React, {Attributes, FC, useEffect, useMemo, useState} from 'react';
import {useParams, Link, Router, Route, Switch, HashRouter} from 'react-router-dom'
import './App.css';
import axios from 'axios';
import styled from "styled-components";
import {weaponAttributes, weapons} from "./weapon";
import 'react-dropdown/style.css'
import {StrictDropdownInput} from "./components/shared/DropdownInput";
import {Group, Option} from "./components/shared/DropdownList";
import {TagsInput} from "./components/shared/TagsInput";


function App() {
  return (
    <HashRouter>
      <Link to="/lal">lllal</Link>
      <Switch>
        <Route exact path="/">
          looool
        </Route>
        <Route path="/:secret" children={<QueryBuilder/>}/>
      </Switch>
    </HashRouter>
  );
}

const weaponsDropdown = [
  {value: 'any', label: 'Any'},
  {
    type: 'group',
    name: "primary",
    items: weapons.filter(weapon => weapon.group === 'primary').map(weapon => ({
      value: weapon.url_name,
      label: weapon.item_name
    }))
  },
  {
    type: 'group',
    name: "secondary",
    items: weapons.filter(weapon => weapon.group === 'secondary').map(weapon => ({
      value: weapon.url_name,
      label: weapon.item_name
    }))
  },
  {
    type: 'group',
    name: "melee",
    items: weapons.filter(weapon => weapon.group === 'melee').map(weapon => ({
      value: weapon.url_name,
      label: weapon.item_name
    }))
  },
  {
    type: 'group',
    name: "kitgun",
    items: weapons.filter(weapon => weapon.group === 'kitgun').map(weapon => ({
      value: weapon.url_name,
      label: weapon.item_name
    }))
  },
  {
    type: 'group',
    name: "archgun",
    items: weapons.filter(weapon => weapon.group === 'archgun').map(weapon => ({
      value: weapon.url_name,
      label: weapon.item_name
    }))
  },
  {
    type: 'group',
    name: "zaw",
    items: weapons.filter(weapon => weapon.group === 'zaw').map(weapon => ({
      value: weapon.url_name,
      label: weapon.item_name
    }))
  },
  {
    type: 'group',
    name: "sentinel",
    items: weapons.filter(weapon => weapon.group === 'sentinel').map(weapon => ({
      value: weapon.url_name,
      label: weapon.item_name
    }))
  }
]

const attributes: Group[] = [
  {
    type: 'group',
    name: 'General',
    items: weaponAttributes
      .filter(attribute => !attribute.exclusive_to?.includes("melee"))
      .map(attribute => ({label: attribute.effect, value: attribute.url_name})) as Option[]
  },
  {
    type: 'group',
    name: 'Melee',
    items: weaponAttributes
      .filter(attribute => attribute.exclusive_to?.includes("melee"))
      .map(attribute => ({label: attribute.effect, value: attribute.url_name})) as Option[]
  }
]

const QueryBuilder: FC = () => {
  const {secret} = useParams()
  const [exists, setExists] = useState(false)
  const [loading, setLoading] = useState(true)
  const [weapon, setWeapon] = useState("")
  const [positive, setPositive] = useState<Option[]>([])
  const [negative, setNegative] = useState<Option[]>([])
  const [button, setButton] = useState("TRACK")
  const [message, setMessage] = useState("")
  const disabled = useMemo(() => !positive.length && !negative.length, [positive, negative])

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/${secret}`).then(res => {
      console.log(res)
      setLoading(false)
      if (res.status === 200) {
        setExists(res.status === 200)
      } else {
        setMessage("URL is wrong.")
      }
    })
  }, [])

  function handleSubmit() {
    axios.post(`http://localhost:4000/api/v1/${secret}`, {
      positive: positive,
      negative: negative,
      weapon : weapon,
    }).then(res => {
      console.log(res)
      if (res.status === 202) {
        setButton("DONE")
        setExists(false)
        setMessage("Hunt has started...")
      }
    })
  }


  return (
    <StyledQueryBuilder>
      {(!loading && exists) ?
        <div>
          <div>
            <label>Weapon: </label>
            <StrictDropdownInput
              options={weaponsDropdown as (Option | Group)[]}
              onChange={(option) => setWeapon(option.value)}
            />
          </div>
          <div style={{display: "flex", marginTop: "3em"}}>
            <div style={{width: "75%", marginRight: "2em"}}>
              <label>Positive: </label>
              <TagsInput
                options={attributes}
                maxTags={3}
                onTagsChange={(tags) => setPositive(tags)}
              />
            </div>
            <div style={{width: "25%"}}>
              <label>Negative: </label>
              <TagsInput
                options={[{label: "None", value: "none"}, ...attributes]}
                maxTags={1}
                onTagsChange={(tags) => setNegative(tags)}
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={disabled}
            style={{
              marginTop: "1em",
              fontSize: "x-large",
              border: "2px solid #999",
              borderRadius: "3px",
              backgroundColor: "#a1eee8",
              textAlign: "right"
            }}
          >
            {button}
          </button>
        </div>
        : <h1>{message}</h1>
      }
    </StyledQueryBuilder>
  )
}

const StyledQueryBuilder = styled.div`
  width: 75%;
  margin: 15vh auto;
`

export default App;
