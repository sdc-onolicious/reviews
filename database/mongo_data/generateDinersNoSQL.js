var fs = require('fs');
var stream = fs.createWriteStream(__dirname + '/diners.json');
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
  
  while (i <= 1000000) { 
    if (!stream.write(JSON.stringify({
        _id: i++,
        firstname: casual.first_name,
        lastname: casual.last_name,
        city: casual.city,
        avatarcolor: casual.rgb_hex,
        isvip: casual.coin_flip,
        totalreviews: casual.integer(from=1, to=100)
      }))) {
        return;
    }
  }
  var end = new Date() - start,
  hrend = process.hrtime(hrstart)
  console.info('Execution time: %dms', end)
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
  stream.end();
}
