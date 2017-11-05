const fs = require('fs');
const { Future } = require('ramda-fantasy');

const Result = (isError, data) => ({
  isError, data,
});
// public factories
Result.Success = val => Result(false, val);
Result.Error = err => Result(true, err);

const readFile = (file = '') => Future((reject, resolve) => {
  fs.readFile(file, 'utf8', (err, data) =>
    (err ?
      reject(Result.Error(err)) :
      resolve(Result.Success(data))));
});

module.exports = readFile;
