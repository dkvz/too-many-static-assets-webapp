const path = require('path');
const fs = require('fs');
const fileBase = '/wwwroot/js';

// Got this from here: 
// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateBigObject() {
  const vals = Array(Math.floor(Math.random() * 300));

  for (let i = 0; i < vals.length; i++) {
    vals[i] = `${makeid(12)}: "${makeid(30)}"`;
  }
  
  return `const obj1 = {
    ${vals.join(',\n')}
  };`;
}

//console.log(path.join(fileBase, 'test'));

for (let i = 0; i < 200; i++) {
  const data = `
    console.log('I am script number ' + i);

    // Big object to parse:
    ${generateBigObject()}
  `;
  fs.writeFileSync(path.join(fileBase, `gen${i}.js`), data);
}