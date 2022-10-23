const addFive = require("./addFive");

test("returns the number + 5", () => {
  expect(addFive(1)).toBe(6);
});

//run by -> npm run test

// the file name must be sth.test.js
