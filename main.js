

let ima=document.querySelectorAll(".indexima");

let $cuerpo=document.querySelector("body");
let $cabe=document.querySelector("header");
let $item=document.querySelectorAll("li.item-menu");


let inicial=1;

mover(inicial);

function desplaza(n){
    mover(inicial+=n)

}


function mover(valor){
   


    if(valor>ima.length){inicial=1}
    if(valor < 1 ){inicial=ima.length}

    for (let index = 0; index < ima.length; index++) {

        ima[index].style.display="none"
    }
    ima[inicial-1].style.display="block"
}

let idn=0;
moverse();
function moverse(){
   
    let imaa=document.querySelectorAll(".indexima");
    for (let index = 0; index < imaa.length; index++) {

        imaa[index].style.display="none"
    }
    idn++;
    if(idn>imaa.length){idn=1}
    imaa[idn-1].style.display="block";

    setTimeout(moverse,2000)
}



// function noche(){
//     $cuerpo.style.backgroundColor="#30323f"
//     $cabe.style.backgroundColor="#1f212b"

//     for (lista of $item){
//         lista.style.backgroundColor="#484b66"
//     }

    
// }

function noche(){
    $cuerpo.classList.toggle("negro")
    $cabe.classList.toggle("cabe")
    
    for (lista of $item){
          lista.classList.toggle("negro")
      }
    
}