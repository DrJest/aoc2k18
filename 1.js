const fs = require('fs');
const input = fs.readFileSync('input-1.txt').toString().split('\n');

let f = 0;
let fz = [];

for (let i of input) {
  f = eval(`${f} ${i}`);
}

console.log(f);

f = 0;
while(1) {
  for (let i of input) {
    f = eval(`${f} ${i}`);
    if(fz.indexOf(f) >= 0) {
      console.log(f);
      process.exit();
    }
    fz.push(f);
  }
}
