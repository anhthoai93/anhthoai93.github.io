// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

function getAge() {
  var todayDate = new Date().getTime();
  var birthDate = new Date("11/25/1993").getTime();  // Format: MM/DD/YYYY
  return  Math.floor((todayDate - birthDate) / (1000 * 60 * 60 * 24 * 365));
}
document.getElementById("age").innerHTML = getAge();
// Add your javascript here
