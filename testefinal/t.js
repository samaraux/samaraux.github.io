
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
        let text = document.createTextNode(`Seja bem vindo ${ nome.value}, Analisando sua idade te recomendo ler Harry Potter:um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts`);
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
 



  //   <ol class="foto">
  //       <li ><a href=""  ><img  src="./imagens/61ho40YQCkL.jpg" width="200" height="250px"></a> </li>
  //       <li ><a href=""><img  src="./imagens/61kDryop9IL.jpg"width="200" height="250px" ></a></li>
  //       <li ><a href="./Harry Potter e A Pedra Filosofal (1).pdf"><img  src="./imagens/harry-potter-livro-1-edic3a7c3a3o-comemorativa1.jpg"width="200" height="250px" ></a></li>
  //       <li><a href=""><img src="./imagens/91ytruCTL8L.jpg" width="200" height="250px"></a></li>
  //       <li ><a href=""><img  src="./imagens/o conto.jpg" width="200" height="250px"></a></li>
  //   </ol>
  //   <ol class="ol2">
  //       <li ><a href=""  ><img  src="./imagens/61ho40YQCkL.jpg" width="200" height="250px"></a> </li>
  //       <li ><a href=""><img  src="./imagens/61kDryop9IL.jpg"width="200" height="250px" ></a></li>
  //       <li ><a href="./Harry Potter e A Pedra Filosofal (1).pdf"><img  src="./imagens/harry-potter-livro-1-edic3a7c3a3o-comemorativa1.jpg"width="200" height="250px" ></a></li>
  //       <li><a href=""><img src="./imagens/91ytruCTL8L.jpg" width="200" height="250px"></a></li>
  //       <li ><a href=""><img  src="./imagens/o conto.jpg" width="200" height="250px"></a></li>
  //   </ol>
  //   <hr id="hr3">
  //   <hr id="hr4">
  // <br><br>
  // <ul id="button">
  //   <li><button><a href="#1">1</a></button></li>
  //   <li> <button><a href="">2</a></button></li>
  //   <li> <button><a href="">3</a></button></li>
  // </ul>

