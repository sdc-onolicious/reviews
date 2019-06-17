var fs = require('fs');
var stream = fs.createWriteStream(__dirname + '/diners.csv');
var i = 1;
var casual = require('casual');
var start = new Date()
var hrstart = process.hrtime()

stream.on('drain', function() {
  write();
});
write();

//  id | firstname | lastname | city | avatarcolor | isvip | totalreviews 

function write() {
  
  while (i < 1000001) { 
    if (!stream.write(
     `${i++},${casual.first_name},${casual.last_name},${casual.city},${casual.rgb_hex},${casual.coin_flip},${casual.integer(from=1, to=100)}\n`
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
