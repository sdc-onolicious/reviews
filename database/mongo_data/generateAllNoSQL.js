
var fs = require('fs');
var stream = fs.createWriteStream(__dirname + '/restaurantsreviewsusers.json');
var i = 1;
var casual = require('casual');
var start = new Date()
var hrstart = process.hrtime()

stream.on('drain', function() {
  write();
});
write();

// id | name | location | noise | recommendpercent | averageoverall | averageservice | averageambience | averagefood | valuerating 

function create10Reviews() {
  arr = [];
  for (let j = 1; j <= 10; j++) {
    arr.push({
      _id :j,
      restaurant: casual.integer(from = 1, to = 10000000),
      diner: casual.integer(from = 1, to = 1000000),
      text: casual.sentence,
      date: casual.date(format = 'YYYY-MM-DD'),
      overall: casual.integer(from = 0, to = 5),
      food: casual.integer(from = 0, to = 5),
      service: casual.integer(from = 0, to = 5),
      ambience: casual.integer(from = 1, to = 3),
      wouldrecommend: casual.coin_flip,
      tags: generateTags(),
      diner: {
        firstname: casual.first_name,
        lastname: casual.last_name,
        city: casual.city,
        avatarcolor: casual.rgb_hex,
        isvip: casual.coin_flip,
        totalreviews: casual.integer(from=1, to=100)
      }
    })
  }
  return arr;
}

function write() {  
  while (i <= 10000000) { 
    if (!stream.write(JSON.stringify({
      _id: i++,
      name: casual.title,
      location: casual.city,
      noise: casual.random_element(['Quiet','Loud','Average']),
      recommendpercent: casual.integer(from = 1, to = 100),
      averageoverall: `${casual.integer(from = 0, to = 4)}.${casual.integer(from = 0, to=9)}`,
      averageservice: `${casual.integer(from = 0, to = 4)}.${casual.integer(from = 0, to=9)}`,
      averageambience: `${casual.integer(from = 0, to = 4)}.${casual.integer(from = 0, to=9)}`,
      averagefood: `${casual.integer(from = 0, to = 4)}.${casual.integer(from = 0, to=9)}`,
      valuerating: `${casual.integer(from = 0, to = 4)}.${casual.integer(from = 0, to=9)}`,
      reviews: create10Reviews()
    }))){
      return;
    }
  }
  var end = new Date() - start,
  hrend = process.hrtime(hrstart)
  console.info('Execution time: %dms', end)
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
  stream.end();
}

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