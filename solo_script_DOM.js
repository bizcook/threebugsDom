// ! ! !
// Three Bugs
//individual var that are associated with the People constructor function
//holds subarray of individual people and info this used to be in var array [arrayAtticus, arrayJem, arrayBoo, arrayScout]
var array = [];

var arrayAtticus = new People ("Atticus", "2405", "47000", 3);
var arrayJem = new People ("Jem", "62347", "63500", 4);
var arrayBoo = new People ("Boo", "11435", "54000", 3);
var arrayScout = new People ("Scout", "6243", "74750", 5);


//start jquery to loop through array.
$(document).ready(function(){
  for (var i = 0; i < array.length; i++) {
    appendDom(array[i]);
  }
});

//this is the function that builds multiple instances of the things held in var array
function People (name, employeeNumber, salary, reviewScore){
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.salary = salary;
  this.reviewScore = reviewScore;
  array.push(this);
}

function appendDom(object){
    $('.container').append('<div class = "people"></div>');

    var $el = $('.container').children().last();

    $el.append('<p>' + object.name + '</p>');
    $el.append('<p>' + object.employeeNumber + '</p>');
    $el.append('<p>' + object.salary + '</p>');
    $el.append('<p>' + object.reviewScore + '</p>');
}
// console.log(array);

//Create variables used to write to the DOM


//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
var otherArray = []

// for(var i = 0; i < array.length; i++){
// 	otherArray[i] = calculateSTI(array[i]);
//  	newEl = document.createElement('li');
// 	newText = document.createTextNode(otherArray[i]);
// 	newEl.appendChild(newText);
//   position.appendChild(newEl);
// }


function calculateSTI(people){
  var newArray = [];


  var employeeNumber = people.employeeNumber;
  var baseSalary = parseInt(people.salary); 
  var reviewScore = people.reviewScore;

  var bonus = getBaseSTI(reviewScore) 
              + getYearAdjustment(employeeNumber) 
              - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  // console.log (people);


  newArray[0] = people.name; 
  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * ( 1.0 + bonus)); //added math.round 
  newArray[3] = baseSalary * bonus;
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

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

