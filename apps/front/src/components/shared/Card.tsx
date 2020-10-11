import React, {FC} from "react";
import styled from "styled-components";

export const Card: FC = ({children}) => {
  return (
    <StyledCard>
      <Content>
        {children}
      </Content>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  border-radius: 0.05em;
  padding: 0.2em 0.4em 0.4em 0.2em;
  margin: 0.3em 0.5em;
  background-color: ${({theme}) => theme.colors.tertiary};
`

const Content = styled.div`
  border-radius: 0.05em;
  padding: 0.4em;
  background-color: white;
`
