import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"

class CarsService {
  deleteCar(id) {
    ProxyState.cars = ProxyState.cars.filter(car => car.id != id)
  }
  createCar(newCar) {
    console.log("SERVICE: createCar")
    let car = new Car(newCar)
    ProxyState.cars = [...ProxyState.cars, car]
  }

}
// Singleton Pattern
export const carsService = new CarsService()