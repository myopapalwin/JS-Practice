"use strict";
const mixedData = [
  10,
  "20",
  " 30 ",
  "abc",
  true,
  null,
  undefined,
  {},
  [1, 2, 3, [8, 9]],
  [4, 5],
  6,
  40,
  "50px",
  Infinity,
];

// 1. Create function recive an array
// 2. Flatten all nested elments in one array
// 3. Check data is array or not
// 4. Transform all element normalize
// 5. Filter number, ignore others
// 6. Calculate all requirements and return

const calculateStats = (...data) => {
  const flatData = data.flat(Infinity);
  if (Array.isArray(flatData)) {
    const filterData = flatData
      .map((item) => {
        if (typeof item === "number") return item;
        if (typeof item === "string" && item.trim !== "") {
          return Number(item);
        } else {
          return null;
        }
      })
      .filter(Number.isFinite);

    const resultData = filterData.reduce(
      (accu, num) => {
        accu.sum += num;
        accu.count += 1;
        accu.max = Math.max(accu.max, num);
        accu.min = Math.min(accu.min, num);
        return accu;
      },
      {
        sum: 0,
        count: 0,
        average: 0,
        max: -Infinity,
        min: Infinity,
      },
    );
    resultData.average = resultData.sum / resultData.count;
    return resultData;
  } else {
    throw new Error("Argument must be an array!");
  }
};

// console.log(calculateStats(...mixedData));

// Day 1 : Loop Mastery Day
/* const dataArray = [1, 2, 3, '35', 'papa', 'min', true, 10];
let total, booleanCount, totalStringLength;
total = 0;
booleanCount = 0;
totalStringLength = 0;

for (let data of dataArray) {
  // number responsibility
  if (typeof data === 'number') {
    total = total + data;
  }

  // booleand responsibility
  if (typeof data === 'boolean') {
    booleanCount++;
  }

  // string responsibility
  if (typeof data === 'string') {
    totalStringLength += data.length;
  }
} 

console.log(total, booleanCount, totalStringLength);*/

// Next Level Challenge (Mini Upgrade)
/*const arr = [1, '2', true, 'hello', false, 5];
let sumNumbers, booleanCount, stringNumbersSum, stringLength;
sumNumbers = 0;
booleanCount = 0;
stringNumbersSum = 0;
stringLength = 0;

for (let item of arr) {
  // number responsibility
  if (typeof item === 'number') sumNumbers += item;

  // boolean responsibility
  if (typeof item === 'boolean') booleanCount++;

  // string responsibility
  if (typeof item === 'string') {
    let convertedNum = Number(item); // if(real string) >> output >> NaN
    if (Number.isFinite(convertedNum)) {
      stringNumbersSum += convertedNum;
    } else {
      stringLength += item.length;
    }
  }
}
console.log(sumNumbers, booleanCount, stringNumbersSum, stringLength);
*/

// Next Step (Preparation for Day 2)
//const arryData = [1, '10', 'abc', 5, true, '20px'];
// let totalValidNumbers = 0;
// for (let item of arryData) {
//   const convertItem = Number(item); // Normalize first
//   if (
//     typeof item === 'number' ||
//     (typeof item === 'string' && Number.isFinite(convertItem))
//   ) {
//     totalValidNumbers += convertItem;
//   }
// }
// console.log(totalValidNumbers);

// Senior Thinking Condition for array
// const dataArray = [1, '10', 'abc', 5, true, '20px', false, NaN, 6];
// let totalValidNumber = 0;
// for (let data of dataArray) {
//   if (typeof data !== 'number' && typeof data !== 'string') {
//     continue;
//   }

//   const validNumber = Number(data);

//   if (!Number.isFinite(validNumber)) {
//     continue;
//   }

//   totalValidNumber += validNumber;
// }
// console.log(totalValidNumber);

// Day 2 — Official Challenge (Transform Thinking)
// const arr = [1, '2', 'abc', true, '  5  '];
// let newArr = [];

// for (let data of arr) {
//   let result = null;
//   if (typeof data === 'number') result = data;

//   if (typeof data === 'string') {
//     const trimData = Number(data.trim());
//     if (Number.isFinite(trimData)) {
//       result = trimData;
//     }
//   }

//   newArr.push(result);
// }

// console.log(newArr);

// Day 3 (Filter Thinking Official Challenge)

