function enviar() {

    let nomeUsuario = document.getElementById('nome').value
    let emailUsuario = document.getElementById('email').value
    let data = document.getElementById('data').value
    let senha = document.getElementById('senha').value

    let classeViagem = document.querySelector("input[name='classe']:checked").value

    alert('Seu nome é: ' + nomeUsuario + '\n' 
    + 'Seu email é: ' + emailUsuario + '\n'
    + 'Data de nascimento: ' + data + '\n'
    + 'Sua senha registrada foi: ' + senha + '\n'
    + 'Você escolheu viajar na: ' + classeViagem)

    window.location.href = 'formulario.html'
    
}

function retornar() {

    window.location.href = 'index.html'
}