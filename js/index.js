"use strict";

class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  getMaxSize() {
    let max = 0;
    for (let key in this.dimensions) {
      max = Math.max(this.dimensions[key], max);
    }
    return max;
  }
  getAge() {
    return new Date().getFullYear() - this.manufactureDate;
  }
}

const bus1 = new Vehicle(
  { length: 13.8, widht: 2.5, heights: 3.8 },
  "Setra",
  "S416",
  2007
);
console.log("bus1 :>> ", bus1);
console.log("bus1.getAge :>> ", bus1.getAge());
console.log("bus1.getMaxSize :>> ", bus1.getMaxSize());

class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  set passengerCount(value) {
    if (value === "number" && Number.isNaN(value)) {
      throw "value must be a number";
    }
    if (value > this.passengerLimit) {
      throw "exceeding the limit";
    }
    this._passengerCount = value;
  }
  get passengerCount() {
    return this._passengerCount;
  }
  get addPassenger() {
    if (this.passengerCount < this.passengerLimit) {
      this.passengerCount++;
      return true;
    } else {
      return false;
    }
  }
}

try {
  const bus2 = new PassengerTransport(
    { length: 14.8, widht: 2.8, heights: 2.8 },
    "Setra",
    "S416",
    2002,
    55,
    55
  );
  console.log("bus2 :>> ", bus2);
  console.log("bus2.getAge :>> ", bus2.getAge());
  console.log("bus2.getMaxSize :>> ", bus2.getMaxSize());
  console.log("bus2.addPassenger() :>> ", bus2.addPassenger);
} catch (error) {
  console.log("error :>> ", error);
}

class freightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    if (weight === "number" && Number.isNaN(weight)) {
      throw "value must be a number";
    }
    if (weight <= this.capacity) {
      return true;
    }
    return false;
  }
}

try {
  const bus3 = new freightTransport(
    { length: 12.9, widht: 3.2, heights: 3.5 },
    "Setra",
    "S416",
    2013,
    12
  );
  console.log("bus3 :>> ", bus3);
  console.log("bus3.getAge :>> ", bus3.getAge());
  console.log("bus3.getMaxSize :>> ", bus3.getMaxSize());
  console.log("bus3.addPassenger() :>> ", bus3.checkLoadingPossibility(12));
} catch (error) {
  console.log("error :>> ", error);
}