// const arrDay3 = [1, '2', 'abc', 0, '', null, 5];
// let newArrDay3 = [];

// for (let data of arrDay3) {
//   let num = null;
//   if (typeof data === 'number') {
//     num = data;
//   } else if (typeof data === 'string') {
//     const trimData = data.trim();
//     if (trimData !== '') {
//       const changeNum = Number(trimData);
//       if (Number.isFinite(changeNum)) {
//         num = changeNum;
//       }
//     }
//   }
//   if (num !== null) {
//     newArrDay3.push(num);
//   }
// }
// console.log(newArrDay3);

// Next Level
// const arr3 = [1, '2', 'abc', ' 10 ', true, null]; // [2, 4, 20]
// let arr3New = [];
// for (let data of arr3) {
//   let result = null;
//   if (typeof data !== 'number' && typeof data !== 'string') continue;
//   if (typeof data === 'number') {
//     result = data;
//   } else if (typeof data === 'string') {
//     const trimmed = data.trim();
//     if (trimmed !== '') {
//       const num = Number(trimmed);
//       if (Number.isFinite(num)) {
//         result = num;
//       }
//     }
//   }
//   if (result !== null) {
//     arr3New.push(result * 2);
//   }
// }
// console.log(arr3New);

// Day 4 : Next Level — Final Evolution (Map + Filter Combined Thinking)
// const arrayMap = [1, '2', 'abc', ' 10 ', true, null];
// const result = arrayMap
//   .map(item => {
//     if (typeof item === 'number') return item * 2;
//     if (typeof item === 'string') {
//       const trimmed = item.trim();
//       if (trimmed !== '') {
//         const num = Number(trimmed);
//         return num * 2;
//       }
//     }
//     return null;
//   })
//   .filter(Number.isFinite);
// console.log(result);

// Day 5 - Final Boss Bonus -- Add max and min
const arr = [1, "2", "abc", " 10 ", true, null];

const result = arr.reduce(
  (acc, item) => {
    let numResult = null;
    if (typeof item === "number") {
      numResult = item;
    } else if (typeof item === "string") {
      const trimmedNum = Number(item.trim());
      const num = Number.isFinite(trimmedNum) ? trimmedNum : null;
      if (Number.isFinite(num)) {
        numResult = num;
      }
    }

    // Updating accumulater in this step
    if (numResult !== null) {
      acc.sum += numResult;
      acc.count += 1;
      acc.max = Math.max(acc.max, numResult);
      acc.min = Math.min(acc.min, numResult);
    }
    return acc;
  },
  {
    sum: 0,
    count: 0,
    max: -Infinity,
    min: Infinity,
  },
);
result.average = Number((result.sum / result.count).toFixed(2));
// console.log(result);

// const arr = [1, '2', 'abc', ' 10 ', true, null];

// const result = arr
//   .map(item => {
//     if (typeof item === 'number') return item;

//     if (typeof item === 'string' && item.trim() !== '') {
//       const trimmedNum = Number(item.trim());
//       const num = Number.isFinite(trimmedNum) ? trimmedNum : null;
//       return num;
//     }

//     return null;
//   })
//   .filter(Number.isFinite)
//   .reduce(
//     (acc, data) => {
//       acc.sum += data;
//       acc.count++;
//       return acc;
//     },
//     {
//       sum: 0,
//       count: 0,
//     },
//   );
// result.average = Number((result.sum / result.count).toFixed(2));
// console.log(result);

// Day 5 __ "Real World Challenge (API Data Processing Level)"

const apiData = [
  { price: "100" },
  { price: 200 },
  { price: "abc" },
  { price: " 300 " },
  { price: null },
  { price: true },
];

const resultData = apiData.reduce(
  (accumulator, current) => {
    const data = current.price;
    let result = null;
    if (typeof data === "number") {
      result = data;
    } else if (typeof data === "string") {
      const trimmed = Number(data.trim());
      const num = Number.isFinite(trimmed) ? trimmed : null;
      if (Number.isFinite(num)) {
        result = num;
      }
    }

    if (result !== null) {
      accumulator.total += result;
      accumulator.validCount += 1;
    }
    return accumulator;
  },
  {
    total: 0,
    validCount: 0,
    average: 0,
  },
);
resultData.average =
  resultData.validCount === 0
    ? 0
    : Number((resultData.total / resultData.validCount).toFixed(2));

console.log(resultData);
