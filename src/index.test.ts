import { sum, sub } from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 3 - 1 to equal 2", () => {
  expect(sub(3, 1)).toBe(2);
});

test("sub should return 0 if first argument is lower than second argument", () => {
  expect(sub(2, 5)).toBe(0);
});
