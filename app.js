const rider = {
  name: 'Valentino Rossi',
  team: 'Movistar Yamaha Factory Racing',
  bike: 'M1',
  numbersOftitles: 9,
  number: 46,
  topSpeed: (speed, acceleration) => {
    return this.speed + this.acceleration;
  }
};

console.log(rider);
