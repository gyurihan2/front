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
    let temp=year +"-"+month+"-"+day
    document.getElementById("date1").value=temp;
}
//날짜 비교 (isSameDay(날짜형식1,날짜형식2))
function fCheck2(){
   let start = document.getElementById("date1").value;
   let end = document.getElementById("date2").value;

    const startDate = new Date(start);
    const endDate= new Date(end);
    let temp;

    if(isSameDay(startDate,endDate)) temp = "같다";
    else temp="다르다";

    demo.innerHTML = "비교한 날짜는" + temp;
    
}
function isSameDay(startDate,endDate){
    return startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear() &&
    startDate.getDate() === endDate.getDate();  
}

// 날짜 비교하기(경과된 시간으로 비교하기)
function fCheck3(){
   let start = document.getElementById("date1").value;
   let end = document.getElementById("date2").value;

    const startDate = new Date(start);
    const endDate= new Date(end);

    //getTime() : 1/1000초
    let temp = endDate.getTime() - startDate.getTime();
    temp = temp /(60*60*24*1000);  // 일수 비교
    temp = temp /(60*60*1000);  // 시간 비교

    demo.innerHTML = "차이 " + temp;
    
}
