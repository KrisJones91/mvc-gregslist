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
        this.getHouses()
    }
    getHouses() {
        try {
            housesService.getHouses()
        } catch (error) {
            console.error(error)
        }
    }

    createHouse() {
        window.event.preventDefault()
        console.log("creating a house")
        let form = window.event.target
        let newHouse = {
            bedrooms: form['bedrooms'].value,
            bathrooms: form['bathrooms'].value,
            levels: form['levels'].value,
            year: form['year'].value,
            price: form['price'].value,
            description: form['description'].value,
            imgUrl: form['imgUrl'].value
        }
        housesService.createHouse(newHouse)
        // @ts-ignore
        form.reset()
        // @ts-ignore
        document.getElementById("new-house-modal").modal('hide')
        _drawHouses()

    }

    deleteHouse(id) {
        console.log(id)
        try {
            housesService.deleteHouse(id)
        } catch (error) {
            console.error(error)
        }
    }

    pool(id, price) {
        try {
            console.log(id, price)
            housesService.pool(id, price)
        } catch (error) {
            console.error(error)
        }
    }

    toilet(id, price) {
        try {
            housesService.toilet(id, price)
        } catch (error) {
            console.error(error)
        }
    }


    //GET ONE ITEM FROM SERVER -- UNNECESSARY HERE
    // getOne() {
    //     let id = ProxyState.cars[0].id
    //     housesService.getOne(id)
    // }

}