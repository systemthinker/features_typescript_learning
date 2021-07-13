class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }

  private drive(): void {
    console.log('vroom');
  }
}

const car = new Car(4, 'red');

car.startDrivingProcess();
console.log(car.color);
