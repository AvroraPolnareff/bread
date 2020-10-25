import React, {FC, useEffect, useMemo, useRef} from "react";
import styled from "styled-components";

export interface Group {
  type: "group"
  name: string
  items: Option[],
}

export interface Option {
  value: string,
  label: string
}

export interface DropdownListProps {
  options: (Group | Option)[],
  searchString: string,
  onSelect: (option: Option) => void
}


export const DropdownList: FC<DropdownListProps> = ({options, searchString, onSelect}) => {
  const displayedOptions = useMemo<JSX.Element[]>(() => {
    return parseOptions(options, searchString, onSelect);
  }, [options, searchString, onSelect]);

  return (
    <StyledDropdownList>
      {displayedOptions}
    </StyledDropdownList>
  )
}

const StyledDropdownList = styled.ul`
  max-height: 10rem;
  overflow-x: auto;
  padding: 0;
  margin: 0;
  z-index: 3;
`

const parseOptions = (
  options: (Group | Option)[],
  searchString: string,
  onSelect: (option: Option) => void,
) => {
  const result: JSX.Element[] = [];
  searchString = searchString.toLowerCase()
  for (let option of options) {
    if ("label" in option && option.label.toLowerCase().indexOf(searchString) !== -1) {
      // @ts-ignore
      result.push(<Entry
        selected={searchString}
        content={option.label}
        onClick={() => onSelect(option as Option)}
      />)
    } else if ("type" in option && option.type === "group") {
      const filteredItems = option.items.filter(item => item.label.toLowerCase().indexOf(searchString) !== -1)
      if (filteredItems.length) {
        result.push(<GroupHeader name={option.name}/>)
        for (let item of filteredItems) {
          result.push(<Entry
            selected={searchString}
            content={item.label}
            onClick={() => onSelect(item)}
          />)
        }
      }
    }
  }
  return result
}

interface EntryProps {
  selected: string,
  content: string,
  onClick?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
}

const Entry: FC<EntryProps> = ({selected, content, onClick, onBlur, onFocus}) => {
  const displayingString = useMemo<JSX.Element>(() => {
    if (selected) {
      let start = content.toLowerCase().indexOf(selected.toLowerCase())
      let end = start + selected.length
      return <span>{content.slice(0, start)}<b>{content.slice(start, end)}</b>{content.slice(end)}</span>
    } else return <span>{content}</span>
  }, [selected, content])
  return (
    <StyledEntry tabIndex={-1} onClick={onClick} onFocus={onFocus} onBlur={onBlur}>
      {displayingString}
    </StyledEntry>
  )
}

const StyledEntry = styled.li`
  list-style: none;
  padding: 0.4rem;
  margin: 0 auto;
  background-color: white;
  &:hover {
    background-color: #e3e3e3;
  }
`

const GroupHeader: FC<{ name: string }> = ({name}) => {
  return (
    <StyledGroupHeader>
      <span>{name}</span>
    </StyledGroupHeader>
  )
}

const StyledGroupHeader = styled(StyledEntry)`
  font-size: smaller;
  border-bottom: 1px solid #333333;
  &:hover {
    background-color: white;
  }
`



