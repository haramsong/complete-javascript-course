// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = "23";
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let min = temps[0];
  let max = temps[0];

  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      console.log(`Error occured on index of ${i} in temperatures.`);
      continue;
    }
    if (temps[i] < min) {
      min = temps[i];
      continue;
    }
    if (temps[i] > max) {
      max = temps[i];
    }
  }

  return max - min;
}

const amplitude = calcTempAmplitude(temperatures)
console.log(amplitude);

// Problem2 : function should now receive 2 arrays of temps

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [5, -2, -1, -4, 'error', 9, 13, 31, 7, 8, 9, 22];

const calcTempsAmplitude = function (temps1, temps2) {
  const temps = [...temps1, ...temps2];
  let min = temps[0];
  let max = temps[0];

  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      console.log(`Error occured on index of ${i} in temperatures.`);
      continue;
    }
    if (temps[i] < min) {
      min = temps[i];
      continue;
    }
    if (temps[i] > max) {
      max = temps[i];
    }
  }

  return max - min;
}

const amplitude2 = calcTempsAmplitude(temperatures1, temperatures2);
console.log(amplitude2);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // C) Fix
//     value: Number(prompt('Degrees celsius:'))
//   }

//   // B) Find
//   console.log(measurement);   // Find value type is string
//   console.table(measurement); // Table 형태로 console 출력
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// }

// // A) Identify
// console.log(measureKelvin());  // 10 -> 10273

// Using a debugger
const calcTempsAmplitude = function (temps1, temps2) {
  const temps = [...temps1, ...temps2];
  let min = 0;  // error
  let max = 0;

  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      console.log(`Error occured on index of ${i} in temperatures.`);
      continue;
    }

    debugger;   // debugger
    if (temps[i] < min) {
      min = temps[i];
      continue;
    }
    if (temps[i] > max) {
      max = temps[i];
    }
  }

  return max - min;
}

const amplitude2 = calcTempsAmplitude([9, 6, 1], [9, 8, 4]);
console.log(amplitude2);

const printForecast = function (arr) {
  let printText = "...";
  for (let i = 0; i < arr.length; i++) {
    printText += ` ${arr[i]}C in ${i + 1} days ...`;
  }
  console.log(printText);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

const dailyWorkHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const totalHoursWorked = function (week) {
  let hours = 0;
  for (let i = 0; i < week.length; i++) hours += week[i];
  return hours
}

const averageDailyHours = function (week) {
  return totalHoursWorked(week) / week.length;
}

const dayMostHourWorked = function (week) {
  const day = week.indexOf(Math.max(...week));
  switch (day) {
    case 0:
      return 'Monday';
    case 1:
      return 'Tuesday';
    case 2:
      return 'Wednesday';
    case 3:
      return 'Thursday';
    case 4:
      return 'Friday';
    case 5:
      return 'Saturday';
    case 6:
      return 'Sunday';
    default:
      return 'Invalid week!';
  }
}

const numberOfDaysWorked = function (week) {
  let workingDays = 0;
  for (let i = 0; i < week.length; i++) {
    if (week[i] === 0) continue;
    workingDays += 1;
  }

  return workingDays;
}

const checkWeekWasFullTime = function (week) {
  return totalHoursWorked(week) >= 35
}

console.log(totalHoursWorked(dailyWorkHours));
console.log(averageDailyHours(dailyWorkHours));
console.log(dayMostHourWorked(dailyWorkHours));
console.log(numberOfDaysWorked(dailyWorkHours));
console.log(checkWeekWasFullTime(dailyWorkHours));

*/
