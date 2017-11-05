const test = require('tape');
const main = require('scripts');

test('index', (t) => {
  const actual = main();
  const expect = true;
  t.ok(actual, expect);
  t.end();
});
