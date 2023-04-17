'use strict';
let text1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcde';
let text2='  ABC    ABCBCDEF   GHABCI  JKLMN   ';

// demo.innerHTML= text1;
// demo.innerHTML= text1.length;
// demo.innerHTML= text1.substring(0,10);
// demo.innerHTML= text1.slice(0,10);
// demo.innerHTML= text1.slice(10);
// demo.innerHTML= text1.substr(10);
// demo.innerHTML= text1.replace("A","B");
// demo.innerHTML= text1.replace("ABC","CBA");
// demo.innerHTML= text2.replace("ABC","CBA");
// demo.innerHTML= text1.replaceAll("ABC","CBA");
// demo.innerHTML= text1.concat("안녕",123);
// demo.innerHTML= text1.concat("안녕");
// demo.innerHTML= text2.trim();
// demo.innerHTML= text2.trimStart() +"abc";
// demo.innerHTML= "abc"+text2.trimEnd() +"abc";
// demo.innerHTML= text1.replaceAll(" ","");
// demo.innerHTML= text1.charAt(5);
// demo.innerHTML= text1.charCodeAt(5);
let mbc = text2.split("AB");
// demo.innerHTML= mbc;
// demo.innerHTML= typeof(mbc);



// let temp=''
// mbc.forEach(function(arr,i){
//     temp += i+","+arr+"/";
// })
// demo.innerHTML= temp

// let tel = '010-3423-2704';
// let title=['지역번호','국번호','전화번호'];

// temp='';
// temp = tel.split("-");
// tel.split("-").forEach((arr,i)=>{
//     console.log(title[i] +":" + arr);
// })

// demo.innerHTML= text1.indexOf("a");
// demo.innerHTML= text2.lastIndexOf("A");
// demo.innerHTML= text2.search("z");
// demo.innerHTML= text2.includes("A");

let price = 1000; //가격
let vat = 1.25 //부가가치세
let total = price*vat;
// demo.innerHTML= total;

//EL표기법(Expression Language) = > ${}
let str=`총금액 : ${total}원`; 
demo.innerHTML= str;