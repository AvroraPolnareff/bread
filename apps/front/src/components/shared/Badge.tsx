import React, {FC, useMemo} from 'react';
import styled from "styled-components";
import stc from "string-to-color";

export const Badge : FC<{big?: boolean, color?: string, autoColor?: boolean}> = ({children, big, color, autoColor}) => {
  const badgeColor = useMemo(() => {
    if (color) {
      return color
    } else if (autoColor) {
      return stc(children)
    } else {
      return undefined
    }
  }, [children, color])
  return (
    <StyledBadge large={big} color={badgeColor}>
      {children}
    </StyledBadge>
  )
}


const StyledBadge = styled.span<{large?: boolean, color?: string}>`
  display: inline-block;
  padding: 0.2em 0.1em;
  margin: 0.2em 0.2em;
  border-radius: 0.05em;
  ${({large}) => large && "font-weight: 1.5em"};
  ${({color}) => color && `background-color: ${color}`};
  
`
