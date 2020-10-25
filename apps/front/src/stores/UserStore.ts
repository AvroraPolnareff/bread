import {BreadUserDto} from "@bread/shared";
import Axios from "axios";
import {makeAutoObservable} from "mobx"

export class UserStore {
  user: BreadUserDto | null = null
  state: "pending" | "done" | "error" = "pending"

  constructor() {
    makeAutoObservable(this)
    this.fetchUser()
  }

  fetchUser() {
    this.user = null
    this.state = "pending"
    Axios.get<BreadUserDto>("http://localhost:3000/api/v1/users/current")
      .then(res => {
        this.user = res.data
        this.state = "done"
      })
      .catch((err) => {
        console.log(err)
        this.state = "error"
      })
  }

  notNew() {
    Axios.put<BreadUserDto>("http://localhost:3000/api/v1/users/current", {newUser: false})
      .then(res => {
        this.user = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const userStore = new UserStore()
