import { generateId } from "../Utils/GenerateId.js"

export default class House {
    constructor({ bedrooms, bathrooms, levels, imgUrl, year, price, description, id }) {
        this.id = id
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.levels = levels
        this.year = year
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
    }

    get Template() {
        return `
    <div class="col-md-4 col-6 mt-3">
        <div class="card">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.bedrooms} - ${this.bathrooms} - ${this.levels}</h4>
                <p class="card-text">${this.year}</p>
                <p class="card-text">${this.price}</p>
                <p class="card-text">${this.description}</p>
                <div class="row justify-content-center">
                    <div class="text-center m-1">
                        <button type="button" class="btn btn-info" onclick="app.housesController.pool('${this.id}', '${this.price + 500000}')">Add Pool</button>
                    </div>
                    <div class="text-center m-1">    
                        <button type="button" class="btn btn-dark" onclick="app.housesController.toilet('${this.id}', '${this.price -= 20000}')">Outhouse</button>
                    </div>
                    <div class="text-center m-1">   
                        <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Bulldoze</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }

}