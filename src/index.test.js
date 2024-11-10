const greet = require("./index");

test("greets the user", () => {
  expect(greet("World")).toBe("Hello, World!");
});
