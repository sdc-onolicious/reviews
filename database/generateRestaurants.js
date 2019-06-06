const Faker = require('faker');
var start = new Date()
var hrstart = process.hrtime()

const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
const csvWriter = createCsvWriter({  
  path: 'restaurants.csv',
  header: [
    {id: 'name', title: 'Name'},
    {id: 'location', title: 'Location'},
    {id: 'noise', title: 'Noise'},
    {id: 'recommendpercent', title: 'Recommend Percent'},
    {id: 'averageoverall', title: 'Average Overall'},
    {id: 'averageservice', title: 'Average Service'},
    {id: 'averageambience', title: 'Average Ambience'},
    {id: 'averagefood', title: 'Average Food'},
    {id: 'valuerating', title: 'Value Rating'},
  ]
});
const noiseLevels = ['Quiet', 'Average', 'Loud']
function getRandomNoiseLevel() {
  return noiseLevels[Math.floor(Math.random() * noiseLevels.length)];
}
function fixFloatPrecision(float) {
  let number = float;
  if (typeof float !== 'string') {
    number = float.toString();
  }
  number = number.split('.');
  if (number[1]) {
    if (number[1].slice(0, 1) === '0') {
      return number[0];
    }
    return `${number[0]}.${number[1].slice(0, 1)}`;
  }
  return number[0];
}

const restaurants = [];

for (let i = 0; i < 10000000; i++) {
  const restaurant = {};
  restaurant.name = Faker.lorem.word();
  restaurant.location = Faker.address.city().replace(/'/g, '');
  restaurant.noise = getRandomNoiseLevel();
  restaurant.location = Faker.address.city().replace(/'/g, '');
  restaurant.averageoverall = fixFloatPrecision(Faker.random.number({ min: 0, max: 5, precision: 0.1 }));
  restaurant.averageservice = fixFloatPrecision(Faker.random.number({ min: 0, max: 5, precision: 0.1 }));
  restaurant.averageambience = fixFloatPrecision(Faker.random.number({ min: 0, max: 5, precision: 0.1 }));
  restaurant.averagefood = fixFloatPrecision(Faker.random.number({ min: 0, max: 5, precision: 0.1 }));
  restaurant.valuerating = fixFloatPrecision(Faker.random.number({ min: 0, max: 5, precision: 0.1 }));
  restaurant.recommendpercent = Faker.random.number({ min: 0, max: 100 });
  restaurants.push(restaurant);
}

csvWriter  
  .writeRecords(restaurants)
  .then(()=> {
    
    console.log('The CSV file was written successfully')
  });

var end = new Date() - start,
hrend = process.hrtime(hrstart)
console.info('Execution time: %dms', end)
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
// var end = new Date() - start,
// hrend = process.hrtime(hrstart)
// console.info('Execution time: %dms', end)
// console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
