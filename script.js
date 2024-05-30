///////////////////1

function sumSalaries(salaries) {
  let salaryValues = Object.values(salaries);
  let total = 0;

  for (let salary of salaryValues) {
    total += salary;
  }


  return total;
}

const salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

alert(sumSalaries(salaries)); // Виведе 3700

////////////////2

function count(obj) {
  return Object.keys(obj).length;
}

const exampleObj = {
  name: "John",
  age: 30,
  profession: "Developer"
};

alert(count(exampleObj));

//////////////////3
const user = {
  name: "John",
  years: 30
};

const { name, years: age, isAdmin = false } = user;
alert(name);
alert(age);
alert(isAdmin);
