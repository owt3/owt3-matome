"use strict";

function buttonClick(idname) {
  var number = document.getElementById(idname).value;
  document.getElementById("textbox").innerHTML = number;
}