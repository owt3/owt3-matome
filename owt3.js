"use strict";

var state = ""; //現在の状態
var totyuu; //演算子を押した後に入力した値
var number = "0"; //初期の値
var result; //計算結果の値

function numberClick(obj) {
  if (number === "0") { //先頭に0が付かない為の実装
    number = "";
  }
  switch (state) { //
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
    case "plus_result_waiting":
      number = "";
      totyuu = result;
      state = "plus";
      break;
    case "minus_result_waiting":
      number = "";
      totyuu = result;
      state = "minus";
      break;
    case "multiplied_result_waiting":
      number = "";
      totyuu = result;
      state = "multiplied";
      break;
    case "divided_waiting":
      number = "";
      totyuu = result;
      state = "divided";
      break;
  }
  if (number.length < 8) {
    number += obj.value;
    display(number);
  }
}

function plusClick() {
  switch (state) {
    case "plus_result_waiting": 
    case "minus_result_waiting": 
    case "multiplied_result_waiting": 
    case "divided_result_waiting": 
      totyuu = result;
      state = "";
      break;

    case "plus": //a+b=と同じ挙動を+で代用
      result = Number(totyuu) + Number(number);
      display(result);
      state = "plus_result_waiting";
      break;

    case "plus_waiting":
      totyuu = result;
      result = Number(totyuu) + Number(number);
      display(result);
      state = "plus_waiting";
      break;

    default:
      totyuu = number;
      state = "plus_waiting";
      break;
  }
}

function minusClick() {
  switch (state) {
    case "plus_result_waiting":
    case "minus_result_waiting":
    case "multiplied_result_waiting":
    case "divided_result_waiting":
      totyuu = result;
      state = "minus_result_waiting";
      break;

      case "plus": //a+b=と同じ挙動を+で代用
      result = Number(totyuu) + Number(number);
      display(result);
      state = "plus_result_waiting";
      break;
      
      case "minus": //a-b=と同じ挙動を-で代用
      result = Number(totyuu) - Number(number);
      display(result);
      state = "minus_result_waiting";
      break;

    case "minus_waiting":
      totyuu = result;
      result = Number(totyuu) - Number(number);
      display(result);
      state = "minus_waiting";
      break;

    default:
      totyuu = number;
      state = "minus_waiting";
      break;
  }
}

function multipliedClick() {
  switch (state) {
    case "plus_result_waiting":
    case "minus_result_waiting":
    case "multiplied_result_waiting":
    case "divided_result_waiting":
      totyuu = result;
      break;

    case "multiplied": //a*b=と同じ挙動を×で代用
      result = Number(totyuu) * Number(number);
      display(result);
      state = "multiplied_result_waiting";
      break;

    case "multiplied_waiting":
      totyuu = result;
      result = Number(totyuu) + Number(number);
      display(result);
      state = "multiplied_waiting";
      break;

    default:
      totyuu = number;
      state = "multiplied_waiting";
      break;
  }

}

function dividedClick() {
  totyuu = number;
  switch (state) {
    case "plus_result_waiting": 
    case "minus_result_waiting": 
    case "multiplied_result_waiting": 
    case "divided_result_waiting": 
      totyuu = result;
      break;
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
  display(number = "0");
}

function display(msg) {
  displayArea.innerHTML = msg;
}
