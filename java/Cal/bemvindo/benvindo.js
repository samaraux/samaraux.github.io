function clicoubotao(){
    let nome = document.querySelector('#nome');
    let idade = document.querySelector('#idade');
    if( 
      idade.value> 0){
       let text = document.createTextNode(`Seja bem vindo ${ nome.value}, voce tem ${idade.value} anos`);
       let p= document.querySelector('#p1');
       p.innerHTML="";
       p.appendChild(text);
  
      }
    }