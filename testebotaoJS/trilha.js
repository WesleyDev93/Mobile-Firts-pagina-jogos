

                   
const botaoPlay = document.querySelector ('.botaoplay');

console.log (botaoPlay);

botaoPlay.addEventListener ('click', function(){
            const tocar = document.querySelector ('audio');
                       tocar.play()
})


const botaoPause = document.querySelector ('.botaopause');

botaoPause.addEventListener ('click', function () {
    const parar  = document.querySelector ('audio');
                  parar.pause();
})