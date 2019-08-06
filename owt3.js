"use strict";

var state = ""; //現在の状態
var totyuu; //演算子を押した後に入力した値（途中結果）
var number = ""; //初期の値
var result; //計算結果の値

function numberClick(obj) {　//数字をクリックした場合の処理
  if (number === "0") { //先頭に0が付かない為の実装
    number = ""; //先頭が0であればnumberをリセットしてしまう
  }
  switch (state) { //計算の待機状態を計算結果を出す前、後で分けている
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
    case "divided_result_waiting":
      number = "";
      totyuu = result;
      state = "divided";
      break;
  }
  if (number.length < 8) { //入力の桁数を8桁に制限（小数点は1文字に含める）
    number += obj.value;
    display(number);
  }
}

function plusClick() { //+を押した場合の処理
  switch (state) {
    case "plus_result_waiting": 
    case "minus_result_waiting": 
    case "multiplied_result_waiting": 
    case "divided_result_waiting": 
      totyuu = result;
      break;

    case "plus": //a+b=と同じ挙動を+で代用
      result = Number(totyuu) + Number(number);
      display(result);
      state = "plus_result_waiting";
      break;
      
    case "minus": //a-b=と同じ挙動を+で代用
      result = Number(totyuu) - Number(number);
      display(result);
      state = "minus_result_waiting";
      break;

    case "multiplied": //a*b=と同じ挙動を+で代用
      result = Number(totyuu) * Number(number);
      display(result);
      state = "multiplied_result_waiting";
      break;

    case "divided": //a/b=と同じ挙動を+で代用
      result = Number(totyuu) / Number(number);
      display(result);
      state = "divided_result_waiting";
      break;

    default: //始めて押す時、計算結果を出す為にtotyuuとstateを定義する
      totyuu = number;
      state = "plus_waiting";
      break;
  }
}

function minusClick() { //-を押した場合の処理
  switch (state) {
    case "plus_result_waiting":
    case "minus_result_waiting":
    case "multiplied_result_waiting":
    case "divided_result_waiting":
      totyuu = result;
      state = "minus_result_waiting";
      break;

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

    default:
      totyuu = number;
      state = "minus_waiting";
      break;
  }
}

function multipliedClick() { //×を押した場合の処理
  switch (state) {
    case "plus_result_waiting":
    case "minus_result_waiting":
    case "multiplied_result_waiting":
    case "divided_result_waiting":
      totyuu = result;
      state = "multiplied_result_waiting";
      break;

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

    default:
      totyuu = number;
      state = "multiplied_waiting";
      break;
  }
}

function dividedClick() { //÷を押した場合の処理
  switch (state) {
    case "plus_result_waiting": 
    case "minus_result_waiting": 
    case "multiplied_result_waiting": 
    case "divided_result_waiting": 
      totyuu = result;
      state = "divided_result_waiting";
      break;
  
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

    default:
        totyuu = number;
        state = "divided_waiting";
        break;
  }
}

function dotClick() { //.を押した場合、数列内に.が入ってない場合代入できるようにしている
  if (number.indexOf(".") < 0) {
    number += ".";
    display(number);
  }
}

function equalClick() { //=を押した場合の処理、stateによって計算する式を変えている
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

function clearClick() { //ACを押した場合の処理、
  state = "";
  totyuu = undefined;
  display(number = "0"); //現在の状態、途中結果、初期の値をリセットしている
}

function display(msg) { //画面上に表示する為の関数
  displayArea.innerHTML = msg;
}
