const fs = require('fs');
const input = fs.readFileSync('input-3.txt').toString().replace(/\r/g, '').split('\n');

const map = [];

for(let s of input) {
  let d = s.replace(/[#@:]/g, '').replace(/[x,]/, ' ').split(/[ x]+/).map(x=>parseInt(x)),
      id = d[0],
      x = d[1],
      y = d[2],
      w = d[3],
      h = d[4];
  for(let j = y; j < y + h; ++j) {
    map[j] = map[j] || [];
    for(let i = x; i < x + w; ++i) {
      map[j][i] = map[j][i] || {
        ids: [],
        count: 0
      };
      map[j][i].ids.push(id);
      map[j][i].count++;
    }
  }
}

let overlap = 0, d = [];

for(let j in map) {
  for(let i in map[j]) {
    if(map[j][i].count > 1) {
      overlap++;
      map[j][i].ids.forEach(id => {
        if(d.indexOf(id) === -1) {
          d.push(id);
        }
      })
    }
  }
}

console.log(overlap)

d = d.sort((a,b) => a-b).filter((i,p) => i !== p+1);

console.log(d[0]-1)