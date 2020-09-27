
const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumpimg = false;

function handleKeyUp(event) {
    if (event.keyCode === 32){
        if (!isJumpimg){
          jump();
        }
    }
}

function jump() {
    let position = 0;

    isJumpimg = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

        let downInterval = setInterval(() => {
            if (position <= 0) {
                clearInterval(downInterval);
                isJumpimg = false;
            } else {
              position -= 20;
              dino.style.bottom = position + 'px';
            }
        }, 20);
        } else {

          position += 20;
          dino.style.bottom = position + 'px';
        }

    }, 20);
}

function createCactus () {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;

  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px';
  background.appendChild(cactus);

}

createCactus();
document.addEventListener('keyup', handleKeyUp);





//function moveinimigo1() {

  //  posicaoX = parseInt($("#inimigo1").css("left"));
    //$("#inimigo1").css("left",posicaoX-velocidade);
    //$("#inimigo1").css("top",posicaoY);
        
      //  if (posicaoX<=0) {
        //posicaoY = parseInt(Math.random() * 334);
        //$("#inimigo1").css("left",694);
        //$("#inimigo1").css("top",posicaoY);
            
       // }
//} //Fim da função moveinimigo1()  
