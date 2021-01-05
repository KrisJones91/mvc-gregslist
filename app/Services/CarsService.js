import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from "./AxiosService.js"

class CarsService {

  async getCars() {
    let res = await api.get("cars")
    console.log(res.data)
    ProxyState.cars = res.data.map(c => new Car(c))
  }

  async createCar(newCar) {
    let car = await api.post("cars", newCar)
    console.log(car);

    // ProxyState.cars = [...ProxyState.cars, new Car(car.data)]

    this.getCars()
  }


  async deleteCar(id) {
    let res = await api.delete("cars/" + id)
    console.log(res)

    ProxyState.cars = ProxyState.cars.filter(car => car.id != id)

    // this.getCars()

  }

  async bid(id, newPrice) {
    let carData = { price: newPrice }
    let res = await api.put("cars/" + id, carData)

    //THIS MADE ALL BUTTONS ACT ON CARDS UNTIL REFRESH PAGE

    // let oldCarIndex = ProxyState.cars.findIndex(c => c.id == id)

    // let temp = ProxyState.cars
    // temp.splice(oldCarIndex, 1, new Car(res.data))
    // ProxyState.cars = temp

    this.getCars()

  }

}




// Singleton Pattern
export const carsService = new CarsService()