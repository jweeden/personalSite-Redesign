function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {x.className = "topnav";
}
  var x = document.getElementById("myDim");
  if (x.className === "dimscreen") {
      x.className += " responsive";
  } else {x.className = "dimscreen";
}
}