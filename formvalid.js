
function formValidation() {
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var c = document.getElementById('class');
var y = document.getElementById('yop');
var p = document.getElementById('pom');
if (firstname.value.length == 0) {
document.getElementById('head').innerText = "* Name must be filled out *"; 
return false;
}
if (inputAlphabet(firstname, "* For your name please use alphabets only *")) {
if (inputAlphabet2(lastname, "* For your name please use alphabets only *" )) {
if (classValidation(c, "* Please enter a valid class number *")) {
if (checkDate(yop, "* For Address please use numbers and letters *")) {
if (textNumeric(p, "* Please enter a valid zip code *")) {
return true;
}
}
}
}
}
return false;
}
function textNumeric(inputtext, alertMsg) {
var numericExpression = /^[0-9]+$/;
if (inputtext.value.match(numericExpression)) {
return true;
} else {
document.getElementById('p6').innerText = alertMsg;
inputtext.focus();
return false;
}
}
// Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg) {
var alphaExp = /^[a-zA-Z]+$/;
if (inputtext.value.match(alphaExp)) {
return true;
} else {
document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for name.
//alert(alertMsg);
inputtext.focus();
return false;
}
}
var y = document.getElementById('yop');
function checkDate(y)
  {
    var allowBlank = true;
    var minYear = 2000;
    var maxYear = 2017;

    var errorMsg = "";
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    if(field.value != '') {
      if(regs = field.value.match(re)) {
        if(regs[1] < 1 || regs[1] > 31) {
          errorMsg = "Invalid value for day: " + regs[1];
        } else if(regs[2] < 1 || regs[2] > 12) {
          errorMsg = "Invalid value for month: " + regs[2];
        } else if(regs[3] < minYear || regs[3] > maxYear) {
          errorMsg = "Invalid value for year: " + regs[3] + " - must be between " + minYear + " and " + maxYear;
        }
      } else {
        errorMsg = "Invalid date format: " + field.value;
      }
    } else if(!allowBlank) {
      errorMsg = "Empty date not allowed!";
    }

    if(errorMsg != "") {
      alert(errorMsg);
      field.focus();
      return false;
    }

    return true;
  }
function inputAlphabet2(inputtext, alertMsg) {
var alphaExp = /^[a-zA-Z]+$/;
if (inputtext.value.match(alphaExp)) {
return true;
} else {
document.getElementById('p2').innerText = alertMsg; // This segment displays the validation rule for name.
//alert(alertMsg);
inputtext.focus();
return false;
}
}
function classValidation(inputtext, alertMsg) {
var CaExp = /^[0-9]$/;
if (inputtext.value.match(CaExp)) {
return true;
} else {
document.getElementById('p3').innerText = alertMsg;
inputtext.focus();
return false;
}
}
