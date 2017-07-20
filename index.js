const gkm = require('gkm');
const fs = require('fs');

const date = require('./lib/date');
const filepath = `./data/data-${date.day}.${date.month}.${date.year}-${date.hour}.${date.minutes}.json`;

const keys = {};

function saveData() {
  fs.writeFile(filepath, JSON.stringify(keys), err => {
    if (err) console.log(err);
    else return;
  })
}

gkm.events.on('key.*', data => {
  const button = data[0];
  
  if (gkm.events.event === 'key.released') {
    keys[button] ? keys[button] += 1 : keys[button] = 1;

    saveData();
    console.log(keys);
  }
});
