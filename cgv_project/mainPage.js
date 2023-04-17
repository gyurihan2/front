'use strict';
let movieChartName=[['존윅4','jw.jpg'],['슬램덩크','slamdunk.jpg'],['스즈메의 문단속','스즈메.jpg'],
    ['리바운드','rebound.jpg'],['슈퍼마리오','supermario.jpg'],['옥수역귀신','옥수역.jpg'],['킬링로맨스','킬링로맨스.jpg'],
    ['렌필드','렌필드.jpg'],['인셉션','인셉션.jpg'],['플레이어','플레이어.jpg'],['에어','에어.jpg'],['거울속외딴성','거울속외딴성.jpg']];
let startPage=0;
let endPage=Math.floor(movieChartName.length/4)-1;

function changeImgHall(hall){
   document.getElementById('test11').src = "../images/cgv_images/"+hall.id+".png";
}

function movieChartPrevious(){
    startPage--;
    if(startPage == 0) document.getElementById("moviePrevious").style.visibility="hidden";
    if(startPage >= 0) document.getElementById("movieNext").style.visibility="visible";
    
    let movieChart = document.getElementsByName("movieChartImg");
    let moviename = document.getElementsByName("movieChartName");
    let start = startPage*4;
    for(let i=0;i<4;i++){
        if(movieChartName[start] != null){
            if( movieChart[i].style.display =="none") movieChart[i].style.display="block"
            
            movieChart[i].src="../images/cgv_images/"+movieChartName[start][1];
            moviename[i].innerText=movieChartName[start][0];
            start++;
        }
        
    }
}

function movieChartNext(){
    startPage++;
    if(startPage == endPage) document.getElementById("movieNext").style.visibility="hidden";
    if(startPage > 0) document.getElementById("moviePrevious").style.visibility="visible";

    let movieChart = document.getElementsByName("movieChartImg");
    let moviename = document.getElementsByName("movieChartName");
    let start = startPage*4;
    for(let i=0;i<4;i++){
        if(movieChartName[start] != null){
            movieChart[i].src="../images/cgv_images/"+movieChartName[start][1];
            moviename[i].innerText=movieChartName[start][0];
            start++;
        }
        else{
            movieChart[i].style.display="none";
            moviename[i].innerText="";
            start++;
        }
    }
}

let movieHallCnt=0;
let movieHall=['imax.png','4dx.png','screenx.png','primium.png'];
let statusTime;

function moviehall(id){
    id.src= "../images/cgv_images/"+movieHall[movieHallCnt++];
    if(movieHallCnt == movieHall.length) movieHallCnt=0;
}

function movieHallAutoStart(){
    moviehall(document.getElementById("test11"));
    statusTime = setTimeout(movieHallAutoStart,3000);
}
function movieHallAutoStop(){
    clearTimeout(statusTime);
}

window.onload = function(){
    movieHallAutoStart();
    hall_lists.addEventListener('mouseout',()=>{
        movieHallAutoStart();
    })
   
}
