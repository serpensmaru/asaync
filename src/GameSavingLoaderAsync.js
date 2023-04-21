import json from "./parser.js";
import read from "./reader.js";


export default class GameSavingLoaderAsync {
    async load() {  
        let res1 = await read()
        let res2 = await json(res1)
        res2 = JSON.parse(res2)
        this.id = res2.id
        this.created = res2.created
        this.userInfo = res2.userInfo
        return this
    }
}
