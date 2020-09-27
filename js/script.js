
const dino = document.querySelector('.dino');
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
    
}
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
