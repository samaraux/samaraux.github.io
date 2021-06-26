let resultado = document.querySelector("#resultado");
    function adicao(){
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    resultado = (num1.value*1) + (num2.value*1);
    resposta.innerHTML=` ${resultado}`;
   }      

   

   function subtracao(){
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    resultado = (num1.value) - (num2.value);
    resposta.innerHTML=` ${resultado}`;
       
       
   }
   
   function divisao(){
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    resultado = (num1.value) / (num2.value);
    resposta.innerHTML=` ${resultado}`;
       
   }
   
   function multiplicacao(){
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    resultado = (num1.value) * (num2.value);
    resposta.innerHTML=` ${resultado}`;

   }