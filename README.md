##### <img height="15px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-united-states_1f1fa-1f1f8.png">[ Read this document in english](README.en.md)

<div display="block" align="center">
  <img height="200px" alt="dino-jump" src="https://cdn.discordapp.com/attachments/673658623892914207/1002439138953412649/ezgif-4-a81e658d3e.gif">
  <h1><b>Dino Jump Game</b></h1>
  <code><em><b>Versão do projeto: 0.1</b></em></code>
</div>

#

## **Introdução**
Olá! Como um iniciante que recém terminou de aprender os fundamentos do HTML, CSS e JS, eu ainda não me sinto confiante o bastante para começar a criar minha própria página de portfólio, portanto decidi começar com algo mais simples antes para adquirir alguma experiência. E essa foi a ideia que eu tive, criar um jogo baseado no joguinho do dinossauro do Google Chrome. 😂

Este é o meu primeiro "grande" projeto, onde tento desenvolver tudo do zero com apenas meu conhecimento de HTML, CSS e JS, utilizando o mínimo possível de tutoriais, quando necessário. O objetivo principal deste projeto é praticar e aprender mais sobre CSS e DOM, mais especificamente algumas propriedades avançadas do CSS, como 
<a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/@keyframes">`@keyframes`</a>, 
e como a manipulação de elementos utilizando o JavaScript funciona na prática.<br>

Todas as imagens que estou utilizando neste projeto são gratuitas e podem ser baixadas 
<a href="https://www.gameart2d.com/freebies.html"><b>aqui</b></a>.

Se você quiser você pode conferir o jogo <a href="https://araujodanield.github.io/Dino-Jump-Game/" target="_blank"><b>clicando aqui</b></a> (esteja ciente de que ainda está muito bugado).

#

### Abaixo eu apresento os bugs e erros da versão atual, bem como os próximos passos a serem tomados assim que estes problemas forem resolvidos.

<br>

## **Problemas a serem resolvidos:**
> - ### As animações do personagem não param/congelam após o *"Game-Over"*. Se você pressionar a tecla de *pulo* ele começa a correr novamente. O certo seria você não ser capaz de realizar nenhuma ação até reiniciar o jogo;

> - ### Provavelmente por eu estar utilizando GIFs para as animações do personagem, quando você segura a tecla de *pulo* isto faz com que ele realize dois pulos corretos, mas então a condição de troca entre o GIF de *correr* e o de *pular* quebra, fazendo o personagem ficar preso ao chão e repetindo o primeiro frame do GIF, até que você solte a tecla;

> - ### Qualquer impacto com a rocha que não ocorra exatamente pelo chão não acionará a animação de *'morte'*. Ao invés disso ele ficará parado no local de impacto com animação de *correr*;

> - ### Pressionar a tecla de *pulo* após a animação de *'morte'* fará o personagem voltar para a animação de *correr*;

> - ### Em todas as minhas tentativas de criar uma tela de *"Restart"* usando CSS, eu não consegui fazer com que ela aparecesse por cima da animação de fundo, mesmo declarando um <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/z-index">`z-index`</a> diferente para cada elemento, então criei um botão simples e provisório para fazer isso recarregando a página.

<br>

## **Próximos passos do projeto:**
> - ### Definir uma tecla específica do teclado para realizar o *pulo*;

> - ### Adicionar uma tela de *"Start Game"* para que o jogo não inicie automaticamente assim que você abrir a página;

> - ### Adicionar uma tela de *"Restart"* para o *"Game-Over"* e definir a tecla **R** para fazer isso no meio da gameplay, caso o jogador queira;

> - ### Criar um sistema de *Pontuação*;

> - ### Adicionar uma condição para ir gradualmente aumentando a *velocidade do jogo* com base na quantidade de *pontos do jogador*;

> - ### Fazer uma *tela de jogo* com largura adaptável, pois a tela atual foi feita para uma janela minimizada;

> - ### Adicionar sons ao *pulo*, *pontos*, *botões da interface* e adicionar uma música de fundo.
>   ##### <b>*Este item é um <em>"Talvez"</em>, porque eu não faço ideia de como fazer isso com o JS e parece algo mais complexo, então deixarei para ver isso mais pro final do projeto.</b>

<br>

### É isso! Se você tem interesse em criar um projeto semelhante e deseja utilizar este repositório como base, fique à vontade! 
### E se você tem quaisquer dicas que possam me ajudar, me mande uma mensagem, será extremamente útil e bem-vinda! 😀

#

## **Referências e Tutoriais:**
> <h3><a href="https://www.youtube.com/watch?v=r9buAwVBDhA">[Youtube] Como criar um jogo SIMPLES usando JavaScript e HTML | JavaScript para iniciantes - Tutorial</a> feito por <a href="https://github.com/manualdodev">@manualdodev</a>.

<br>

> <h3><a href="https://css-tricks.com/how-to-play-and-pause-css-animations-with-css-custom-properties/">[Artigo] How to Play and Pause CSS Animations with CSS Custom Properties</a> feito por <a href="https://twitter.com/madsstoumann">@madsstoumann</a>.</h3><small>*Site em inglês.</small>

<br>

> <h3><a href="https://blog.logrocket.com/creating-infinite-css-background-image-loop/">[Artigo] Creating an infinite CSS background image loop</a> feito por <a href="https://twitter.com/MrConerMurphy">@MrConerMurphy</a>.</h3><small>*Site em inglês.</small>

#

<h3 align="center"><em>Ao final deste projeto eu pretendo transformar este arquivo README em um tutorial de passo-a-passo completamente escrito e detalhado, para ajudar outros iniciantes que tenham interesse em criar um projeto semelhante.</em></h3>

#

##### <img height="15px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-united-states_1f1fa-1f1f8.png">[ Read this document in english](README.en.md)
