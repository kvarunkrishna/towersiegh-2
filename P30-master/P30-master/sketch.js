function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
function preload() {
    polygonIMG = loadImage("polygon.png");
}

imageMode(CENTER)
image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);




function draw() {
    background(255, 255, 255);  

    standSprite = createSprite(645, 400);

    //polygon holder with slings
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingShot = new Slingshot(this.polygon, { x: 100, y: 200 });

    //bottom
    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);
    //level two
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);
    //level three
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);
    //top
    block16 = new Block(390, 155, 30, 40);

  drawSprites();
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(this.polygon);
    }
}

fly() {
    this.bodyA = null;
}
    

