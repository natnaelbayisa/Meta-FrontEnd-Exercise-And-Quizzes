'{"greeting":"hello"}';
'{"greeting":"hello"}';

const jsonStr = '{"greeting":"hello"}';
a = JSON.parse(jsonStr);
console.log(a);

const plainObj = JSON.parse(jsonStr);
plainObj.greeting = "hi";
console.log(plainObj);

//
const data = {
  firstName: "Nati",
  lastName: "i",
  greeting: "hey",
};
a = JSON.stringify(data);
console.log(a);
