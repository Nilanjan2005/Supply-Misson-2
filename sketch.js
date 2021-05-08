var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1Sprite,box2Sprite,box3Sprite;
var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

  var package_options ={ 
	  isStatic : true,
	  restitution : 0.0
  }
	packageSprite=createSprite(width/2, 80, 10,10,package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite = createSprite(370,652,200,15);
	box1Sprite.shapeColor = "red";

	box2Sprite = createSprite(270,608,10,102);
	box2Sprite.shapeColor = "red";

	box3Sprite= createSprite(470,608,10,102);
	box3Sprite.shapeColor = "red"

	engine = Engine.create();

	world = engine.world;

//	box1 = new Box(370,652,200,20);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1 = Bodies.rectangle(370, 652, 200, 15 , {isStatic:true} );
 	World.add(world, box1);
	
	 box2= Bodies.rectangle(270, 608, 10, 102 , {isStatic:true} );
 	World.add(world, box2);
	
	 box3 = Bodies.rectangle(470, 608, 10, 102 , {isStatic:true} );
 	World.add(world, box3);

	Engine.run(engine);
  
//	box1 = new Box(400,500,200,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  packageSprite.collide(box1Sprite)
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
  
  }
}



