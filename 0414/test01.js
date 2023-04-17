
'use strict';
function regexCheck(){
    //정규식표현 변수
    const regex1 = /atom/g; // atom이라는 문자열이 포함되어 있다면 true
    const regex2 = /kbs|mbc|sbs/g; // kbs mbc sbs 문자열을 포함하고 있느냐? 
    const regex3 = /홍길(동|순)/g;  
    const regex4 = /^[a-z]/gm; //[영문 소문자를 포함하고 있느냐]  
    const regex5 = /^[^a-z]/gm; //[영문 소문자만 포함하고 있느냐]  
    const regex6 = /^[A-Z]/gm; //[영문 대문자를 포함하고 있느냐]  
    const regex7 = /^[^A-Z]/gm; //[영문 대문자만 포함하고 있느냐]  
    const regex8 = /^[0-9]/gm; //숫자를 포함하고있느냐  
    const regex9 = /^[^0-9]/gm; //숫자만 포함하고있느냐 
    const regex10 = /^[가-힣]/gm; //한글을 포함고있느냐   
    const regex11 = /^[^가-힣]/gm; //한글만 포함고있느냐   
    const regex12 = /^[a-zA-Z0-9]{3,1}/gm; // 영문자 숫자를 포함고있느냐
    const regex13 = /^[\.]/gm; // '.'을 포함하고있느냐
    const regex14 = /^[\d]/gm; // 숫자를 포함하고 있느냐
    const regex15 = /^[\D]/gm; // 숫자만 포함하고 있느냐
    const regex24 = /^[\w]/gm; // 영문자/숫자/_을 포함하고 있느냐
    const regex25 = /^[\W]/gm; // 영문자/숫자/_만 포함하고 있느냐
    const regex26 = /^[\s]/gm; // 문장안에 공백(스페이스바/탭)을 포함하고있느냐
    
    //와일드카드: 1개 글자만 ?, 복수개의 문자의 포함유무(+,*)
    const regex31= /홍길[동]?동/g;  //? 없거나 하나 일치
    const regex32= /홍길[동]+/g;  //+ 하나이상
    const regex33= /홍길동*/g;  //? 없거나 하나이상





    let content = document.getElementById("content").value.trim();

    if(content == ""){
        alert("문자열을 입력하세요");
       
    }
    // else if(!content.match(regex4)) {
        else if(!regex12.test(content)){
        // alert("kbs mbc sbs 문자열이 없습니다.");
        // alert("홍길동(순) 없음.");
        // alert("영문 소문자가 아닙니다.");
        // alert("영문 소문자가 아닙니다.");
        alert("영문 소문자가 아닙니다.");
        return false;
    }
    else alert("정상");
}