const container = document.getElementById("container");

const pega_jason = async (caminho) => {
    const resposta = await fetch(caminho)
    const dados = await resposta.json()
    return dados
};

const manipulaClick = (e) => {
    const id = e.currrntTarget.dataset.id;

    document.cookie = `id=${id}`;
    document.cookie = `nome=${nome}`;

    window.location = `detalhes.html?id=${id}`;
}

const montaCard = (atleta) => {
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descri = document.createElement("p");
    const link = document.createElement("a");
    const span_id = document.createElement("span")

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);

    descri.innerHTML = atleta.detalhes;
    cartao.appendChild(descri);

    // link.innerHTML = "Saiba mais"
    // link.href = `detalhes.html?id=${atleta.id}&altura=${atleta.altura}`
    // cartao.appendChild(link)

    cartao.dataset.id = atleta.id;
    cartao.dataset.nome = atleta.nome
    cartao.dataset.imagem = atleta.imagem

    container.appendChild(cartao);
};
    
    
    
    
   




/*for (let i = 0; i < dados.length; i++){
    let atleta =dados[i];

    conteudo += montaCard(atleta);
}*/



pega_jason("https://botafogo-atletas.mange.li/2024-1/all").then(
    ( variavel ) => {
            variavel.forEach((atleta) => montaCard(atleta));
        console.log("Isso imprime antes");
    }
);

console.log("isso imprime antes");


const verificaSenha = () => {
    const entrada = document.getElementById('senha').value;
    const hash_senha = '202447d5d44ce12531f7207cb33b6bf7casa';
    if (hash_senha === hex_md5(entrada)){
        sessionStorage.setItem('logado','sim');
        alert("logado");

    } else {
        alert("senha incorreta")
    }
}

document.getElementById("logout").onclick = () => {sessionStorage.removeItem("logado");alert("saiu")}





