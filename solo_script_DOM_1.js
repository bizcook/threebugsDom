// ! ! !
// Three Bugs


var newArray = [];

$(document).ready(function(){
 
  for (var i = 0; i < newArray.length; i++) {
    var employee = newArray[i];
    employee = calculateSTI(employee);
    appendDom (newArray[i]); 
  }
});

var arrayAtticus = new People ("Atticus", "2405", "47000", 3);
var arrayJem = new People ("Jem", "62347", "63500", 4);
var arrayBoo = new People ("Boo", "11435", "54000", 3);
var arrayScout = new People ("Scout", "6243", "74750", 5);

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];




// position = document.getElementById('content');

// function appendDom(object){
//   $('.container').append('<div class = "people"></div>');

//   var $el = $('.container').children().last();

//   $el.append('<h2>'"Employee Name: " + object.name + '</h2>');
//   $el.append('<p>'"Employee Salary: " + object.salary + '</p>');
//   $el.append('<p>'"Employee Bonus: " + object.sti + '</p>');
//   $el.append('<p>'"Employee Net Salary: " + object.newSalary + '</p>');

// }

// for (var i = 0; i < array.length; i++){
//   calculateSTI(array[i]);
// }


function People (name, employeeNumber, salary, reviewScore) {
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.salary = salary;
  this.reviewScore = reviewScore;
  newArray.push(this);
}

console.log(newArray);


var newEl, newText, position;

position = document.getElementById('content');

function calculateSTI(newArray){
  
  var employeeNumber = newArray.employeeNumber;
  var baseSalary = parseInt(newArray.salary); 
  var reviewScore = newArray.reviewScore;

  var bonus = getBaseSTI(People.reviewScore) 
              + getYearAdjustment(People.employeeNumber) 
              - getIncomeAdjustment(People.baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
}
  // console.log ()

newArray.bonus = bonus;
newArray.newSalary = Math.round(baseSalary * ( 1.0 + bonus));
newArray.sti = baseSalary * bonus;
return newArray;
}

//all below code is good

function getBaseSTI(reviewScore){
  var basePercent = 0;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
    default:
    case 0:
      basePercent = 0;
      break;
  }
  return basePercent; // this used to have -1 following it
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}

// function NewObject (name, salary, bonus, afterBonus){
//   this.name = name;
//   this.salary = salary;
//   this.bonus = bonus;
//   this.afterBonus = afterBonus;
//   newArray.push(this);
// }

function appendDom (object) {
  $('.container').append('<div class="money"></div>');

  var $el = $('.container').children().last();

  $el.append('<h2>Good day ' + object.name + '</h2>');
  $el.append('<p>Here is your base salary: $' + object.salary + '</p>');
  $el.append('<p>Your total salary, including your bonus: $' + object.newSalary + '</p>');
  $el.append('<p>Your total bonus: $' + object.sti + '</p>');
}
