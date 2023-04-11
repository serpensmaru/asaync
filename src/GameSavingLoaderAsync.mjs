import json from "./parser.mjs";
import read from "./reader.mjs";


export default class GameSavingLoaderAsync {
    async load() {  
        let res1 = await read()
        let res2 = await json(res1)
        res2 = JSON.parse(res2)
        console.log(res2)
        return res2
    }
}