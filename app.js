const cal = document.querySelector(".calculator");
const input = document.getElementById("result");
const btn = document.querySelectorAll('button');
const sum = document.querySelector(".equal");
cal.addEventListener('click',ff);
var all =[];

function ff(e){
    const ss=[]
 const item =e.target
 try{
if(item.value=='clear' ){
    input.innerText="";
    all =[]
 }else{
     const aa = item.value
     all.push(aa);
     const evaluv= all.join("") 
     ss.push(evaluv)
     input.innerText=evaluv
    if(item.classList[0]==="equal"){
       if(eval(input.innerHTML)===undefined){
           all=[]
        input.innerText=""
      }else{
       const ans=  eval(input.innerHTML);
         input.innerText=ans
     }
   
}
 }
}catch(e){
    input.innerText="SyntaxError: Invalid";
}
}





