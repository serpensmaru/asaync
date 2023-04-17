import GameSavingLoader from "../GamingSavingLoader.mjs";
import GameSavingLoaderAsync from "../GameSavingLoaderAsync.mjs";


test("test GameSaving", () => {
    let objGame = new GameSavingLoaderAsync().load()
    expect(objGame.id).toBe(9);
    expect(objGame.created).toBe(1546300800);
    expect(objGame.userInfo.name).toBe("Hitman");
})






