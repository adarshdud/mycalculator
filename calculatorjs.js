// (function(){
//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
//     let equal = document.querySelector('.btn-equal');

//     buttons.forEach(function(button){
//         button.addEventListener('click',function(e){
//             let value = e.target.dataset.num;
//             screen.value += value;
//         })
//     });

//     equal.addEventListener('click',function(e){
//         if(screen.value ===''){
//             screen.value = "";
//         }
//         else{
//             let answer = eval(screen.value);
//             screen.value = answer;
//         }
//     });
    
//     clear.addEventListener('click',function(e){
//         screen.value="";
//     })


// })();





// (function(){
//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
//     let equal = document.querySelector('.btn-equal');
//     let del = document.querySelector('.del');


//     buttons.forEach(function(button){
//         button.addEventListener('click',function(e){
//             let value = e.target.dataset.num;
//             screen.value += value;
//         })
//     });

//     equal.addEventListener('click',function(e){
//         if(screen.value ===''){
//             screen.value = "";
//         }
//         else if(screen.value =='del'){
//             answer = answer.substring(0,answer.lenght-1);
//             screen.value=answer;
//         }
//         else{
//             let answer = eval(screen.value);
//             screen.value = answer;
//         }
//     });

//     del.addEventListener('click',function(e){
//         let answer = answer.substring(0,answer.lenght-1);
//         screen.value=answer;
//     });
    
//     clear.addEventListener('click',function(e){
//         screen.value="";
//     })


// })();








// let string="";
// let buttons=document.querySelectorAll('.btn');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=='='){
//             string=eval(string);
//             document.querySelector('.screen').value=string;
//         }
//         else if(e.target.innerHTML=='c'){
//             string="";
//             document.querySelector('.screen').value=string;

//         }
//         else{
//                 console.log(e.target)
//                 string = string + e.target.innerHTML;
//                 document.querySelector('.screen').value=string;
//             }
//     })
// })


var result=document.getElementById("result");

function display(number){
    result.value+=number;
}

function calculate(){
    var final_number=result.value;
    var final_result=eval(final_number);
    result.value=final_result;
}

function Allclear(){
    result.value="";
}
function del(){
    result.value=result.value.slice(0,-1);
}

let per=document.getElementById("perc");
per.addEventListener('click',function(e){
    result.value=eval(result.value.replace("%","/100"));
})