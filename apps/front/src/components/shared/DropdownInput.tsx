import React, {useMemo, useRef, useState} from 'react';
import styled from 'styled-components';
import {Autocomplete} from "./Autocomplete";
import {DropdownList, Group, Option} from "./DropdownList";
import {throttle} from "lodash"

export interface DropdownInputProps {
  options: (Option | Group)[]
  placeholder?: string
  onChange?: (value: string) => void
  value?: string
  staticOptions?: boolean
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onFocusChange?: (focused: boolean) => void
  inputFocus?: boolean
}

export function DropdownInput(props: DropdownInputProps) {
  const [input, setInput] = useState("")
  const [showList, setShowList] = useState(false)
  const flattenedOptions = useMemo(() => flattenOptions(props.options), [props.options])
  const displayedInput = useMemo(() => props.value ?? input, [props.value, input])
  const throttledFocusChange = useRef(throttle(
    (value: boolean) => handleFocusChange(value),
    20,
    {leading: false}
    ))

  function handleFocusChange (focused: boolean) {
    setShowList?.(focused)
    props.onFocusChange?.(focused)
  }

  function handleAutocompleteChange (value: string){
    props.onChange?.(value)
  }

  function handleSelect (option: Option) {
    props.onChange?.(option.label)
    setInput(option.label)
    throttledFocusChange.current(false)
  }

  return (
    <StyledDropdownInput
      onFocus={() => throttledFocusChange.current(true)}
      onBlur={() => throttledFocusChange.current(false)}
    >
      <Autocomplete
        suggestions={flattenedOptions}
        value={displayedInput}
        placeholder={props.placeholder}
        onChange={handleAutocompleteChange}
        onKeyDown={props.onKeyDown}
        focus={props.inputFocus}
      />
      <div style={{position: "absolute", width: "100%"}}>
        {(showList || props.staticOptions) &&
        <DropdownList
            options={props.options}
            searchString={displayedInput}
            onSelect={handleSelect}
        />}
      </div>
    </StyledDropdownInput>
  )
}

const StyledDropdownInput = styled.div`
  position: relative;
`
export interface StrictDropdownInputProps {
  options: (Option | Group)[]
  placeholder?: string
  staticOptions?: boolean
  onChange?: (option: Option) => void
  onFocusChange?: (focused: boolean) => void
  clearOnEnter?: boolean
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  inputFocus?: boolean
  clearOnConfirm?: boolean
}

export function StrictDropdownInput(props: StrictDropdownInputProps) {
  const [input, setInput] = useState("")
  const matchedColor = useRef({label: "any", value: "any"})
  const flattenedOptions = useMemo(() => flattenOptions(props.options), [props.options])

  function handleChange(value: string) {
    setInput(value)
    const matchedOptions = flattenedOptions.filter((el => el.label.toLowerCase().indexOf(value.toLowerCase()) !== -1))
    if (matchedOptions.length) {
      matchedColor.current = matchedOptions[0]

    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && input !== "") {
      props.onChange?.(matchedColor.current)
      if (props.clearOnConfirm) {
        setInput("")
      } else {
        setInput(matchedColor.current.label)
      }
    }
    props.onKeyDown?.(event)
  }

  function handleFocusChange(focused: boolean) {
    if (!focused && matchedColor.current.label !== "any") {
      if (props.clearOnConfirm) {
        setInput("")
      } else {
        setInput(matchedColor.current.label)
      }
      props.onChange?.(matchedColor.current)
    }

    props.onFocusChange?.(focused)
  }

  return (
    <DropdownInput
      options={props.options}
      placeholder={props.placeholder}
      value={input}
      onChange={handleChange}
      onFocusChange={handleFocusChange}
      onKeyDown={handleKeyDown}
      staticOptions={props.staticOptions}
      inputFocus={props.inputFocus}
    />
  )
}

export const flattenOptions = (options: (Option | Group)[]) => {
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


