
const keyboard = document.querySelector('.keyboard');
const keybord = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 36, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 33, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 34, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 161, 38, 35, 17, 91, 18, 32, 226, 181, 171, 37, 40, 39];


let simvol ='';
//добавление даты и символа .//
let keyboard_sim='';


function add_symvol(){
for(let i=0;i<keybord.length;i++){
     simvol+='<div class="key" data="'+keybord[i]+'">'+(String.fromCharCode(keybord[i])).toLowerCase()+'</div>'
  keyboard.innerHTML=simvol;
  }
}
add_symvol();
  
function keydatakey (){
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

}
keydatakey ();
//добавление даты и символа .end//

let arrtext='';
let bac ='';
let key='';
let addk ='';
let Arrtext = [];
const newLocal = 'backspase';

//обработчик событий//
document.onkeydown = function(event){
    let act = document.getElementsByClassName('active');
 if(act[0]){
     act[0].classList.remove('active');
 }
 else
 if(event.code=="ShiftRight"){
    
 }  
 else
 if(event.code=='ControlRight'){
     document.querySelector('.key[data="171"]').classList.add('active');  
  }
  
 else{
         document.querySelector('.key[data="'+event.keyCode+'"]').classList.add('active');
         document.querySelectorAll('#keyboard .key').forEach(function(element){
            element.innerHTML=(String.fromCharCode(element.getAttribute('data'))).toLowerCase();
            keydatakey ();
    });
 }
 let ac = document.getElementsByClassName('act');
    if(ac[0]){
        ac[0].classList.remove('act');
    }
 if(event.getModifierState('CapsLock')||event.getModifierState('Shift')){
   
    document.querySelector('.key[data="20"]').classList.add('act'); 
    document.querySelectorAll('#keyboard .key').forEach(function(element){
        element.innerHTML=(String.fromCharCode(element.getAttribute('data'))).toUpperCase();
        keydatakey ();
});
  }


//Переназначение кнопок....//
//BackSpase//
    if(event.keyCode =='8'){ 
   Arrtext.splice(Arrtext.length-1,1);
   }

else

//CAPSLOOCK______________________________________//


if(event.getModifierState('CapsLock')){
    
    if(event.keyCode !=20){
    addk = String.fromCharCode(event.keyCode);
    }
        
}
else
if(event.getModifierState("Shift")){

    addk =(event.key.toUpperCase());
}
else
if(event.keyCode==13){
    addk='                                                                            '; 
    Arrtext.push(addk); 
}
else
if(event.getModifierState("Alt"+"Shift")){

   // console.log(event.key.toUpperCase());
}


else{
    addk=event.key;
  
}
if(event.keyCode != 20 && event.keyCode != 16 && event.keyCode != 17 && event.keyCode != 18 && event.keyCode != 36 && event.keyCode != 9 && event.keyCode != 33 && event.keyCode != 13 && event.keyCode != 34 && event.keyCode != 38 && event.keyCode != 35 && event.keyCode != 17 && event.keyCode != 91 && event.keyCode != 37 && event.keyCode != 40 && event.keyCode != 39){ 
    Arrtext.push(addk);
}
if(event.keyCode =='8'){ 
    Arrtext.splice(Arrtext.length-1,1);
    
 }

//Переназначение кнопок...END.//
 //вывод текста на экран...//
 
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
  
  

