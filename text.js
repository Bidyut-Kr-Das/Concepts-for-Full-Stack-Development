const person = {
  name: "Soumodipta",
  age: 22,
  occupation: "Student",
  college: "TIU",
};

// console.log(person.name); <-one way to get the value

// console.log(person["name"]) <- second way to get the value

// Object destructuring
// const { name, college } = person;
// console.log(name, college);

// const [Bidyut, b, c, d,e] = arr1;
// console.log(Bidyut, b, c);
// const [a, , , , b] = arr1;

// console.log(a, b);

// console.log(arr1[0], arr1[4])

// console.log(arr1[1]);

// const _ = "soumodipta";
// console.log(_);

// function sum(a, b) {
//   return a + b;
// }

const arrowfunction1 = (a, b) => {
  return a + b;
};

// const time1 = setTimeout(() => {
//   console.log("this is timeout 1");
// }, 5000);

// const time2 = setTimeout(() => {
//   console.log("this is timeout 2");
// }, 2000);

const success = true;

// const promise1 = new Promise((resolve, reject) => {
//   if (success === true) {
//     resolve("this promise is resolved");
//   } else {
//     reject("someone rejected the promise");
//   }
// });

function sleep(time) {
  return new Promise((resolve) => {
    return setTimeout(resolve, time);
  });
}
// const timeout1 =await sleep(10000);
// console.log(timeout1);

// console.log(promise1);

// const async1 = () => {

// };

// console.log(time1);
// console.log(time2);

// async

// async function sum(a,b){
//     await sleep(5000)
//     return a+b;
// }

// const sum = async (a, b) => {
//   // const success = false;
//   await sleep(5000);
//   return a + b;
// };

// console.log(success)

// const result = await sum(4, 5);
// console.log(result);
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multipliedBy2(element) {
  return element * 2;
}

// const multipliedBy2 = (element) => {
//   return element * 2;
// };

// map
// I want an extra array which will be 2* each element of arr1
const arr2 = arr1.map((element) => {
  return element * 2;
});

// console.log(arr2, arr1);

// foreach
const arr3 = arr1.forEach(multipliedBy2);
// console.log(arr3, arr1)

// filter
function findOdd(element) {
  return element % 2 !== 0;
}

// const findOdd = (element) => {
//   return element % 2 !== 0;
// };

const arr4 = arr1.filter((element) => {
  return element % 2 !== 0;
});
// console.log(arr4);

// const arr5 = arr1.sort((a,b)=>{
//     return b-a
// })

const user1 = {
  id: 1,
  name: "soumodipta",
  college: "TIU",
  location: "Kolkata",
};

const user2 = {
  id: 2,
  name: "Shreemoyee",
  college: "TIU MAIN",
  location: "New Kolkata",
};

const students = [
  {
    id: 1,
    name: "soumodipta",
    college: "TIU",
    age: 22,
    location: "Kolkata",
  },
  {
    id: 2,
    name: "Shreemoyee",
    college: "TIU MAIN",
    age: 10,
    location: "New Kolkata",
  },
  {
    id: 3,
    name: "Bidyut",
    college: "",
    age: 25,
    location: "Naihati",
  },
];

const find_sum_of_all_students_age = (students) => {
  // return students.reduce((ageSum, student) => {
  //   const { age } = student;
  //   ageSum + age;
  // }, 0);
  const newSum = 0;

  students
    .filter((student) => student.age > 20)
    .forEach((student) => {
      const { age } = student;

      newSum += age;
    });

  return newSum;
};

// const { id } = user1;
// const { id:id2 } = user2;

const { id, location, ...soumodipta } = user1;

const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (i = 0; i < arr7.length; i++) {
//   console.log(arr7[i]);
// }

const [a, b, ...restofthearray] = arr7;

// console.log(restofthearray);

// const sum = (a, b) => {
//   return a + b;
// };

// const sum1 = (a, b, c) => {
//   return a + b + c;
// };

// (n*(n+1))/2

const sum = (a, b = 0, ...restoftheparameter) => {
  let newSum = 0;
  newSum = a + b;

  // for (i = 0; i < restoftheparameter.length; i++) {
  //   // console.log(a + b + restoftheparameter[i]);
  //   newSum += restoftheparameter[i];
  // }

  //using foreach loop
  // restoftheparameter.forEach((element, i) => {
  //   // newSum += restoftheparameter[i];
  //   newSum += element;
  // });

  restoftheparameter
    .filter((element) => {
      return element % 2 === 0;
    })
    .forEach((element, i) => {
      // newSum += restoftheparameter[i];
      newSum += element;
    }).map();
  // 1, 2, 1, 2
  // sum = 0
  // sum+1 = 1
  // sum = 1
  // sum+2 = 3
  // sum = 3
  // restoftheparameter.reduce((sum, element) => {
  //   return sum + element;
  // }, 0);

  // evenelements.forEach((element, i) => {
  //   // newSum += restoftheparameter[i];
  //   newSum += element;
  // });

  return newSum;
};

// a = 1;
// b = 2;
// (restoftheparameter = [1, 2, 1, 2]), undefined, undefined;

// const res1 = sum(1); //->1
const res2 = sum(1, 2, 1, 2, 1, 2); //->9
// const res3 = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //->55

// console.log(res1, res2, res3);
console.log(res3);
