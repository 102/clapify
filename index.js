/**
 * emphasizes text replacing all whitespace symbols sequences with a clap emoji
 *
 * @param {string} text
 */
function clapify(text) {
  return text.replace(/\s+/g, "👏");
}

module.exports = clapify;
