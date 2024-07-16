let userName = prompt("What is your name ? ");

alert(`Welcome ${userName} `);

let userConfirmed = confirm("Are you 22 year old?");
if (userConfirmed) {
  alert("Your age 22.");
} else {
  alert("Your age not 22.");
}
