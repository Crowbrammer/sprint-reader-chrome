var expect = require("chai").expect;
global.$ = require("jquery")(window);

describe("Mocha", () => {
  it("Runs a test", () => {
    expect(true).to.equal(true);
  });
});

describe("It communicates with Sprint Reader", function() {
  var splitTextToArray_FirstPass = require("../src/engine")
    .splitTextToArray_FirstPass;
  it("Understands the splitText array", () => {
    console.log(splitTextToArray_FirstPass("Hello"));
    var selectedText = "Hello, this is my test text string";
    var textArray = splitTextToArray_FirstPass(selectedText);
    expect(textArray).to.equal([
      "Hello,",
      "this",
      "is",
      "my",
      "test",
      "text",
      "string"
    ]);
  });
});
