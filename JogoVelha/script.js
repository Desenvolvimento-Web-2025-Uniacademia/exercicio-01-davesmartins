
// Varaiveis globais
let placar = {x:0, o:0, e:0}
let turno = "X"
let contJogadas = 0;
let vencedor = null

const atualizaPlacar = () => {
    let sx = document.getElementById("sx")
    let so = document.getElementById("so")
    let se = document.getElementById("se")
    sx.innerHTML = placar.x
    so.innerHTML = placar.o
    se.innerHTML = placar.e
}
const zerarPlacar = () => {
    placar = {x:0, o:0, e:0}
    atualizaPlacar()
}
const atualizaTurno = () =>{
    let status = document.getElementById("status")
    status.innerHTML = "Vez de: "+turno

    let bx = document.getElementById("badgeX")
    let bO = document.getElementById("badgeO")
    if (turno=="X"){
        bx.classList.add("active")
        bO.classList.remove("active")
    }else{
        bO.classList.add("active")
        bx.classList.remove("active")

    }

}
const verificaVencedor = () =>{
    // 1ª linha
    if (cells[0].innerHTML == cells[1].innerHTML &&
        cells[1].innerHTML == cells[2].innerHTML &&
        cells[0].innerHTML != ""
    ){
        if (cells[0].innerHTML == "X"){
            placar.x += 1
            atualizaPlacar()
        }else{
            placar.o += 1
            atualizaPlacar()
        }
        cells[0].classList.add("win")
        cells[1].classList.add("win")
        cells[2].classList.add("win")
        vencedor = turno
        return
    }

    // 2ª linha
    if (cells[3].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[5].innerHTML &&
        cells[3].innerHTML != ""
    ){
        if (cells[3].innerHTML == "X"){
            placar.x += 1
            atualizaPlacar()
        }else{
            placar.o += 1
            atualizaPlacar()
        }
        cells[3].classList.add("win")
        cells[4].classList.add("win")
        cells[5].classList.add("win")
        vencedor = turno
        return
    }

    // 3ª linha
    if (cells[6].innerHTML == cells[7].innerHTML &&
        cells[7].innerHTML == cells[8].innerHTML &&
        cells[6].innerHTML != ""
    ){
        if (cells[6].innerHTML == "X"){
            placar.x += 1
            atualizaPlacar()
        }else{
            placar.o += 1
            atualizaPlacar()
        }
        cells[6].classList.add("win")
        cells[7].classList.add("win")
        cells[8].classList.add("win")
        vencedor = turno
        return
    }

    // 1ª coluna
    if (cells[0].innerHTML == cells[3].innerHTML &&
        cells[3].innerHTML == cells[6].innerHTML &&
        cells[0].innerHTML != ""
    ){
        if (cells[0].innerHTML == "X"){
            placar.x += 1
            atualizaPlacar()
        }else{
            placar.o += 1
            atualizaPlacar()
        }
        cells[0].classList.add("win")
        cells[3].classList.add("win")
        cells[6].classList.add("win")
        vencedor = turno
        return
    }

    // 2ª coluna
    if (cells[1].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[7].innerHTML &&
        cells[1].innerHTML != ""
    ){
        if (cells[1].innerHTML == "X"){
            placar.x += 1
            atualizaPlacar()
        }else{
            placar.o += 1
            atualizaPlacar()
        }
        cells[1].classList.add("win")
        cells[4].classList.add("win")
        cells[7].classList.add("win")
        vencedor = turno
        return
    }

    // 3ª coluna
    if (cells[2].innerHTML == cells[5].innerHTML &&
        cells[5].innerHTML == cells[8].innerHTML &&
        cells[2].innerHTML != ""
    ){
        if (cells[2].innerHTML == "X"){
            placar.x += 1
            atualizaPlacar()
        }else{
            placar.o += 1
            atualizaPlacar()
        }
        cells[2].classList.add("win")
        cells[5].classList.add("win")
        cells[8].classList.add("win")
        vencedor = turno
        return
    }

    // diagonal primaria
    if (cells[0].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[8].innerHTML &&
        cells[0].innerHTML != ""
    ){
        if (cells[0].innerHTML == "X"){
            placar.x += 1
            atualizaPlacar()
        }else{
            placar.o += 1
            atualizaPlacar()
        }
        cells[0].classList.add("win")
        cells[4].classList.add("win")
        cells[8].classList.add("win")
        vencedor = turno
        return
    }

    // diagonal secundaria
    if (cells[2].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[6].innerHTML &&
        cells[2].innerHTML != ""
    ){
        if (cells[2].innerHTML == "X"){
            placar.x += 1
            atualizaPlacar()
        }else{
            placar.o += 1
            atualizaPlacar()
        }
        cells[2].classList.add("win")
        cells[4].classList.add("win")
        cells[6].classList.add("win")
        vencedor = turno
        return
    }

    if (contJogadas == 9){
        placar.e += 1
        atualizaPlacar()
    }


}


//capturar eventos
let btnReset = document.getElementById("btnReset")
btnReset.onclick = () =>{
    turno ="X"
    atualizaTurno()
    cells.forEach((cell)=>{
        cell.innerHTML = ""
        cell.classList.remove("win")
        contJogadas = 0
        vencedor = null
    })
}
let btnZerar = document.getElementById("btnClear")
btnZerar.onclick = zerarPlacar

let cells = document.querySelectorAll(".cell")

cells.forEach((cell)=>{
    cell.onclick = (e) =>{
        //console.log(e)
        if(e.target.innerHTML == "" && vencedor == null){
            e.target.innerHTML = turno
            contJogadas += 1
            turno = (turno=="X")?"O":"X"
            atualizaTurno()
            verificaVencedor()
        }
    }
})

atualizaPlacar()
atualizaTurno()


