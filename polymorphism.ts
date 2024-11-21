abstract class Vehicles {
  protected Brand: string;
  protected YearOfManufacture: number;
  protected TankCapacity: number;
  protected AmountOfDoors: number;
  protected Horn: string

  constructor(Brand: string, YearOfManufacture: number, TankCapacity: number, AmountOfDoors: number, Horn: string) {
    this.Brand = Brand;
    this.YearOfManufacture = YearOfManufacture;
    this.TankCapacity = TankCapacity;
    this.AmountOfDoors = AmountOfDoors;
    this.Horn = Horn;
  }
}

class Car extends Vehicles {
  constructor(Brand: string, YearOfManufacture: number, TankCapacity: number, AmountOfDoors: number, Horn: string) {
    super(Brand, YearOfManufacture, TankCapacity, AmountOfDoors, Horn);
  }

  cars(): string {
    return `This Vehicle drives well and its Brand is: ${this.Brand}, the Tank Capacity lies at ${this.TankCapacity} liters with ${this.AmountOfDoors} Doors, and it was built in ${this.YearOfManufacture}.`;
  }
}

class Truck extends Vehicles{
  private MaximumPullLoad: number
  constructor(Brand: string, YearOfManufacture: number, TankCapacity: number, AmountOfDoors: number, Horn: string, MaximumPullLoad: number) {
    super(Brand, YearOfManufacture, TankCapacity, AmountOfDoors, Horn);
    this.MaximumPullLoad = MaximumPullLoad
  }
  trucking(): string {
    return `This Vehicle drives well and its Brand is: ${this.Brand}, the Tank Capacity lies at ${this.TankCapacity} liters with ${this.AmountOfDoors} Doors, and it was built in ${this.YearOfManufacture}. Its Pull Load is ${this.MaximumPullLoad} kg`;

  }
}

const myCar = new Car("Ferrari", 2005, 40, 4, "BBEEEPP");
const myTruck = new Truck("Mercedes", 2001, 70, 2, "BOOOPP", 200)
console.log(myCar.cars());
console.log(myTruck.trucking())
