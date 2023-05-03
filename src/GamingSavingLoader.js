import GameSaving from "./GameSaving.js";
import json from "./parser.js";
import read from "./reader.js";

export default class GameSavingLoader {
    load() {  
        read().then(res => {
            return json(res)
        }).then((result) => {
            let res_obj = JSON.parse(result)
            result = new GameSaving(res_obj.id, res_obj.created, res_obj.userInfo)
            return result
        })
    }
}