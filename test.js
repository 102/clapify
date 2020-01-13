const assert = require("assert");
const clapify = require(".");

assert.equal(clapify("test"), "test");
assert.equal(clapify("test test"), "test👏test");
assert.equal(
  clapify(
    `test
test`
  ),
  "test👏test"
);
assert.equal(clapify("test test  test"), "test👏test👏test");
assert.equal(clapify("this is not a joke"), "this👏is👏not👏a👏joke");
