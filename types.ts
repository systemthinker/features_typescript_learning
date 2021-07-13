let apples = 5;

apples = 10;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];

let myNums: number[] = [1, 2, 3];

let truths: boolean[] = [false, true, true];

let arrays: [string, number, boolean] = ['red', 1, false];

class Car {}

let carType: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

class House {}

let house: House = new House();

let phone: { screen: string; battery: boolean } = {
  screen: 'x-20',
  battery: true,
};

// function

const logNumber: (i: number) => void = (i: number) => {
  console.log('i = ', i);
};

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ['red', 'green', 'blue'];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// var whose type cannot be inferred

let numbers = [-10,-1,12]

let numberAboveZero: (boolean | number) = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
