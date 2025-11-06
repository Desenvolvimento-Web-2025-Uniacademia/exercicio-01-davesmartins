
let nome = 'Zezin da Silva'

//alert('Olá ' + nome + ', seja bem vindo ao JavaScript!')
console.log('Olá ' + nome 
    + ', seja bem vindo ao JavaScript!')

//1º Uso:     
// manipular DOM - Document Object Model 
//console.log(document)
let tit = document.getElementById('titulo')
tit.innerHTML = 'JavaScript'

//2º Uso:
//manipular Eventos - manipular iterações do usuário
let dv = document.getElementById("dvAll")
console.log(dv)

function abc(){
    alert("click")
}
dv.onclick = abc

function entrarMouse(){
    //alert("mouse entrou na div")
   dv.style.border = 'solid 5px red'
    dv.style.backgroundColor = 'rgba(219, 198, 44, 1)'
}
function sairMouse(){
    //alert("mouse entrou na div")
   dv.style.border = '0px red solid'
    dv.style.backgroundColor = '#9b9191'
}
dv.onmouseenter = entrarMouse
dv.onmouseleave = sairMouse
// arrow function
dv.onclick = ()=>{
                    // alert("click")
                    tit.innerHTML = 'xpto'
                }

let cp = document.getElementById("txtNome")                
let btn = document.getElementById("btnEnviar")   
let x = False
x = 12
btn.onclick = ()=>{
    console.log('Olá '+cp.value)
    let p1 = document.createElement('p')
    p1.innerHTML = cp.value
    dv.appendChild(p1)
    cp.value = ''
}