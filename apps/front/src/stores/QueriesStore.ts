import {MarketUrlDto} from "@bread/shared";
import Axios from "axios";
import {makeAutoObservable} from "mobx";

const API_URL = process.env.REACT_APP_SERVER_URL

export class QueriesStore {
  queries: MarketUrlDto[] = []
  state: "pending" | "done" | "error" = "pending"

  constructor() {
    makeAutoObservable(this)
  }

  fetchQueries() {
    if (this.queries.length) {
      return
    } else {
      Axios.get<MarketUrlDto[]>(API_URL + "/rivenhunter/current_user")
        .then(res => {
          this.queries = res.data
          this.state = "done"
        })
        .catch(err => {
          this.state = "error"
        })
    }
  }

  removeQuery(id: number) {
    Axios.delete(API_URL + "/rivenhunter/" + id)
      .then(res => {
        this.queries = this.queries.filter((el) => el.id !== id)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
