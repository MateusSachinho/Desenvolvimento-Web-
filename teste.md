# 1) Cite duas vantagens da utilização de sistemas de versionamento de código.
- Controle de versões: Permite que os desenvolvedores acompanhem todas as mudanças feitas no código ao longo do tempo, facilitando a reversão para versões anteriores se necessário.
- Colaboração: Facilita o trabalho em equipe, permitindo que vários desenvolvedores trabalhem simultaneamente no mesmo projeto, com a possibilidade de mesclar as alterações de forma organizada.

# 2) Explique a diferença entre git e github?
- Git: É um sistema de controle de versão distribuído que permite o rastreamento de mudanças no código-fonte durante o desenvolvimento de software.
- GitHub: É uma plataforma baseada na web que hospeda repositórios Git, fornecendo uma interface gráfica para facilitar o uso do Git, além de recursos adicionais como controle de acesso, integração contínua, e ferramentas de colaboração.

# 3) Quais as três principais linguagens utilizadas na construção de documentos da Web e quais são suas principais aplicações/funcionalidades?
- HTML (HyperText Markup Language): Define a estrutura e o conteúdo das páginas web.
- CSS (Cascading Style Sheets): Controla a apresentação e o estilo visual das páginas web, como cores, fontes e layouts.
- JavaScript: Adiciona interatividade e comportamento dinâmico às páginas web, como validação de formulários e manipulação de eventos.

# 4) Qual é a diferença entre os conceitos de tag, elemento e atributo, no contexto do HTML?
- Tag: É a marcação usada para definir o início e o fim de um elemento HTML (ex: < p>, < /p>).
- Elemento: É a combinação da tag de abertura, o conteúdo e a tag de fechamento (ex: < p>Estou por aqui< /p>).
- Atributo: São informações adicionais fornecidas dentro da tag de abertura para modificar o comportamento ou as propriedades de um elemento (ex: .<img src=".imagem.jpg" alt=".Imagem">).

# 5) Desenvolva um documento HTML mínimo que contenha um parágrafo com a frase “Estou por aqui”, tenha o título “minha página” e use a codificação de caracteres utf-8.
.<html>
	.<head>
		.<title>Minha página</title>
		.<meta charset="utf-8">
	.</head>
	.<body>
		.<p>Estou por aqui</p>
	.</body>
.</html>

# 6) O que é uma “pilha de protocolos”, no contexto da internet?A "pilha de protocolos" refere-se ao conjunto de protocolos que trabalham em diferentes camadas da comunicação de rede. Cada camada tem um papel específico na transmissão de dados, como a camada de aplicação, transporte, rede e enlace. Um exemplo clássico é o modelo TCP/IP, que organiza a comunicação em camadas desde o envio até a recepção de dados.7) Quais são os principais protocolos da camada de transporte da internet e qual a principal diferença entre eles?
- TCP (Transmission Control Protocol): Protocolo orientado a conexão, garante a entrega confiável de pacotes de dados.
- UDP (User Datagram Protocol): Protocolo sem conexão, não garante a entrega confiável, mas é mais rápido, sendo usado em aplicações como streaming.

# 8) Quais as principais características da arquitetura cliente-servidor e como ela se diferencia de aplicações peer-to-peer?
- Cliente-servidor: O servidor fornece serviços ou recursos, e os clientes solicitam esses serviços. O servidor é centralizado, e os clientes não se comunicam diretamente entre si.
- Peer-to-peer (P2P): Todos os nós da rede podem atuar como clientes ou servidores, compartilhando recursos diretamente entre si, sem a necessidade de um servidor central.

# 9) O que é um processo, no contexto do desenvolvimento de aplicações de internet, e como eles são identificados para efeitos de comunicação?
Um processo é uma instância de um programa em execução. No contexto da internet, os processos são identificados por um endereço IP e um número de porta, que juntos formam o ponto de comunicação entre diferentes processos em uma rede.

# 10) Explique o que é SSL, no contexto da internet.
SSL (Secure Sockets Layer) é um protocolo de segurança que criptografa a comunicação entre o cliente e o servidor, garantindo que os dados transmitidos sejam protegidos contra interceptação e manipulação. Ele foi substituído pelo TLS (Transport Layer Security), que oferece maior segurança.

