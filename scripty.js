
const btn = document.querySelector(".btn")
const inp = document.querySelector(".inp")
const listCompleta = document.querySelector(".list-Ul")



let minhaLista = []

function adicionarTarefa() {

    minhaLista.push({
        tarefa: inp.value,
        concluida: false
    })
    inp.value = ""

    mostrarTarefas()
}



function mostrarTarefas() {

    let novaLi =  ""

    minhaLista.forEach((item, posiçao )=> {
        novaLi = novaLi +`
            <li class="list-Li  ${item.concluida && "concluir"}">
           <img  src="./img/verificação.png" onclick="concluirTarefa(${posiçao})">
            <p>${item.tarefa}</p>
           <img src="./img/lixeira.png" onclick="deletar(${posiçao})" >
          </li>
          `


    })

    listCompleta.innerHTML = novaLi
    localStorage.setItem("listadeItens", JSON.stringify(minhaLista) )
     
     
}

function deletar(posiçao){
     minhaLista.splice(posiçao, 1)
   
     mostrarTarefas() 
}



function concluirTarefa (posiçao){
    minhaLista[posiçao].concluida = ! minhaLista[posiçao].concluida
     
    mostrarTarefas()
}



function recarregarTarefas(){
    const tarefasdolocalstorage = localStorage.getItem("lista")
    if(tarefasdolocalstorage){
    minhaLista = JSON.parse(tarefasdolocalstorage)

    }
    
    mostrarTarefas()
}




function adicionarTarefa() {
   
    if (inp.value.trim() === "") {
        alert("Por favor, insira uma tarefa antes de adicionar!");
        return; 
    }

    minhaLista.push({
        tarefa: inp.value,
        concluida: false
    });
    inp.value = "";

    mostrarTarefas();
}




recarregarTarefas()
btn.addEventListener("click", adicionarTarefa)

