import axios from "axios"
import Pet from "../common/model/Pet";

export default class Api {
    public static getFeed(): Promise<Array<Pet>> {
        return axios.get("http://localhost:3001/feed").then(resp => resp.data)
    }
}