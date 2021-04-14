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
        if(this.value.length > 1){//입력 값이 두글자 이상일 때
            this.parentNode.classList.remove('error');
        } else {
            this.parentNode.classList.add('error');
        }
    });
}

//Sendmessage button click event
document.getElementById('talk_send').addEventListener('click', function(e){
    e.preventDefault();
    let isCheck = true;
    
    if(talkItem[0].value == ''){
        talkItem[0].parentNode.classList.add('error');
        isCheck = false;
    }
    if(talkItem[1].value == ''){
        talkItem[1].parentNode.classList.add('error');
        isCheck = false;
    }
    if(talkItem[2].value == ''){
        talkItem[2].parentNode.classList.add('error');
        isCheck = false;
    }
    if(talkItem[3].value == ''){
        talkItem[3].parentNode.classList.add('error');
        isCheck = false;
    }
    if(isCheck){
        document.getElementById('talkRight').style.display = 'none';
        document.getElementById('success').style.display = 'block';
    }
    isCheck = true; 
});


