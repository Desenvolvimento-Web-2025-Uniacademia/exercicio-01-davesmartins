

let cpNome = document.getElementById("cpNome");
let hasError = false;

cpNome.onblur = (evt)=>{
    let res = validaNome(evt.target.value);
    console.log(res)
    if (res != true ){
        cpNome.classList.add("error");
        evt.target.focus();
        evt.target.value = "";
        //cpNome.focus();

        let sp = cpNome.nextElementSibling
        if (sp.tagName != "SPAN"){
            let sp = document.createElement("SPAN")     
            cpNome.after(sp);
        } 
        sp.innerText = res; 
          
    }else{
        cpNome.classList.remove("error");
        cpNome.nextElementSibling.remove()
    }
    
}

const validaNome = (nome)=>{
    if (nome ===""){
        return "Nome não pode ser vazio";
    }
    if (nome.length <=5 ){
        return "Nome deve ter mais de 5 caracteres";
    }
    // if (!nome.contains(" ") ){
    //     return "Nome deve conter sobrenome";
    // }
    return true
}