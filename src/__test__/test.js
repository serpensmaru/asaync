import GameSavingLoader from "../GamingSavingLoader";
import GameSavingLoaderAsync from "../GameSavingLoaderAsync";


test("test GameSavingLoaderAsync", async () => {
    let objGame = new GameSavingLoaderAsync()
    let res = await objGame.load()
    expect(res.id).toBe(9);
    expect(res.created).toBe(1546300800);
    expect(res.userInfo.name).toBe("Hitman");
})


test("test GamingSavingLoader",  async () => {
    let obj = await new GameSavingLoader()
    let res = await obj.load()
    expect(res.id).toBe(9);
    // done()
})






