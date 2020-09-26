import React, {FC, useMemo, useState} from "react";
import styled from "styled-components";
import {StrictDropdownInput} from "./DropdownInput";
import {Group, Option} from "./DropdownList";
import {isEqual} from "lodash";

export interface TagsInputProps {
  options: (Group | Option)[]
  placeholder?: string
  onTagsChange?: (options: Option[]) => void
  maxTags?: number
}

export const TagsInput: FC<TagsInputProps> = ({options, placeholder, onTagsChange, maxTags = 999}) => {
  const [tags, setTags] = useState<Option[]>([])
  const [focus, setFocus] = useState(false)
  const untaggedOptions = useMemo((() => filterGroupOptions(options, tags)), [tags, options])
  const showTags = useMemo(() => (focus && (tags.length + 1) <= maxTags), [tags, focus, maxTags])

  function removeTag(tagForDelete: { label: string, value: string }) {
    let newTags = tags.filter(tag => tag.value !== tagForDelete.value)
    onTagsChange?.(newTags)
    return setTags(newTags)
  }

  function addTag(tag: Option) {
    const newTags = [...tags, tag]
    setTags(newTags)
    onTagsChange?.(newTags)
  }

  function handleFocusChange(focused: boolean) {
    setFocus(focused)
  }

  function handleInputChange(option: Option) {
    addTag(option)
  }

  return (
    <StyledTagsInput>
      <Tags onClick={() => setFocus(!focus)}>
        {!tags.length && <span style={{color: "#AAA", fontSize: "16px"}}>{placeholder}</span>}
        {tags.map((tag) => <Tag onClick={() => removeTag(tag)}>{tag.label}</Tag>)}
      </Tags>
      {showTags &&
      <StrictDropdownInput
        options={untaggedOptions}
        staticOptions
        onFocusChange={handleFocusChange}
        onChange={handleInputChange}
        inputFocus={focus}
        clearOnConfirm={true}
      />
      }
    </StyledTagsInput>
  )
}

function filterGroupOptions(options: (Option | Group)[], excludedOptions: Option[]) {
  if (!excludedOptions.length) return options

  let filteredOptions: (Option | Group)[] = []
  for (let option of options) {
    if ("label" in option) {
      if (!excludedOptions.some(el => isEqual(option, el))) {
        filteredOptions.push(option)
      }
    }
    if ("type" in option && option.type === "group") {
      const filteredGroup = {...option, items: filterGroupOptions(option.items, excludedOptions) as Option[]}
      filteredOptions.push(filteredGroup)
    }
  }
  return filteredOptions
}

const StyledTagsInput = styled.div`
  width: 100%;
`

const Tags = styled.div`
  border: 4px solid darkgray;
  padding: 0.6em;
  height: 3.6em;
`

const Tag = styled.span`
  display: inline-block;
  padding: 0.2em 0.4em;
  margin: 0 0.2em;
  background-color: #61dafb;
`