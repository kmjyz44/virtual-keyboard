
const keyboard = document.querySelector('.keyboard');
const keybord = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 36, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 33, 20, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 34, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 38, 35, 17, 91, 18, 32, 226, 18, 17, 37, 40, 39];


let simvol ='';

for(let i=0;i<keybord.length;i++){
     simvol+='<div class="key" data="'+keybord[i]+'">'+String.fromCharCode(keybord[i])+'</div>'
keyboard.innerHTML=simvol;
}
let key='';
let addk ='';
const newLocal = 'backspase';
document.onkeydown = function(event){
    let act = document.getElementsByClassName('active');
 if(act[0]){
     act[0].classList.remove('active');
 }
 document.querySelector('.key[data="'+event.keyCode+'"]').classList.add('active');
 addk += String.fromCharCode(event.keyCode);
 document.querySelector('.text').innerHTML=addk;
}

document.querySelector('.key[data="8"]').innerHTML = 'BACKSPACE';

