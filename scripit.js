let botão = document.querySelector("#botão");
botão.style.background="blue";
let estáQuebrado=false;
botão.addEventListener("mouseover",trocaverde);
   if(estáQuebrado===false)

function trocaverde(){
    botão.style.background="green";
}

botão.addEventListener("mouseout",e=>{
    if(estáQuebrado===false)
    botão.style.background="blue";
});

botão.addEventListener("click",e=>{
    botão.style.background="red";
    botão.innerHTML="quebrei";
    estáQuebrado=true;
});