import Api, { API_ENDPOINT } from "./config"

const API_URL = API_ENDPOINT + "/api/random-data"

async function getRandomData() {
    try {
        let res = await Api.get(API_URL)
        res = await res.json()
        return res
    } catch (err) {
        throw err
    }
}

export const randomDataApi = {
    getRandomData,
}