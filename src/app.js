import json from "./parser.js";
import read from "./reader.js";

class GameSavingLoader {
    load() {  
    read().then((res) => {
        // console.log(res)
        return new Promise((resolve) => {
            resolve(json(res))
        })
    }).then((result) => {
        console.log(result)
    })
  }
}

class GameSavingLoaderAsync {
    async load() {  
        let res1 = await read()
        let res2 = await json(res1)
        console.log(res2)
        return res2
    }
}


let gsl = new GameSavingLoader()
gsl.load()

let gsl1 = new GameSavingLoaderAsync()
gsl1.load()