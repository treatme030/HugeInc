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


//Talk form focus/blur event
let talkItem = document.getElementsByClassName('talk-item');
let talkEyebrow = document.getElementsByClassName('talk_eyeborw');

for(let item of talkItem){
    item.addEventListener('focus', function(){
        for(let eyebrow of talkEyebrow){
            if(eyebrow.getAttribute('for') === this.getAttribute('id')){
                eyebrow.style.display = 'block';
            }
        }
    });

    item.addEventListener('blur', function(){
        for(let eyebrow of talkEyebrow){
            if(eyebrow.getAttribute('for') === this.getAttribute('id')){
                eyebrow.style.display = 'none';
            }
        }
    });
}