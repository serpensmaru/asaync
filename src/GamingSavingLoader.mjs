import json from "./parser.mjs";
import read from "./reader.mjs";

export default class GameSavingLoader {
    load() {  
    read().then((res) => {
        return json(res)
    }).then((result) => {
        let res_obj = JSON.parse(result)
        console.log(res_obj)
        return res_obj
    })
  }
}