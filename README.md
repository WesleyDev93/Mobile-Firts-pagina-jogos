# Mobile-Firts-pagina-jogos
Projeto será desenvolvido com metodologia mobile-firts dentro da Mentoria " conquiste sua vaga "
projeto desenvolvido para melhorar praticas de media queries , mobile first e desktop.



Projeto feito para uma pagina sobre o jogo HITMAN Absolution



-- No projeto foi usado HTML CSS E JS 
-- projeto focado nas medias queries e no mobile-first, sendo desenvolvido para iphones 13 e desktops com 1300 pixel's de tela

![image](https://user-images.githubusercontent.com/108889735/183121954-06ea4612-df9b-4bb7-a44d-acff1d3d4e34.png)




-- além das praticas acima mantemos os metodos dos projetos anteriores com o atomico e o BEM.
-- abaixo podemos ver um pedaço da resposividade para Desktop feitos a partir do CSS.


/* Body */

@media screen and (min-width:1300px){
    .estilo {
        width:auto;
    }
}

/* Desktop & desktop item*/

.desktop {
    display: none;
}


@media screen and (min-width:1300px){
    .desktop {
        align-items: center;
        color: white;
        display: flex;
        flex-direction: row;
        font-size: 2rem;  
        justify-content: center; 
       
    }
}


@media screen and (min-width:1300px){
    .desktop__item {
        margin: 5px 10px 0 10px;
        text-align: center;
       
    }
}





/* Cabecalho Imagens */

@media screen and (min-width:1300px){
    .cabecalho__img01 {
        width:20%;
    }
}


@media screen and (min-width:1300px){
    .cabecalho__img02 {
        bottom: 310px;
        left: 83%;
        margin: 0;
        position: relative;
        width:230px;

    }
}






também adicionando um player com uma trilha sonora usando conceitos basicos de JavaScript aprendidos em aulas e colocados em um player acima do site.
Projeto foi desenvolvido  e testado no navegador do firefox.
