var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fbeca1ac-6049-4888-8d5c-113c5101ffec","a1033f5b-ea7d-46be-8be2-63c35a71b6cc","05c7bef7-a27d-4c17-9609-596abc4156c1","ad0ebb42-7cbd-482f-a35b-753b5ee6510f","7b391d13-ee43-4740-a5b7-b65ff98d48f8","81862821-b30b-4ef2-a6e9-2ceb79e7c4cd","42ac5d5d-cb89-48d5-8c33-32fa559007fe","ec894aa9-9cb8-4ab7-b22d-3188f3846baa","8b248084-2fcd-4a68-9ac8-7461bdaf2c9f","015e009d-603d-4ec7-8720-e0f168f95199","c1aba9fa-8d32-4617-ac37-667ac650852a"],"propsByKey":{"fbeca1ac-6049-4888-8d5c-113c5101ffec":{"name":"gracehappy","sourceUrl":null,"frameSize":{"x":45,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"qLXQ9LBcdeG3rfRi3fVO5Kn_poDKsS7q","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":65},"rootRelativePath":"assets/fbeca1ac-6049-4888-8d5c-113c5101ffec.png"},"a1033f5b-ea7d-46be-8be2-63c35a71b6cc":{"name":"gracesad","sourceUrl":null,"frameSize":{"x":45,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"B6u6ndt52z_jD84qv092p8.YERffPu8S","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":65},"rootRelativePath":"assets/a1033f5b-ea7d-46be-8be2-63c35a71b6cc.png"},"05c7bef7-a27d-4c17-9609-596abc4156c1":{"name":"grace","sourceUrl":null,"frameSize":{"x":45,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"RngdAhrze78Sxv4Y6kbuwMEnzAsPLbAt","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":65},"rootRelativePath":"assets/05c7bef7-a27d-4c17-9609-596abc4156c1.png"},"ad0ebb42-7cbd-482f-a35b-753b5ee6510f":{"name":"car1","sourceUrl":null,"frameSize":{"x":50,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"zSgRW85G2MfnUSbi8rBZHuH13NJl_nN7","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":93},"rootRelativePath":"assets/ad0ebb42-7cbd-482f-a35b-753b5ee6510f.png"},"7b391d13-ee43-4740-a5b7-b65ff98d48f8":{"name":"car2","sourceUrl":null,"frameSize":{"x":50,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"vJm8iUCif7DKcKM1_CZ0frTDZtxmN3hK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":93},"rootRelativePath":"assets/7b391d13-ee43-4740-a5b7-b65ff98d48f8.png"},"81862821-b30b-4ef2-a6e9-2ceb79e7c4cd":{"name":"car3","sourceUrl":null,"frameSize":{"x":50,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"xBWIcqQXTMQQF5LAdEIr7Sdn.AQuFjdY","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":93},"rootRelativePath":"assets/81862821-b30b-4ef2-a6e9-2ceb79e7c4cd.png"},"42ac5d5d-cb89-48d5-8c33-32fa559007fe":{"name":"dog1","sourceUrl":null,"frameSize":{"x":40,"y":58},"frameCount":1,"looping":true,"frameDelay":12,"version":"wpQfSVNqBm1d6vNUcIloZTU_aq2r6vhY","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":58},"rootRelativePath":"assets/42ac5d5d-cb89-48d5-8c33-32fa559007fe.png"},"ec894aa9-9cb8-4ab7-b22d-3188f3846baa":{"name":"dog2","sourceUrl":null,"frameSize":{"x":40,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"6m_BOX81oBAbs.nQr7fnbeARBkZGnIvj","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":48},"rootRelativePath":"assets/ec894aa9-9cb8-4ab7-b22d-3188f3846baa.png"},"8b248084-2fcd-4a68-9ac8-7461bdaf2c9f":{"name":"dog3","sourceUrl":null,"frameSize":{"x":45,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":".H72UcfIvI8K8VwKpC10yHclHLFTXHJS","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":42},"rootRelativePath":"assets/8b248084-2fcd-4a68-9ac8-7461bdaf2c9f.png"},"015e009d-603d-4ec7-8720-e0f168f95199":{"name":"dog4","sourceUrl":null,"frameSize":{"x":40,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"8V.glSgLL2kKFjGahPYNfvKExc.Wz6ye","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":52},"rootRelativePath":"assets/015e009d-603d-4ec7-8720-e0f168f95199.png"},"c1aba9fa-8d32-4617-ac37-667ac650852a":{"name":"basketball_1","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"_9mYHZ8aUkYbJ6hPs9CyB5uol92m2Nw1","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/c1aba9fa-8d32-4617-ac37-667ac650852a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var health = 3
var gamestate="serve"

var dog1 = createSprite(355, 30, 20, 20);
dog1.setAnimation("dog1");

var dog2 = createSprite(355, 100, 20, 20);
dog2.setAnimation("dog2");

var dog3 = createSprite(300, 130, 20, 20);
dog3.setAnimation("dog3");

var dog4 = createSprite(290, 39, 20, 20);
dog4.setAnimation("dog4");

var ball = createSprite(365, 365, 20, 20);
ball.setAnimation("basketball_1");

var road = createSprite(200, 200, 80, 400);
var line1 = createSprite(200, 50, 5, 100);
line1.shapeColor=("white")
var line2 = createSprite(200, 170, 5, 100);
line2.shapeColor=("white")
var line3 = createSprite(200, 290, 5, 100);
line3.shapeColor=("white")
var line4 = createSprite(200, 410, 5, 100);
line4.shapeColor=("white")
var car1 = createSprite(200, -50, 20, 20);
car1.setAnimation("car1");
var car2 = createSprite(200, -50, 20, 20);
car2.setAnimation("car2");
var car3 = createSprite(200, -50, 20, 20);
car3.setAnimation("car3");


var grace = createSprite(10, 230, 1, 1);
grace.setAnimation("grace");




function draw() {
  background("green")
  //add controls
  if(keyDown(UP_ARROW)){
  grace.y=grace.y-3
}

if(keyDown(DOWN_ARROW)){
  grace.y=grace.y+3
grace.setAnimation("gracehappy");
    
}

if(keyDown(LEFT_ARROW)){
  grace.x=grace.x-3
  grace.setAnimation("gracehappy")
}

if(keyDown(RIGHT_ARROW)){
  grace.x=grace.x+3
  grace.setAnimation("gracehappy")
}
createEdgeSprites()

//add cars velocity
if (grace.x<200) {
    car1.velocityY=3
  }
 if (car1.isTouching(bottomEdge)) {
    car2.velocityY=7
  }   
 if (car2.isTouching(bottomEdge)) {
    car3.velocityY=4
  }   
//add dogs velocity
  if (grace.isTouching(road)) {
    dog1.velocityY=4
  }
   if (dog1.isTouching(bottomEdge)) {
    dog2.velocityY=6
  }   
 if (dog2.isTouching(bottomEdge)) {
    dog3.velocityY=4
  }   
  if (dog3.isTouching(bottomEdge)) {
    dog4.velocityY=5
  }  
 if (grace.isTouching(car1) || grace.isTouching(car2)||grace.isTouching(car3)) {
health=health-1  
 grace.x=10
  } 
   if (grace.isTouching(dog1) || grace.isTouching(dog2) || grace.isTouching(dog3)||grace.isTouching(dog4)) {
health=health-1  
 grace.x=10
  } 
  
  if (grace.isTouching(ball)) {
    stroke("black");
   textSize(27);
    text("Great job! ", 250, 200);
    gamestate="end"
  }
 if (health==0) {
  textSize(24);
fill("white");
 text("Game Over", 20, 100);
  gamestate="end"
  }
if (gamestate=="end") {
    car1.velocityY=0
    car2.velocityY=0
    car3.velocityY=0
    dog1.velocityY=0
    dog2.velocityY=0
    dog3.velocityY=0
    dog4.velocityY=0
   grace.pause();
   
  }
    
  
if (gamestate=="serve") {
  grace.x=30
  grace.y=200
fill("white");
  textSize(19);
  text("Grace needs help getting her basketball. ",50 , 200);
car1.velocityY=0
       textSize(30)
text("press space to start",70 , 250);
road.visible=false
line1.visible=false
line2.visible=false
line3.visible=false
line4.visible=false
}
      if (keyDown("space")) {
        road.visible=true
line1.visible=true
line2.visible=true
line3.visible=true
line4.visible=true
      gamestate="play"
    
      
    }
    

            
      
      
  textSize(18);
fill("pink");
text("Health:"+health, 25, 25);
    
  
  
 drawSprites(); 
}

textSize(12);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
