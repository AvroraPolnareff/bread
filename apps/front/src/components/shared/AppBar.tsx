import React, {FC} from "react";
import {UserStore} from "../../stores/UserStore";
import {observer} from "mobx-react";
import styled from "styled-components";


export const AppBar: FC<{userStore: UserStore}> = observer(({userStore}) => {
  return (
    <StyledAppBar>
      <AppBarContainer>
        <h1>Bread</h1>
      </AppBarContainer>
      <AppBarContainer>
        <DiscordName>
          <span>{userStore.user?.nickname}#{userStore.user?.discriminator}</span>
        </DiscordName>
        <Avatar src={userStore.user?.avatar} alt=""/>
      </AppBarContainer>
    </StyledAppBar>
  )
})

const StyledAppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  background-color: ${({theme}) => theme.colors.tertiary};
`

const AppBarContainer = styled.div`
  margin: 0 5em;
  display: flex;
  justify-content: space-between;
  & > * {
    margin: 0 0.5em;
  }
`

const DiscordName = styled.div`
  display: flex;
  align-items: center;
`

const Avatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`
