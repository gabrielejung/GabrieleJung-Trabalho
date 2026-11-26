// js do formulario de contato

var form = document.getElementById('formContato');
var modalSucesso = new bootstrap.Modal(document.getElementById('modalSucesso'));

form.addEventListener('submit', function (event) {
    // não deixa o form enviar de verdade
    event.preventDefault();

    // mostra os erros do bootstrap (vermelho/verde)
    form.classList.add('was-validated');

    // se tiver campo errado, para aqui
    if (!form.checkValidity()) {
        return;
    }

    // pega só o primeiro nome pra mostrar no modal
    var nome = document.getElementById('nome').value.trim().split(' ')[0];
    document.getElementById('nomeSucesso').textContent = nome;

    // abre o modal de sucesso e limpa o formulario
    modalSucesso.show();
    form.reset();
    form.classList.remove('was-validated');
});
