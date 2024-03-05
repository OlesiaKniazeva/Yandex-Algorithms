const { getGoalsToWin } = require("../src/football-match");

it("now goals amount the same, now play outside", () => {
  const goalsFirstMatch = [0, 0];
  const goalsSecondMatch = [0, 0];
  const place = 1;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(1);
});

it("now goals amount the same, now play home", () => {
  const goalsFirstMatch = [0, 0];
  const goalsSecondMatch = [0, 0];
  const place = 2;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(1);
});

it("now score less, now play outside", () => {
  const goalsFirstMatch = [0, 2];
  const goalsSecondMatch = [0, 3];
  const place = 1;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(5);
});

it("now score less, now play home", () => {
  const goalsFirstMatch = [0, 2];
  const goalsSecondMatch = [0, 3];
  const place = 2;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(6);
});

it("now win one game, no goals needed", () => {
  const goalsFirstMatch = [2, 0];
  const goalsSecondMatch = [2, 2];
  const place = 2;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(0);
});

it("same goals amount, now outside", () => {
  const goalsFirstMatch = [1, 3];
  const goalsSecondMatch = [4, 2];
  const place = 1;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(0);
});

it("same goals amount, now at home", () => {
  const goalsFirstMatch = [1, 3];
  const goalsSecondMatch = [4, 2];
  const place = 2;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(1);
});

it("maximally lose, now at home", () => {
  const goalsFirstMatch = [0, 5];
  const goalsSecondMatch = [0, 5];
  const place = 2;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(11);
});

it("maximally lose, now outside", () => {
  const goalsFirstMatch = [0, 5];
  const goalsSecondMatch = [0, 5];
  const place = 1;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(10);
});

it("equal goals, playing home", () => {
  const goalsFirstMatch = [2, 2];
  const goalsSecondMatch = [1, 1];
  const place = 2;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(0);
});

it("equal goals, playing outside", () => {
  const goalsFirstMatch = [2, 2];
  const goalsSecondMatch = [1, 1];
  const place = 1;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(1);
});

it("equal goals, playing home", () => {
  const goalsFirstMatch = [5, 2];
  const goalsSecondMatch = [2, 5];
  const place = 2;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(1);
});

it("equal goals, playing home", () => {
  const goalsFirstMatch = [5, 2];
  const goalsSecondMatch = [0, 3];
  const place = 2;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(0);
});

it("losing, playing home, win in guests", () => {
  const goalsFirstMatch = [5, 4];
  const goalsSecondMatch = [0, 3];
  const place = 2;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(2);
});

it("losing, playing home, lose in guests", () => {
  const goalsFirstMatch = [2, 4];
  const goalsSecondMatch = [0, 5];
  const place = 2;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(8);
});

it("losing, playing home, lose in guests", () => {
  const goalsFirstMatch = [0, 1];
  const goalsSecondMatch = [0, 3];
  const place = 2;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(5);
});


it("losing, playing outside, with equal will lose the game", () => {
  const goalsFirstMatch = [5, 2];
  const goalsSecondMatch = [0, 5];
  const place = 1;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(3);
});


it("losing, playing outside", () => {
  const goalsFirstMatch = [1, 2];
  const goalsSecondMatch = [2, 3];
  const place = 1;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(2);
});
