
const keyboard = document.querySelector('.keyboard');
const keybord = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 36, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 33, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 34, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 161, 38, 35, 17, 91, 18, 32, 226, 181, 171, 37, 40, 39];


let simvol ='';
//добавление даты и символа .//
for(let i=0;i<keybord.length;i++){
     simvol+='<div class="key" data="'+keybord[i]+'">'+String.fromCharCode(keybord[i])+'</div>'
keyboard.innerHTML=simvol;
}
document.querySelector('.key[data="192"]').innerHTML='`';
document.querySelector('.key[data="189"]').innerHTML='-';
document.querySelector('.key[data="187"]').innerHTML='=';
document.querySelector('.key[data="9"]').innerHTML='&harr;&nbsp;&nbsp;&nbsp;TAB.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp' ;
document.querySelector('.key[data="36"]').innerHTML='HOME';
document.querySelector('.key[data="219"]').innerHTML='[';
document.querySelector('.key[data="221"]').innerHTML=']';
document.querySelector('.key[data="220"]').innerHTML='&ang;';
document.querySelector('.key[data="33"]').innerHTML='&nbsp;&nbsp;PGUP';
document.querySelector('.key[data="20"]').innerHTML='&nbsp;&nbsp;CAPSLOCK.&nbsp;&nbsp;';
document.querySelector('.key[data="186"]').innerHTML=';';
document.querySelector('.key[data="222"]').innerHTML= '&prime;';
document.querySelector('.key[data="13"]').innerHTML= '&#8617;&nbsp;&nbsp;&nbsp;&nbsp;ENTER.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp';
document.querySelector('.key[data="34"]').innerHTML= '&nbsp;&nbsp;PGDN';
document.querySelector('.key[data="16"]').innerHTML= '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8679;&nbsp;&nbsp&nbsp;SHIFT.&nbsp;&nbsp;&nbsp;&nbsp';
document.querySelector('.key[data="188"]').innerHTML= '&sbquo;';
document.querySelector('.key[data="190"]').innerHTML= '.';
document.querySelector('.key[data="191"]').innerHTML= '/';
document.querySelector('.key[data="161"]').innerHTML= '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8679;&nbsp&nbsp;&nbsp;SHIFT.&nbsp;&nbsp;&nbsp;&nbsp'; 
document.querySelector('.key[data="38"]').innerHTML= '&uarr;';
document.querySelector('.key[data="35"]').innerHTML= 'END';
document.querySelector('.key[data="17"]').innerHTML= 'CTRL';
document.querySelector('.key[data="91"]').innerHTML= '&#9733;';
document.querySelector('.key[data="18"]').innerHTML= 'ALT';
document.querySelector('.key[data="226"]').innerHTML= '&ang;';
document.querySelector('.key[data="181"]').innerHTML= 'ALT';
document.querySelector('.key[data="171"]').innerHTML= 'CTRL';
document.querySelector('.key[data="37"]').innerHTML= '&larr;';
document.querySelector('.key[data="40"]').innerHTML= '&darr;';
document.querySelector('.key[data="39"]').innerHTML= '&#8594;';
document.querySelector('.key[data="32"]').innerHTML= '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.querySelector('.key[data="8"]').innerHTML = 'BACKSPACE';


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
else
if(event.getModifierState('CapsLock')){
    if(event.keyCode !=20){
    addk = String.fromCharCode(event.keyCode);
    Arrtext.push(addk);
}
}
else{
    addk=String.fromCharCode((String.fromCharCode(event.keyCode).toLowerCase()).charCodeAt());
    if(event.keyCode != 20){
       
        Arrtext.push(addk);
    }
    
}

//Переназначение кнопок...END.//
 //вывод текста на экран...//
 //Arrtext.push(addk);
arrtext = Arrtext.join('');
document.querySelector('.text').innerHTML=arrtext;

  //вывод текста на экран...END//

}

   //Переназначение кнопок...END.//
    //вывод текста на экран...//
    
  

  
 



//Мишка

let selectorkey = document.querySelectorAll('#keyboard .key');
selectorkey.forEach(function(element) {
    element.onclick = function(ev){
        act = document.getElementsByClassName('active');
    if(act[0]){
       act[0].classList.remove('active');
    }
    
    let datakey = element.getAttribute('data');
    document.querySelector('.key[data="'+datakey+'"]').classList.add('active');
    if(datakey==189){
        addk='-';   
        Arrtext.push(addk);
     }
     else
        if(datakey =='8'){ 
       Arrtext.splice(Arrtext.length-1,1);
    }
    else
        if(datakey ==187){ 
            addk='=';   
            Arrtext.push(addk);
    }
    
    else{
    addk = String.fromCharCode(datakey);
    Arrtext.push(addk);
    arrtext = Arrtext.join('');
    document.querySelector('.text').innerHTML=arrtext;
    }
    arrtext = Arrtext.join('');
    document.querySelector('.text').innerHTML=arrtext;

}
});
//Мишка end//
  
  

