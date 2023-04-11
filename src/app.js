import GameSavingLoader from "./GamingSavingLoader.mjs"
import GameSavingLoaderAsync from "./GameSavingLoaderAsync.mjs"


let gsl = new GameSavingLoader()
gsl.load()

let gsl1 = new GameSavingLoaderAsync()
gsl1.load()
