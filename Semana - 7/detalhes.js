const params = new URLSearchParams(window.location.search);

console.log("id",params.get("id"));
console.log("altrua", params.get("altura"));

const id = params.get("id")
const pega_jason = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(`${chave}=`));
        
}

cria_detalhes(`https://botafogo-atletas.mange.li/${id}`).then(
    (obj) => {
        const nome = document.createElement("h1")
        nome.innerHTML = obj.nome
        
        document.body.appendChild(nome)

        const imagem = document.appendChild("img")
    }
)

