import json from "./parser.js";
import read from "./reader.js";
import GameSaving from "./GameSaving.js";


class GameSavingLoader {
    load() {  
    read().then(res => {
        return json(res)
    }).then((result) => {
        let res_obj = JSON.parse(result)
        result = new GameSaving(res_obj.id, res_obj.created, res_obj.userInfo)
        console.log(result)
        resolve(result)
    })
  }
}

let gsl = new GameSavingLoader()

async () => {
    let x = await gsl.load()
    console.log(x)
}