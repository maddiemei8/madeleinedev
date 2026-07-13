/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("mobileMenu").style.width = "100%";
  //document.getElementById("menuBtn").innerHTML = "close";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("mobileMenu").style.width = "0%";
  document.getElementById("menuBtn").innerHTML = "menu";
}