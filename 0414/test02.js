'use strict';


function chkMid(){
    // 아이디: 영문자,숫자,_ 포함으로 4~20자 까지
    let reg = /^[a-zA-Z0-9]{4,20}$/g;

    if(reg.test(document.getElementById('mid').value.trim())){
        alert("사용 가능합니다.");
    } 
    else {
        alert("값을 확인하세요");
    }
}

function chkPwd(){
    // 비밀번호: 영문자,숫자,_,
    //특수문자(~!@#$%^&*()_+,.?<>[]{}한문자 이상) 포함으로 4~20자 까지
    let reg = /^[\w~!@#$%^&*()+]{4,20}$/g;

    if(reg.test(document.getElementById('pwd').value.trim())){
        alert("사용 가능합니다.");
    } 
    else {
        alert("값을 확인하세요");
    }
}

function chkNickname(){
    //닉네임: 한글만 사용 가능
    let reg = /^[가-힝]{2,5}$/g;
    
    if(reg.test(document.getElementById('nickname').value.trim())){
        alert("사용 가능합니다.");
    } 
    else {
        alert("값을 확인하세요");
    }
}

function chkUname(){
    //성명: 한글,영문 사용가능
    let reg = /^[가-힝a-zA-Z]{2,15}$/g;

    if(reg.test(document.getElementById('uname').value.trim())){
        alert("사용 가능합니다.");
    } 
    else {
        alert("값을 확인하세요");
    }
}

function chkEmail(){
    let reg = /^[a-zA-Z0-9]+@[a-zA-Z]+\.(com|kr)$/g;

    if(reg.test(document.getElementById('email').value.trim())){
        alert("사용 가능합니다.");
    } 
    else {
        alert("값을 확인하세요");
    }
}

function chkHomepage(){
    let reg = /^(www)\.[a-zA-Z]+\.(com|kr)$/g;

    if(reg.test(document.getElementById('homepage').value.trim())){
        alert("사용 가능합니다.");
    } 
    else {
        alert("값을 확인하세요");
    }
}