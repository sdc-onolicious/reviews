var fs = require('fs');
var stream = fs.createWriteStream(__dirname + '/reviewstest.csv');
var i = 0;
var casual = require('casual');
var start = new Date()
var hrstart = process.hrtime()
// id, restaurant, diner, text, overall, food, service, ambience, wouldrecommend, tags
casual.define('review', function() {
  return {
    restaurant: casual.integer(from = 0, to = 100000000),
    diner: casual.integer(from = 0, to = 10000000),
    text: casual.description,
    overall: casual.integer(from = 0, to = 5), 
    service: casual.integer(from = 0, to = 5),
    ambience: casual.integer(from = 0, to = 5),
    wouldrecommend: casual.coin_flip,
  };
});

// `${casual.integer(from = 0, to = 100000000)},
// ${casual.integer(from = 0, to = 10000000)},
// ${casual.integer(from = 0, to = 10000000)},
// ${casual.text},
// ${casual.integer(from = 0, to = 5)},
// ${casual.integer(from = 0, to = 5)},
// ${casual.integer(from = 0, to = 5)},
// ${casual.random_element(['Quiet', 'Average', 'Loud'])},
// ${casual.}
// ${casual.coin_flip}\n`
stream.write('id, restaurant, diner, text, overall, food, service, ambience, wouldrecommend, tags\n');

function write() {
  
  while (i < 100) { 
    if (!stream.write(
     `${i},${casual.integer(from = 0, to = 100000000)},${casual.integer(from = 0, to = 10000000)},${casual.text},${casual.integer(from = 0, to = 5)},${casual.integer(from = 0, to = 5)},${casual.integer(from = 0, to = 5)},${casual.coin_flip}\n`
    )){
      return;
    } else {
      i += 1;
    }
  }
  var end = new Date() - start,
  hrend = process.hrtime(hrstart)
  console.info('Execution time: %dms', end)
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
  stream.end();
}

stream.on('drain', function() {
  console.log('drain', i);
  write();
  // creates an event listener that listens for 'drain'
  // when internal buffer is empty, it will create a drain event. 
});

write();
