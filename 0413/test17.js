'use strict';

// 오늘 날짜를 전역변수로
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()+1;  // 0: 1월 1: 2월 ....
const day = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const yymmdd= year + "-" + month + "-" + day +" "+hour +":" + minute + ":" +second;

// 표준 날짜
function fCheck1(){
    console.log("표준날짜: " + today);
    demo.innerHTML=today;
}
// 편집 날짜
function fCheck2(){
    console.log("편집날짜: " + yymmdd);
    demo.innerHTML=yymmdd;
}
// 편집 날짜 요일 추가 : 0:일 1:월 2:화 3:수 ....
function fCheck3(){
    let str = today.getDay();
    let week = ["일","월","화","수","목","금","토"];
    demo.innerHTML=week[str] + "요일";
}
// 해당 월의 마지막 일자
function fCheck4(){
    let mon = prompt("마지막 날짜의 출력할 년을 입력하세요(yyyy-mm)");
    
    let temp = mon.split("-");
    let yy=temp[0];
    let mm=temp[1];

    let str = new Date(yy,mm,0); // new Date(년,월,알,시,분,초)
    let strDate = str.getFullYear() +'-';
    strDate += (str.getMonth()+1)+"-";
    strDate += str.getDate();
    strDate = "해당월의 마지막 일자"+strDate


    demo.innerHTML= strDate; //
}