import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
    let houses = ProxyState.houses
    let template = ''
    houses.forEach(house => {
        template += house.Template
    })
    document.getElementById('houses').innerHTML = template
}

export default class HousesController {
    constructor() {
        ProxyState.on("houses", _drawHouses)
        _drawHouses()
    }

    createHouse() {
        window.event.preventDefault()
        console.log("creating a house")
        let form = window.event.target
        let newHouse = {
            company: form['company'].value,
            jobTitle: form['jobTitle'].value,
            hours: form['hours'].value,
            rate: form['rate'].value,
            description: form['description'].value,
            imgUrl: form['imgUrl'].value
        }
        housesService.createHouse(newHouse)
        // @ts-ignore
        form.reset()
        // @ts-ignore
        document.getElementById("new-house-modal").modal('hide')


    }






    deleteHouse(id) {
        housesService.deleteHouse(id)
    }
}