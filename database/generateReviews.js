var fs = require('fs');
var stream = fs.createWriteStream(__dirname + '/reviews.csv');
var i = 1;
var casual = require('casual');
var start = new Date()
var hrstart = process.hrtime()

function generateTags() {
  var foodWords = ['pot roast', 'chicken', 'sushi', 'marshmallows', 'pumpkin pie', 'wine']
  var tagWords = ['groups', 'kids', 'gluten free', 'vegan']
  var tags = '';
  function getRandomFoodWord() {
    return foodWords[Math.floor(Math.random() * foodWords.length)];
  }
  function getRandomTagWord() {
    return tagWords[Math.floor(Math.random() * tagWords.length)];
  }
  for (let j = 0; j < 2; j++) {
    if (Math.random() > 0.8) {
      if (tags[0]) {
        tags += ',';
      }
      tags += getRandomFoodWord();
      if (Math.random() > 0.9) {
        tags += `,${getRandomTagWord()}`;
      }
    }
  }
  return tags;
}

stream.on('drain', function() {
  write();
});
write();

//  id | restaurant | diner | text | date | overall | food | service | ambience | wouldrecommend | tags 
function write() {
  
  while (i < 100000001) { 
    if (!stream.write(
     `${i++},${casual.integer(from = 1, to = 10000000)},${casual.integer(from = 1, to = 1000000)},${casual.text},${casual.date(format = 'YYYY-MM-DD')},${casual.integer(from = 0, to = 5)},${casual.integer(from = 0, to = 5)},${casual.integer(from = 0, to = 5)},${casual.integer(from = 1, to = 3)},${casual.coin_flip},"${generateTags()}"\n`
    )){
      return;
    }
  }
  var end = new Date() - start,
  hrend = process.hrtime(hrstart)
  console.info('Execution time: %dms', end)
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
  stream.end();
}
