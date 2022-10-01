const fc = require("fast-check");
const clapify = require(".");
const test = require("node:test");
const assert = require("node:assert");

test("it does not modify text without space symbols", () => {
  assert.equal(clapify(`test`), "test");
});

test("replaces single space with clap emoji", () => {
  assert.equal(clapify(`test test`), "test👏test");
});

test("replaces newline with clap emoji", () => {
  assert.equal(
    clapify(`test
test`),
    "test👏test"
  );
});

test("replaces multiple spaces in text with a single clap emoji", () => {
  assert.equal(clapify(`test test  test`), "test👏test👏test");
});

test("works as expected with example from readme", () => {
  assert.equal(clapify(`this is not a joke`), "this👏is👏not👏a👏joke");
});

test("it is idempotent", () =>
  fc.assert(
    fc.property(fc.lorem(), (text) => {
      const clapifiedOnce = clapify(text);
      return clapifiedOnce === clapify(clapifiedOnce);
    })
  ));
