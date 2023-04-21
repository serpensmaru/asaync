import GameSavingLoader from "./GamingSavingLoader"
import GameSavingLoaderAsync from "./GameSavingLoaderAsync"


let gsl = new GameSavingLoader()

async () => {
    let x = await gsl.load()
    console.log(x)
}


// let gsl1 = new GameSavingLoaderAsync()
// gsl1.load()
