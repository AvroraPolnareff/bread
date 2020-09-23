import React, {FC, useMemo,  useState} from 'react';
import styled from 'styled-components';
import {Autocomplete} from "./Autocomplete";
import {DropdownList, Group, Option} from "./DropdownList";

export interface DropdownInputProps {
  options: (Option | Group)[]
  placeholder?: string
  onChange?: (option: Option) => void
  staticOptions?: boolean
  onBlur?: () => void
  onFocus?: () => void
  clearOnBlur?: boolean
}

const flattenOptions = (options: (Option | Group)[]) => {
  let flattenedOptions: Option[] = []
  for (let option of options) {
    if ("name" in option) {
      flattenedOptions.push(...option.items)
    } else {
      flattenedOptions.push(option)
    }
  }
  return flattenedOptions
}

export const DropdownInput: FC<DropdownInputProps> = (props) => {

  const [input, setInput] = useState("")
  const [focus, setFocus] = useState(false)
  const flattenedOptions = useMemo(() => flattenOptions(props.options), [props.options])

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.persist()
    setTimeout(() => {

      const option = flattenedOptions.filter(el => (
        el.label.toLowerCase().startsWith(event.target.value.toLowerCase())
      ))[0]
      setInput(option.label)
      props.onChange?.(option)
      setFocus(false)
    }, 200)
    props.onBlur?.()
  }

  return (
    <StyledDropdownInput>
      <Autocomplete
        suggestions={flattenedOptions}
        value={input}
        placeholder={props.placeholder}
        onChange={setInput}
        focus={focus}
        onFocus={() => {
          setFocus(true)
          props.onFocus?.()
        }}
        //interval for react can handle onSelect DropdownList event before removing it
        onBlur={handleBlur}
      />
      <div style={{position: "absolute", width: "100%"}}>
        {(focus || props.staticOptions) &&
        <DropdownList
            options={props.options}
            searchString={input}
            onSelect={(option) => {
              setInput(option.label)
              setFocus(false)
              props.onChange?.(option)
              if (props.clearOnBlur) {
                setInput("")
              }
            }}
        />}
      </div>
    </StyledDropdownInput>
  )
}


const StyledDropdownInput = styled.div`
  position: relative;
`