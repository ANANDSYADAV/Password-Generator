
let hold = document.getElementById("passwordhold");
function Randomfunc() {
  let parent = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let len = parent.length;
  let rlen = prompt("Enter the length of password you required");
  let password = '';
  for (let i = 0; i < rlen; i++) {
    var index = Math.floor(Math.random() * len);
    password += parent[index];
  }
  hold.innerHTML = "Random Generated Password => " + password;
}

function shuffle(password) {
  var array = password.split(''); // string to array
  let len = array.length;
  for (let i = 0; i < len; i++) {
    var j = Math.floor(Math.random() * len);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  password = array.join(''); // array to string
  return password;
}

function Customfunc() {
  let small_letter = "abcdefghijklmnopqrstuvwxyz";
  let capital_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let special_characters = "!@#$%^&*()";
  let slen = small_letter.length;
  let clen = capital_letter.length;
  let nlen = numbers.length;
  let sclen = special_characters.length;

  let small = prompt("Enter the count of small letters you want");
  let capital = prompt("Enter the count of capital letters you want");
  let num = prompt("Enter the count of numerals you want");
  let schar = prompt("Enter the count special characters you need in you ")

  let password = '';
  for (let i = 0; i < small; i++) {
    var index = Math.floor(Math.random() * slen);
    password += small_letter[index];
  }
  for (let i = 0; i < capital; i++) {
    var index = Math.floor(Math.random() * clen);
    password += capital_letter[index];
  }
  for (let i = 0; i < num; i++) {
    var index = Math.floor(Math.random() * nlen);
    password += numbers[index];
  }
  for (let i = 0; i < schar; i++) {
    var index = Math.floor(Math.random() * sclen);
    password += special_characters[index];
  }
  password = shuffle(password);
  hold.innerHTML = "Custom Generated Password => " + password;
}
