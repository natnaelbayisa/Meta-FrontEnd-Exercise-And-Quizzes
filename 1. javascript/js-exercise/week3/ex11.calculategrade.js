const grade = [75, 95, 90, 85, 80, 85];
let gradeSum = 0;

for (i = 0; i < grade.length; i++) {
  gradeSum += grade[i];
}
console.log(gradeSum / grade.length);

// SET
const house1 = "red";
const house2 = "blue";
const house3 = "red";

const houses = new Set();

houses.add(house1).add(house2).add(house3);
console.log(houses);
