import idadeApropriada from "./validaIdade.js";   

const tiposDeErro = [
    'valueMissing',
    'typeMismatch', 
    'tooShort', 
    'tooLong',
    'customError'
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    data_nasc: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ter no mínimo 13 anos para se cadastrar.',
        tooLong: 'Por favor, preencha uma data válida.'
    },
    termo: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

const camposObrigatorios = document.querySelectorAll("[required]")


camposObrigatorios.forEach((campo) => {
    campo.addEventListener("blur", ()=> validaCampo(campo));
});

function validaCampo(campo){
    campo.setCustomValidity('');
    let mensagem = '';
    if(campo.name == "data_nasc" && campo.value != ""){
        idadeApropriada(campo);
    }

    tiposDeErro.forEach( (erro) => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
        }
    }
    );
    const spanErro = campo.parentMode.querySelector('.mensagem-erro');
    const campoValido = campo.checkValidity();
    if(!campoValido){
        spanErro.innerHTML = mensagem;
    }else{
        spanErro.innerHTML = "";
    }
}

const formulario = document.querySelector("[name=cadastro]");
formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    window.location.href = "../pages/sucesso.html"
})