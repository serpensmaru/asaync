import json from "./parser.mjs";
import read from "./reader.mjs";

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