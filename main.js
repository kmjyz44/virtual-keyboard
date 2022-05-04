
const keyboard = document.querySelector('.keyboard');
const keybord = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 36, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 33, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 34, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 38, 35, 17, 91, 18, 32, 226, 18, 17, 37, 40, 39];


let simvol ='';
//добавление даты и символа .//
for(let i=0;i<keybord.length;i++){
     simvol+='<div class="key" data="'+keybord[i]+'">'+String.fromCharCode(keybord[i])+'</div>'
keyboard.innerHTML=simvol;
}
document.querySelector('.key[data="192"]').innerHTML='`';
document.querySelector('.key[data="189"]').innerHTML='-';
document.querySelector('.key[data="187"]').innerHTML='=';
document.querySelector('.key[data="9"]').innerHTML='&nbsp;&harr;&nbsp;&nbsp;&nbsp;TAB.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp' ;
document.querySelector('.key[data="36"]').innerHTML='HOME';
document.querySelector('.key[data="219"]').innerHTML='[';
document.querySelector('.key[data="221"]').innerHTML=']';
document.querySelector('.key[data="220"]').innerHTML='&ang;';
document.querySelector('.key[data="33"]').innerHTML='&nbsp;&nbsp;PGUP';
document.querySelector('.key[data="20"]').innerHTML='&nbsp;&nbsp;CAPSLOCK.&nbsp;&nbsp;';
document.querySelector('.key[data="186"]').innerHTML=';';
document.querySelector('.key[data="222"]').innerHTML= '&prime;';
document.querySelector('.key[data="13"]').innerHTML= '&nbsp;&#8617;&nbsp;&nbsp;&nbsp;&nbsp;ENTER.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp';
document.querySelector('.key[data="34"]').innerHTML= '&nbsp;&nbsp;PGDN';
document.querySelector('.key[data="16"]').innerHTML= '&nbsp;&#8679;&nbsp;&nbsp;SHIFT.&nbsp';
document.querySelector('.key[data="188"]').innerHTML= '&sbquo;';
document.querySelector('.key[data="190"]').innerHTML= '.';
document.querySelector('.key[data="191"]').innerHTML= '/';
//добавление даты и символа .end//
let arrtext='';
let bac ='';
let key='';
let addk ='';
let Arrtext = [];
const newLocal = 'backspase';

document.onkeydown = function(event){
    let act = document.getElementsByClassName('active');
 if(act[0]){
     act[0].classList.remove('active');
 }
 document.querySelector('.key[data="'+event.keyCode+'"]').classList.add('active');
 
//Переназначение кнопок....//
 if(event.keyCode==189){
    addk='-';   
    Arrtext.push(addk);
 }
 else
    if(event.keyCode =='8'){ 
   Arrtext.splice(Arrtext.length-1,1);
}
else
    if(event.keyCode ==187){ 
        addk='=';   
        Arrtext.push(addk);
}

else{
    addk = String.fromCharCode(event.keyCode);
    Arrtext.push(addk);
    
}

//Переназначение кнопок...END.//

 //вывод текста на экран...//
arrtext = Arrtext.join('');
document.querySelector('.text').innerHTML=arrtext;
 
 
  //вывод текста на экран...END//

}

document.querySelector('.key[data="8"]').innerHTML = 'BACKSPACE';

