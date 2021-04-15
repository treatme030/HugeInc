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

//각 도시 UTC
let atlanta = utcHours - 5 + 1,
    bogota = utcHours - 5,
    brooklyn = utcHours - 5 + 1,
    chicago = utcHours - 5,
    dc = utcHours - 5 + 1,
    detroit = utcHours - 5 + 1,
    london =utcHours + 1,
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

    time(index);
    
    if(timeArray[index] >= 6 && timeArray[index] <= 18){//낮인 경우
        officeBoxArray[index].classList.remove('night');
        officeBoxArray[index].classList.add('day');
        hours[index].innerHTML = `${timeArray[index]}:${utcMinutes} ${AmPm}`;
    } else {//밤인 경우
        officeBoxArray[index].classList.remove('day');
        officeBoxArray[index].classList.add('night');
        hours[index].innerHTML = `${timeArray[index]}:${utcMinutes} ${AmPm}`;
    }
});
//각 도시 현재시간 나타내는 함수
function time(t){
    if(timeArray[t] < 0){
        timeArray[t] += 24;
    }
    if(timeArray[t] >= 24){
        timeArray[t] -= 24;
    }
    if(timeArray[t] >= 0 && timeArray[t] < 12){
        AmPm = 'AM';
    } else if(timeArray[t] >= 12 && timeArray[t] < 24 ){
        AmPm = 'PM';
    } 
}