# 11) Em um documento HTML, quantos são os filhos do nó raiz? Há limite para o número de descendentes do nó raiz? 
Justifique sua resposta.O nó raiz de um documento HTML é o elemento <html>. Ele tem dois filhos diretos: <head> e <body>. Não há limite para o número de descendentes do nó raiz, pois o HTML é flexível e suporta a inclusão de diversos elementos dentro de <head> e <body>.

# 12) Elementos de marcação e semântica no HTML:

- Elementos de marcação/organização:
<div>: Container genérico para agrupar conteúdo.
<span>: Container genérico para texto inline.
<ul>: Lista não ordenada.
<ol>: Lista ordenada.
<table>: Tabela de dados.

- Elementos semânticos:
<header>: Cabeçalho da página ou de uma seção.
<footer>: Rodapé da página ou de uma seção.
<article>: Conteúdo independente que pode ser distribuído.
<section>: Seção genérica de conteúdo.
<nav>: Navegação principal do site.


# 13) Qual elemento é utilizado para que um documento HTML capture informações dos usuários?
O elemento <form> é utilizado para capturar informações dos usuários.

#14) Qual elemento é utilizado para permitir a navegação entre diferentes documentos HTML?
O elemento <a> (âncora) é utilizado para criar links que permitem a navegação entre diferentes documentos HTML.

# 15) Enumere ao menos cinco elementos utilizados em formulários HTML explicando sua utilidade.
- <input>: Campo de entrada de dados.
- <textarea>: Área de texto para entradas longas.
- <button>: Botão para enviar ou interagir com o formulário.
- <select>: Menu suspenso de opções.
- <label>: Rótulo para descrever os campos de entrada.

# 16) Explique o que são e para que são utilizados os seguintes atributos HTML:
- class: Define uma ou mais classes que podem ser usadas para aplicar estilos CSS ou identificar elementos.
- id: Identificador único de um elemento, usado para aplicar estilos ou manipular via JavaScript.
- name: Atributo usado em formulários para identificar campos ao enviar dados.
- hidden: Indica que o elemento não deve ser exibido na página.
- style: Aplica estilos CSS diretamente no elemento.
- title: Exibe um texto descritivo ao passar o mouse sobre o elemento.

# 17) O que seria “degradação graciosa”, também conhecida como “degradação elegante”?
É uma abordagem de design em que o site ou aplicação é desenvolvido para funcionar em navegadores modernos, mas ainda oferece uma experiência minimamente funcional em navegadores mais antigos.

# 18) Diferencie e caracterize os conceitos de regra, seletor e declaração no contexto do CSS.
Regra: Conjunto de declarações aplicadas a um seletor (ex: p { color: blue; }).
Seletor: Define os elementos aos quais a regra será aplicada (ex: p).
Declaração: Define uma propriedade CSS e seu valor (ex: color: blue;).

# 19) Diferencie os conceitos de “seletor de classe” e “seletor de id” no contexto do CSS, fornecendo exemplos de cada um deles.
Seletor de classe: Aplica estilos a todos os elementos que compartilham uma mesma classe. Exemplo: .minha-classe { color: red; }.
Seletor de id: Aplica estilos a um único elemento com um identificador específico. Exemplo: #meu-id { color: blue; }.

# 20) No contexto do CSS Box Model, explique os conceitos de margin, border e padding.
Margin: Espaço externo ao redor do elemento.
Border: Borda ao redor do conteúdo do elemento.
Padding: Espaço interno entre o conteúdo e a borda do elemento.

# 21) Explique e dê exemplos funcionais de utilização das propriedades de posicionamento: static, relative, absolute e fixed.
static: Posição padrão, o elemento segue o fluxo normal da página.
relative: O elemento é posicionado relativo à sua posição original.
absolute: O elemento é posicionado em relação ao seu primeiro ancestral posicionado.
fixed: O elemento é posicionado em relação à janela do navegador e permanece fixo durante o scroll.

# 22) Como são definidos os blocos de comando no JavaScript? 
São definidos com o uso de chaves.

# 23) Quais as diferenças entre as declarações de variáveis em JavaScript usando let, var e const?
var: Declaração global ou local (se dentro de uma função), com escopo de função e pode ser redeclarada.
let: Declaração com escopo de bloco, não pode ser redeclarada no mesmo escopo.
const: Declaração de valor constante, com escopo de bloco, não pode ser redeclarada nem ter seu valor alterado após a atribuição inicial.






















