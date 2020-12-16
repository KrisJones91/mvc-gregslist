import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"

function _drawCars() {
  let cars = ProxyState.cars
  let template = ''
  cars.forEach(car => {
    // NOTE Getters FAKE properties as methods
    template += car.Template
  })
  document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor() {
    ProxyState.on("cars", _drawCars)
    _drawCars()
  }

  createCar() {
    window.event.preventDefault()
    console.log("creating car", 1)
    let form = window.event.target
    let newCar = {
      make: form['make'].value,
      model: form['model'].value,
      year: form['year'].value,
      price: form['price'].value,
      description: form['description'].value,
      imgUrl: form['imgUrl'].value
    }
    carsService.createCar(newCar)
    console.log(7)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    document.getElementById("new-car-modal").modal('hide');
  }


  deleteCar(id) {
    carsService.deleteCar(id)
  }
}