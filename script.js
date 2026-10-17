var jogador = createSprite(200, 365);
jogador.setAnimation("jogador");

var carro1 = createSprite(50, 280);
carro1.setAnimation("carro_vermelho");
carro1.velocityX = 3;

var carro2 = createSprite(350, 210);
carro2.setAnimation("carro_azul");
carro2.velocityX = -4;


function draw() {
  background("green");
  
  if (keyWentDown("up")) {
    jogador.y = jogador.y - 35;
  }
  if (keyWentDown("down")) {
    jogador.y = jogador.y + 35;
  }
  if (keyWentDown("left")) {
    jogador.x = jogador.x - 35;
  }
  if (keyWentDown("right")) {
    jogador.x = jogador.x + 35;
  }

  if (carro1.x > 430) {
    carro1.x = -30;
  }
  if (carro2.x < -30) {
    carro2.x = 430;
  }

  drawSprites();
}
