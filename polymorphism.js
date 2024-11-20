var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(Brand, YearOfManufacture, TankCapacity, AmountOfDoors, Horn) {
        this.Brand = Brand;
        this.YearOfManufacture = YearOfManufacture;
        this.TankCapacity = TankCapacity;
        this.AmountOfDoors = AmountOfDoors;
        this.Horn = Horn;
    }
    return Vehicles;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(Brand, YearOfManufacture, TankCapacity, AmountOfDoors, Horn) {
        return _super.call(this, Brand, YearOfManufacture, TankCapacity, AmountOfDoors, Horn) || this;
    }
    Car.prototype.cars = function () {
        return "This Vehicle drives well and its Brand is: ".concat(this.Brand, ", the Tank Capacity lies at ").concat(this.TankCapacity, " liters with ").concat(this.AmountOfDoors, " Doors, and it was built in ").concat(this.YearOfManufacture, ".");
    };
    return Car;
}(Vehicles));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(Brand, YearOfManufacture, TankCapacity, AmountOfDoors, Horn, MaximumPullLoad) {
        var _this = _super.call(this, Brand, YearOfManufacture, TankCapacity, AmountOfDoors, Horn) || this;
        _this.MaximumPullLoad = MaximumPullLoad;
        return _this;
    }
    Truck.prototype.trucking = function () {
        return "This Vehicle drives well and its Brand is: ".concat(this.Brand, ", the Tank Capacity lies at ").concat(this.TankCapacity, " liters with ").concat(this.AmountOfDoors, " Doors, and it was built in ").concat(this.YearOfManufacture, ". Its Pull Load is ").concat(this.MaximumPullLoad, " kg");
    };
    return Truck;
}(Vehicles));
var myCar = new Car("Ferrari", 2005, 40, 4, "BBEEEPP");
var myTruck = new Truck("Mercedes", 2001, 70, 2, "BOOOPP", 200);
console.log(myCar.cars());
console.log(myTruck.trucking());
