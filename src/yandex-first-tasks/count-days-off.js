const fs = require("node:fs");

const daysToIndex = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

const indexToDays = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const monthsToIndex = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

program();

function getInput() {
  let fileContent = fs.readFileSync("./input.txt", "utf8");

  const result = fileContent.toString().split("\n");
  
  const datesAmount = Number(result[0]);
  const firstDate = result[datesAmount + 2];
  const firstDateIndex = Number(daysToIndex[firstDate]);
  
  let holidaysDates = result.slice(2, 2 + datesAmount).map((dateStr) => {
    let parts = dateStr.split(" ");
    return [monthsToIndex[parts[1]], Number(parts[0])];
  });  

  return [Number(result[1]), holidaysDates, firstDateIndex];
}

function sendOutput(result) {
  fs.writeFileSync("output.txt", result.toString());
}

function program() {
  const [year, holidaysDates, firstDayOfWeek] = getInput();
  // console.log(year ,holidaysDates, firstDayOfWeek);
  

  const result = countDaysOff(year, holidaysDates, firstDayOfWeek);

  sendOutput(result);
}

/**
 *
 * @param {number} 1800 <= year <= 2100
 * @param {number[]} holidaysDates ['month', 'day'] 0 <= month <= 11
 * @param {string}  0 <= firstDayOfWeek <= 6
 * @returns
 */
function countDaysOff(year, holidaysDates, firstDayOfWeek) {
  // console.log(year, holidaysDates, firstDayOfWeek);
  
  
  /* В одном году 52 недели и 1 день - если год обычный и 52 недели и 2 дня */
  let daysOff = [52, 52, 52, 52, 52, 52, 52];
  let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (isLeapYear) {
    daysOff[firstDayOfWeek]++;
    daysOff[firstDayOfWeek]++;
  } else {
    daysOff[firstDayOfWeek]++;
  }


  let holidays = [0, 0, 0, 0, 0, 0, 0];

  for (let holidayDate of holidaysDates) {
    let date = new Date(Number(year), holidayDate[0], Number(holidayDate[1]));
    let dayOfWeek = date.getDay();
    holidays[dayOfWeek]++;
  }


  holidays.forEach((holiday, index) => {
    for (let i = 0; i < daysOff.length; ++i) {
      if (i === index) {
        continue;
      }
      daysOff[i] += holiday;
    }
  });

  // console.log(daysOff);
  // console.log(holidays);
  
  


  let maxDaysOff = Math.max(...daysOff);
  let minDaysOff = Math.min(...daysOff);

  let maxIndex = daysOff.indexOf(maxDaysOff);
  let minIndex = daysOff.indexOf(minDaysOff);

  let bestRestWeekday = indexToDays[maxIndex];
  let worstRestWeekday = indexToDays[minIndex];
  // console.log(bestRestWeekday, worstRestWeekday);
  

  return bestRestWeekday + ' ' + worstRestWeekday;
}

module.exports = { countDaysOff };
