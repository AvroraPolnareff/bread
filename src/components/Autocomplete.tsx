import React, { FC, useMemo, useRef, useState} from "react";
import styled from "styled-components";

interface Suggestion {
  label: string
  value: string
}

export interface AutocompleteProps {
  onChange?: (value: string) => void
  suggestions: Suggestion[]
  placeholder?: string
  value?: string
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  strict?: boolean
  focus?: boolean
}

export const Autocomplete: FC<AutocompleteProps> = (props) => {
  const [input, setInput] = useState("")
  const [suggestion, setSuggestion] = useState<Suggestion>()
  const inputEl = useRef<HTMLInputElement>(null)
  const valueFromInputSource = useMemo(() => props.value ?? input, [props.value, input])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (props.suggestions) {
      setSuggestion(props.suggestions.filter(el => el.label.toLowerCase().startsWith(e.target.value.toLowerCase()))[0])
    }
    props.onChange?.(e.target.value);
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur?.(e)
  }

  return (
    <StyledAutocomplete>
      <RealInput
        ref={inputEl}
        onFocus={props.onFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        value={valueFromInputSource}
      />
      <FakeInput
        suggestion={suggestion}
        inputValue={valueFromInputSource}
        placeholder={props.placeholder}
      />
    </StyledAutocomplete>
  )
}

const StyledAutocomplete = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const RealInput = styled.input`
  padding: 1em;
  width: 100%;
`

interface FakeInputProps {
  suggestion?: Suggestion,
  inputValue: string,
  placeholder?: string
}

const FakeInput: FC<FakeInputProps> = ({suggestion, inputValue, placeholder}) => {
  const visiblePart = useMemo(() => {
    if (placeholder && !inputValue) {
      return placeholder
    }
    if (!suggestion) {
      return ""
    }
    if (inputValue) {
      return suggestion.label.slice(inputValue.length)
    }
    return ""
  }, [placeholder, inputValue, suggestion])
  return (
    <StyledFakeInput>
      <span style={{opacity: 0, fontSize: "16px"}}>{inputValue}</span>
      <span style={{color: "#AAA", fontSize: "16px"}}>{visiblePart}</span>
    </StyledFakeInput>
  )
}

const StyledFakeInput = styled.div`
  font-size: 16px;
  position: absolute;
  padding-left: 1.15em;
  user-select: none;
  pointer-events: none;

`


