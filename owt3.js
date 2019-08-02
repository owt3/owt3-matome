"use strict";

var state = "";
var totyuu;
var number = "0";
var result;

function numberClick(obj) {
  switch (state) {
    case "plus_waiting":
      number = "";
      state = "plus";
      break;
    case "minus_waiting":
      number = "";
      state = "minus";
      break;
    case "multiplied_waiting":
      number = "";
      state = "multiplied";
      break;
    case "divided_waiting":
      number = "";
      state = "divided";
      break;
  }
  number += obj.value
  display(number);
}

function plusClick() {
  totyuu = number;
  switch (state) {
    case "plus_result_waiting": 
    case "minus_result_waiting": 
    case "multiplied_result_waiting": 
    case "divided_result_waiting": 
      totyuu = result;
  }
  state = "plus_waiting";
}

function minusClick() {
  totyuu = number;
  switch (state) {
    case "plus_result_waiting": 
    case "minus_result_waiting": 
    case "multiplied_result_waiting": 
    case "divided_result_waiting": 
      totyuu = result;
  }
  state = "minus_waiting";
}

function multipliedClick() {
  totyuu = number;
  switch (state) {
    case "plus_result_waiting": 
    case "minus_result_waiting": 
    case "multiplied_result_waiting": 
    case "divided_result_waiting": 
      totyuu = result;
  }
  state = "multiplied_waiting";
}

function dividedClick() {
  totyuu = number;
  switch (state) {
    case "plus_result_waiting": 
    case "minus_result_waiting": 
    case "multiplied_result_waiting": 
    case "divided_result_waiting": 
      totyuu = result;
  }
  state = "divided_waiting";
}

function dotClick() {
  if (number.indexOf(".") < 0) {
    number += ".";
    display(number);
  }

}

function equalClick() {
  switch (state) {
    case "plus":
      result = Number(totyuu) + Number(number);
      display(result);
      state = "plus_result_waiting";
      break;
    case "minus":
      result = Number(totyuu) - Number(number);
      display(result);
      state = "minus_result_waiting";
      break;
    case "multiplied":
      result = Number(totyuu) * Number(number);
      display(result);
      state = "multiplied_result_waiting";
      break;
    case "divided":
      result = Number(totyuu) / Number(number);
      display(result);
      state = "divided_result_waiting";
      break;
    case "plus_result_waiting":
      result = Number(result) + Number(number);
      display(result);
      break;
    case "minus_result_waiting":
      result = Number(result) - Number(number);
      display(result);
      break;
    case "multiplied_result_waiting":
      result = Number(result) * Number(number);
      display(result);
      break;
    case "divided_result_waiting":
      result = Number(result) / Number(number);
      display(result);
      break;
  }
}

function clearClick() {
  state = "";
  totyuu = undefined;
  display(number = 0);
}

function display(msg) {
  displayArea.innerHTML = msg;
}
