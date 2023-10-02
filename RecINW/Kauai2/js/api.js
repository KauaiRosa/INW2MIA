'use strict'

function cadastrar(){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const mensagem = document.getElementById('mensagem').value
    const novo = {nome: nome, email: email, mensagem: mensagem}
    createContato(novo)
}

async function listar(){
    let corpo = document.getElementsByTagName('tbody')[0]
    let lista = [];
    const url = 'http://localhost:3000/projeto/'
    const response = await fetch(url)
    lista = await response.json()
    console.log(lista);
    lista.forEach(contato => {
        corpo.innerHTML += `
            <tr>
                <td>${contato.nome}</td>
                <td>${contato.email}</td>
                <td>${contato.mensagem}</td>
            </tr>
        `
    });

}

async function createContato(newTask){
    const url = 'http://localhost:3000/projeto/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newTask)
    }
    const response = await fetch(url, options)
}   


