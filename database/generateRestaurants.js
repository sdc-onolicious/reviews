
var fs = require('fs');
var stream = fs.createWriteStream(__dirname + '/restaurants.csv');
var i = 1;
var casual = require('casual');
var start = new Date()
var hrstart = process.hrtime()

stream.on('drain', function() {
  write();
});
write();

// id | name | location | noise | recommendpercent | averageoverall | averageservice | averageambience | averagefood | valuerating 

function write() {
  
  while (i < 10000001) { 
    if (!stream.write(
     `${i++},${casual.title},"${casual.city}",${casual.random_element(['Quiet','Loud','Average'])},${casual.integer(from = 1, to = 100)},${casual.integer(from = 0, to = 4)}.${casual.integer(from = 0, to=9)},${casual.integer(from = 0, to = 4)}.${casual.integer(from = 0, to=9)},${casual.integer(from = 0, to = 4)}.${casual.integer(from = 0, to=9)},${casual.integer(from = 0, to = 4)}.${casual.integer(from = 0, to=9)},${casual.integer(from = 0, to = 4)}.${casual.integer(from = 0, to=9)}\n`
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

