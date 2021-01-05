import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from "./AxiosService.js"


class HousesService {

    async getHouses() {
        let res = await api.get("houses")
        console.log(res.data)
        ProxyState.houses = res.data.map(h => new House(h))
    }


    async createHouse(newHouse) {
        let house = await api.post("houses", newHouse)
        console.log(house)

        ProxyState.houses = [...ProxyState.houses, new House(house.data)]
    }

    async deleteHouse(id) {
        let res = await api.delete('houses/' + id)
        console.log(res)
        ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)

    }

    async pool(id, newPrice) {
        let houseData = { price: newPrice }
        let res = await api.put("houses/" + id, houseData)
        console.log(res)
        // THIS MAKES ALL CHANGE UNTIL REFRESH
        // let badHouseIndex = ProxyState.cars.findIndex(h => h.id == id)

        // let temp = ProxyState.houses
        // temp.splice(badHouseIndex, 1, new House(res.data))
        // ProxyState.houses = temp
    }

    //IF WANTING TO PULL INDIVIDUAL ITEM FROM SERVER
    // async getOne(id) {
    //     let res = await api.get("houses/" + id)
    //     console.log(res)
    //}


    async toilet(id, newPrices) {
        let houseDatas = { price: newPrices }
        let res = await api.put("houses/" + id, houseDatas)
        console.log(res)

    }




}

export const housesService = new HousesService()