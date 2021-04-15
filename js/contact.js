//반복적으로 텍스트 변경하기
var titleText = ['Hello.','Hola.','EI.','Ola.','Buenas.','你好.','Ello.','Aye.','안녕.'];
var titleTextNum = 0;

var titleI = setInterval (titleChange, 1000);

function titleChange(){
    titleTextNum++;
    if(titleTextNum == titleText.length){
        titleTextNum =0;
    }
    document.getElementById('hero_title').innerHTML = titleText[titleTextNum];
}

//input요소 이벤트

let talkItem = document.getElementsByClassName('talk-item');
let talkItemArray = [...talkItem];

for(let item of talkItem){

    //input focus/blur event
    item.addEventListener('focus', function(){
        this.parentNode.classList.add('active');
    });
    item.addEventListener('blur', function(){
        if(this.value.length == 0){//입력된 값이 없을 때
            this.parentNode.classList.remove('active');
        } else {
            this.parentNode.classList.add('active_2');//입력된 값이 있을 때
        }
    });

    //값이 입력될 때 input event
    item.addEventListener('input', function(){
        if(this.value.length > 1){//입력 값이 두글자 이상일 때 적용
            this.parentNode.classList.remove('error');
        } else {
            this.parentNode.classList.add('error');
        }
    });
}

//Sendmessage button click event
document.getElementById('talk_send').addEventListener('click', function(e){
    e.preventDefault();
    //입력 값이 입력되지 않은 경우
    talkItemArray.forEach((item, index) => {
        if(talkItem[index].value == ''){
            talkItem[index].parentNode.classList.add('error');
        }
    });

    //입력 값이 모두 입력된 경우 성공메세지 출력
    if(document.getElementsByClassName('error').length == 0){
        document.getElementById('talkRight').style.display = 'none';
        document.getElementById('success').style.display = 'block';
    }
});

//각 도시 현재 시간 나타내기

let presentTime = new Date(),
    utcHours = presentTime.getUTCHours(), //UTC 시간 구하기
    utcMinutes = presentTime.getUTCMinutes();//UTC 분 구하기
    if(utcMinutes < 10){
        utcMinutes = `0${utcMinutes}`;
    } 
// let cityHour = [];
// let cityHourTimeOffset = [-4,-5,,-4,-5,-4,-4,0,-7,-5,-7,8,-5,9];
// let cityAmPm = [];

// for(let i = 0; i < 13 ; i++){
//     //24시간제
//     cityHour[i] = utcHours + cityHourTimeOffset[i];
//     if(cityHour[i] < 0){
//         cityHour[i] += 24;
//     }
//     //ampm 변경하기
//     if(cityHour[i] >= 12){
//         cityHour[i] = 'PM';
//     } else {
//         cityHour[i] = 'AM';
//     }
// }

//각 도시 UTC
let atlanta = utcHours - 5 + 1,
    bogota = utcHours - 5,
    brooklyn = utcHours - 5 + 1,
    chicago = utcHours - 5,
    dc = utcHours - 5 + 1,
    detroit = utcHours - 5 + 1,
    london =utcHours,
    losAngeles =utcHours - 8 + 1,
    medellin = utcHours - 5,
    oakland =utcHours - 8 + 1,
    singapore =utcHours + 8,
    toronto = utcHours - 5 + 1,
    tokyo = utcHours + 9,
    timeArray = [atlanta,bogota,brooklyn,chicago,dc,detroit,london,losAngeles,medellin,oakland,singapore,toronto,tokyo],
    AmPm;

let officeBox = document.getElementsByClassName('office-box'),
    hours = document.getElementsByClassName('hours'),
    officeBoxArray = [...officeBox];

//각 officeBox마다 할 일
officeBoxArray.forEach((box, index) => {
    //24시간제
    if(timeArray[index] < 0){
        timeArray[index] += 24;
    }
    //ampm 구하기
    if(timeArray[index] >= 0 && timeArray[index] < 12){
        AmPm = 'AM';
    } else if(timeArray[index] >= 12 && timeArray[index] < 24 ){
        AmPm = 'PM';
    }
    
    if(timeArray[index] >= 6 && timeArray[index] <= 18){//낮인 경우
        officeBoxArray[index].classList.remove('night');
        officeBoxArray[index].classList.add('day');
    } else {//밤인 경우
        officeBoxArray[index].classList.remove('day');
        officeBoxArray[index].classList.add('night');
    }
    //12시간제로 변경
    if (timeArray[index] > 12) { timeArray[index] -= 12; }

    hours[index].innerHTML = `${timeArray[index]}:${utcMinutes} ${AmPm}`;
    hours[index].innerHTML = `${timeArray[index]}:${utcMinutes} ${AmPm}`;
});

//리셋될 경우 latest-news 배경이미지 변경
let magentaBg = ['m1.jepg','m2.jpg','m3.jpg'];
let magentaTitle = ["Predictions for the Year Ahead" ,"Should Logo Designers Fear the Internet","Fighting for Progress."];
let magentaDes = ['Huge strategists, technologists, UX designers, and creatives weigh in on what’s really relevant in 2019.', 'How the New York Civil Liberties Union and Huge harnessed the power of retro technology to publicize the limits of arcane legislation.','merong']

let randomNum = Math.floor(Math.random()*magentaBg.length);
document.getElementsByClassName('latest-news')[0].style.backgroundImage = `'url(../${magentaBg[randomNum]}'`;

document.getElementsByClassName('title')[0].innerHTML = magentaTitle[randomNum];
document.getElementsByClassName('dese')[0].innerHTML = magentaDes[randomNum];

