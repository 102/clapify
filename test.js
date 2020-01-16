const assert = require("assert");
const clapify = require(".");

const testEqual = (message, a, b) => {
  try {
    assert.equal(a, b);
    console.log(`PASS ${message}`);
  } catch (error) {
    console.error(`FAIL ${message} with values "%s" "%s"`, a, b);
    process.exitCode = 1;
  }
};

[
  ["does not modify text without space symbols", "test", "test"],
  ["replaces single space with clap emoji", "test test", "test👏test"],
  [
    "replaces newline with clap emoji",
    `test
test`,
    "test👏test"
  ],
  [
    "replaces multiple spaces in text with a single clap emoji",
    "test test  test",
    "test👏test👏test"
  ],
  [
    "works as expected with example from readme",
    "this is not a joke",
    "this👏is👏not👏a👏joke"
  ]
].forEach(([message, text, expected]) => {
  testEqual(message, clapify(text), expected);
});
