import json from "./parser.js";
import read from "./reader.js";
import GameSaving from "./GameSaving.js";

export default class GameSavingLoaderAsync {
    async load() {  
        let res1 = await read()
        let res2 = await json(res1)
        res2 = JSON.parse(res2)
        return new GameSaving(res2.id, res2.created, res2.userInfo) 
    }
}
