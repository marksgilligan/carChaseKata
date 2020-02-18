const { chase } = require("./app");

test("You should get caught", () => {
  const actual = chase(40, 40, 40, 40, false);
  const expected = "You've been caught!";
  expect(actual).toBe(expected);
});

test("You get away", () => {
  const actual = chase(10, 10, 39, 40, false);
  const expected = "You got away!";
  expect(actual).toBe(expected);
});

test("You should get caught", () => {
  const actual = chase(60, 70, 70, 70, true);
  const expected = "You've been caught!";
  expect(actual).toBe(expected);
});

test("You get away", () => {
  const actual = chase(60, 70, 70, 70, false);
  const expected = "You got away!";
  expect(actual).toBe(expected);
});

test("You should get caught", () => {
  const actual = chase(10, 10, 40, 39, false);
  const expected = "You've been caught!";
  expect(actual).toBe(expected);
});
