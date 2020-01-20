const fc = require("fast-check");
const clapify = require(".");

it.each([
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
])("%s", (_, text, expected) => void expect(clapify(text)).toEqual(expected));

it("is idempotent", () =>
  fc.assert(
    fc.property(fc.lorem(), text => {
      const clapifiedOnce = clapify(text);
      return clapifiedOnce === clapify(clapifiedOnce);
    })
  ));
