const path = require('path');
const test = require('blue-tape');
const main = require('scripts');

test('resolved', (t) => {
  const file = (path.resolve(process.cwd(), 'src/fake-data.txt'));
  main(file)
    .fork(
      () => {},
      ({ isError = false }) => {
        const actual = isError;
        const expect = false;
        t.equal(actual, expect);
      },

    );
  t.end();
});

test('rejected', (t) => {
  const file = (path.resolve(process.cwd(), 'src/-fake-data.txt'));
  main(file)
    .fork(
      ({ isError = false }) => {
        const actual = isError;
        const expect = true;
        t.equal(actual, expect);
      },
      () => {},
    );
  t.end();
});


test('length', (t) => {
  const file = (path.resolve(process.cwd(), 'src/fake-data.txt'));
  main(file)
    .map(obj => obj.data)
    .map(str => str.length)
    .fork(
      () => {},
      (n = 0) => {
        const actual = n;
        const expect = 13;
        t.equal(actual, expect);
      },
    );
  t.end();
});
