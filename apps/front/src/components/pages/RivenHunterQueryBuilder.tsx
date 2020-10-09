import {weaponAttributes, weapons} from "../../weapon";
import {Group, Option} from "../shared/DropdownList";
import React, {FC, useEffect, useMemo, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {StrictDropdownInput} from "../shared/DropdownInput";
import {TagsInput} from "../shared/TagsInput";
import styled from "styled-components";



export const RivenHunterQueryBuilder: FC = () => {
  const {secret} = useParams<{ secret: string }>()
  const [exists, setExists] = useState(false)
  const [loading, setLoading] = useState(true)
  const [weapon, setWeapon] = useState("")
  const [positive, setPositive] = useState<Option[]>([])
  const [negative, setNegative] = useState<Option[]>([])
  const [button, setButton] = useState("TRACK")
  const [message, setMessage] = useState("")
  const disabled = useMemo(() => !positive.length && !negative.length, [positive, negative])

  useEffect(() => {
    axios.get(`/api/v1/rivenhunter/${secret}`).then(res => {
      setLoading(false)
      if (res.status === 200) {
        setExists(res.status === 200)
      } else {
        setMessage("URL is wrong.")
      }
    })
  }, [])

  function handleSubmit() {
    axios.post(`/api/v1/rivenhunter/${secret}`, {
      positive: positive,
      negative: negative,
      weapon : weapon,
    }).then(res => {
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
