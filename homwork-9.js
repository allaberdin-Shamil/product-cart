const numbersArr = [1,2,3,4,5,6,7,8,9,10];
const newNumbersArr = numbersArr.slice(4,10);

console.log (newNumbersArr);

const tools = ["angle grinder", "welding machine", "screwdriver", "impact wrench", "hammer"];

console.log(tools.includes("welding machine"));

newNumbersArr.reverse();
tools.reverse();

console.log (newNumbersArr);
console.log (tools);

import {userData} from './comments.js';

const comEmailUserData = userData.filter(user => user.email.includes('.com'));

console.log(comEmailUserData);

const updatedUserData = userData.map((user) => ({
  ...user,
  postId: user.id < 5 ? 2 : 1,
}));

console.log(updatedUserData);

const shortenedUserData = userData.map(user => ({id:user.id, name:user.name}));

console.log(shortenedUserData)

const bodyLength = userData.map ((user) => ({
  ...userData,
  isInvalid: user.body.length > 180,
}));

console.log(bodyLength);

const  emailEser = userData.reduce((accumulator, user) => {
  accumulator.push(user.email);

  return accumulator;
}, []);

const emailEser2 = userData.map(({email}) => email)

console.log(emailEser);
console.log(emailEser2);

const result1 = emailEser2.toString();
const result2 = emailEser2.join(",")
const result3 = emailEser2.join("\\n")

console.log(result1);
console.log(result2);
console.log(result3); 