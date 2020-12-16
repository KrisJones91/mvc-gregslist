import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"


class HousesService {
    deleteHouse(id) {
        console.log(ProxyState.houses)
        ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
        console.log(ProxyState.houses)
    }
    createHouse(newHouse) {
        console.log("SERVICE: createHouse")
        let house = new House(newHouse)
        ProxyState.houses = [...ProxyState.houses, house]
    }

}

export const housesService = new HousesService()