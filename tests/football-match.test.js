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

it("now lost both games, now play outside", () => {
  const goalsFirstMatch = [0, 2];
  const goalsSecondMatch = [0, 3];
  const place = 1;

  const result = getGoalsToWin(goalsFirstMatch, goalsSecondMatch, place);

  expect(result).toBe(5);
});

it("now lost both games, now play home", () => {
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