const path = require('path');
const fs = require('fs');
const rootPath = path.resolve(__dirname, '..');

const storeFile = (file, folder) => {
  let tmp_path = file.path;
  let originalExt = file.originalname.split('.').pop();
  let filename = file.filename + '.' + originalExt;
  let target_path = path.resolve(rootPath, 'public/' + folder + '/' + filename);

  const src = fs.createReadStream(tmp_path);
  const dest = fs.createWriteStream(target_path);

  src.pipe(dest);

  src.on('error', err => {
    fs.unlink(tmp_path, err => {
      if (err) throw err;
    });
  });

  src.on('end', () => {
    fs.unlink(tmp_path, err => {
      if (err) throw err;
      console.log("File uploaded!");
    });
  });

  return filename;

}

const destroyFile = (file, folder) => {
  let target_path = path.resolve(rootPath, 'public/' + folder + '/' + file);
  return fs.unlink(target_path, err => {
    if (err) throw err;
    console.log('File deleted!');
    return true;
  });
}

module.exports = {
  storeFile,
  destroyFile
}

