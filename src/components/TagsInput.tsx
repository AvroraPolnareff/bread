import React, {FC, useState} from "react";
import styled from "styled-components";
import {DropdownInput} from "./DropdownInput";
import {Group, Option} from "./DropdownList";

export interface TagsInputProps {
  options: (Group | Option)[]
  placeholder?: string
}

export const TagsInput: FC<TagsInputProps> = ({options, placeholder}) => {
  const [tags, setTags] = useState<Option[]>([])
  const [focus, setFocus] = useState(false)

  function removeTag(tagForDelete: {label: string, value: string}) {
    console.log(tagForDelete)
    let newTags = tags.filter(tag => tag.value !== tagForDelete.value)
    return setTags(newTags)
  }
  return (
    <StyledTagsInput>
      <Tags onClick={() => setFocus(!focus)}>
        {!tags.length && <span style={{color: "#AAA", fontSize: "16px"}}>{placeholder}</span>}
        {tags.map((tag) => <Tag onClick={() =>removeTag(tag)}>{tag.label}</Tag>)}
      </Tags>
      <div style={{display: focus ? "block" : "none"}}>
        <DropdownInput
          options={options}
          staticOptions clearOnBlur
          onChange={(option) => setTags([...tags, option])}
          onBlur={() => setFocus(false)}

        />
      </div>
    </StyledTagsInput>
  )
}

const StyledTagsInput = styled.div`
  width: 100%
`

const Tags = styled.div`

  border: 4px solid darkgray;
  padding: 0.6em;
  min-height: 1.8em;
`

const Tag = styled.span`
  display: inline-block;
  padding: 0.2em 0.4em;
  margin: 0 0.2em;
  
  
  background-color: #61dafb;
`