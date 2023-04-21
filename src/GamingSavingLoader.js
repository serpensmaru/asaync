import { resolve } from "core-js/fn/promise";
import json from "./parser.js";
import read from "./reader.js";

export default class GameSavingLoader {
    load() {  
    read().then((res) => {
        return json(res)
    }).then((result) => {
        let res_obj = JSON.parse(result)
        this.id = res_obj.id
        this.created = res_obj.created
        this.userInfo = res_obj.userInfo
        console.log(this)
        return this
    })
  }
}