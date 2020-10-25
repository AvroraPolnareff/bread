import React, {FC} from 'react'
import { observer } from "mobx-react"
import styles from './AuthComponent.module.css'
import {UserStore} from "../../stores/UserStore";

const OAUTH_URL = process.env.REACT_APP_OAUTH_URL

export const AuthComponent: FC<{userStore: UserStore}> = observer(({userStore, children}) => {
  function renderComponent() {
    switch (userStore.state) {
      case "pending":
        return <Loading />
      case "done":
        return children
      case "error":
        return <Login/>
    }
  }
  return <>{renderComponent()}</>
})

const Loading = () => <h1>Loading...</h1>

const Login = () => {
  return (
    <div>
      <a href={OAUTH_URL}>log in</a>
    </div>
  )
}
