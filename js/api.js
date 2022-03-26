//obervar as teclas digitadas

const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");


const BASE_URL = "https://brasilapi.com.br/api"



inputCep.onkeyup = async (evento) => {
//verificando se o cep cumpriu os 8 digitos
    if (inputCep.value.length < 8) {
        return;
    }
//fazendo uam requisição a api BRASILAPI para buscar informações com o cep digitado
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: "GET",
    })
    //EXTRAINDO O JSON
const conteudoResposta = await resposta.json()

 //atribuindo os dados da respota nos inputs do html
 inputRua.value = conteudoResposta.street;
 inputBairro.value = conteudoResposta.neighborhood;
 inputUF.value = conteudoResposta.state;
 inputComplemento.value = conteudoResposta.city;



    console.log(conteudoResposta);
    alert("CEP completo: " + inputCep.value);
};