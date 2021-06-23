
// window.onload = function(){

//     function myFunction(){

//      let nome = document.querySelector('#nome').value;

//      let idade = document.querySelector('#idade').value;


//      let paragrafo = document.createElement('p')

//      let conteudoParagrafo = document.createTextNode(nome , idade);

//      paragrafo.appendChild(conteudoParagrafo);

//      document.body.appendChild(paragrafo)
    

//     }

//  let botaoEnviar = document.querySelector('#enviar');

//  botaoEnviar.addEventListener('click' , myFunction);

// }



 function clicoubotao(){
     let nome = document.querySelector('#nome');
     let idade = document.querySelector('#idade');
     if( 
       idade.value< 18){
        let text = document.createTextNode(`Seja bem vindo ${ nome.value}, Analisando sua idade te recomendo ler Harry Potter`);
        let p= document.querySelector('#p1');
        p.innerHTML="";
        p.appendChild(text);
   
       }
     else{( 
      idade.value> 18)
     let text = document.createTextNode(`Seja bem vindo ${ nome.value}, Analisando sua idade te recomendo ler A guerra dos tronos`);
     let p= document.querySelector('#p1');
     document.createElement('p')
   p.appendChild(text);
    
     }   

 }



