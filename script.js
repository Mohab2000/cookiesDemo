// Cookies is a simple data about user

var NameInput = document.getElementsByTagName("input")[0];
var AgeInput = document.getElementsByTagName("input")[1];
var SalaryInput = document.getElementsByTagName("input")[2];

//Create Cookie
function saveData() {
  // console.log(NameInput.value);
  var myDate = new Date(); //Constructor Creation for Date Object
  myDate.setMonth(myDate.getMonth() + 1);

  document.cookie = `UserName=${NameInput.value};expires=${myDate}`;

  document.cookie = `UserAge=${AgeInput.value};expires=${myDate}`;

  document.cookie = `UserSalary=${SalaryInput.value};expires=${myDate}`;
}

//Read Cookie
function getAllCookies() {
  var allOfCookies = []; // Associative Array
  var KeyValuePairs = document.cookie.split("; ");

  for (i = 0; i < KeyValuePairs.length; i++) {
    allOfCookies[KeyValuePairs[i].split("=")[0]] =
      KeyValuePairs[i].split("=")[1];
  }

  return allOfCookies;
}

function getCookie(cName) {
  var all = getAllCookies();
  for (i in all) {
    if (i == cName) {
      return all[i];
    }
  }
}

//Delete one Cookie
function deleteCookie(cName) {
  var all = getAllCookies();
  for (i in all) {
    if (i == cName) {
      document.cookie = i + "=;expires=1-1-2020";
    }
  }
}
//Delete All Cookie
function deleteAllCookies() {
  var all = getAllCookies();
  for (i in all) {
    document.cookie = i + "=;expires=1-1-2020";
  }
}
