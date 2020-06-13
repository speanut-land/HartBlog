const fs = require('fs');
fs.readdir('./', (err, files) => {
  // let regexp = /(?<!@2x|(@2x\(\d\))).png/;
  // let saveName = files.filter(file => regexp.test(file));
  // console.log(saveName);
  files.forEach(val => {
    let cc = val.replace(/@2x/, '');
    console.log(cc);
    rename(val, cc);
  });
  // saveName.forEach(name => {
  //   deleteFile(name);
  // });
});
function deleteFile(name) {
  fs.unlink(name, err => {
    if (err) throw err;
  });
}

function rename(oldPath, newPath) {
  fs.rename(oldPath, newPath, function (err) {
    if (err) console.log('ERROR: ' + err);
  });
}
