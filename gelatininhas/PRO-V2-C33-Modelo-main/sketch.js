const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;
var gelatininha, gelatininha2, gelatininha3, gelatininha4, gelatininha5, gelatininha6
var gelequinha, gelequinha2, gelequinha3, gelequinha4, gelequinha5, gelequinha6
var bg_img
var con;
var con2;
var rope;

function preload()
{
  gelatininha3 = loadImage("Jelly3.png")
  gelatininha4 = loadImage("Jelly4.png")
  gelatininha5 = loadImage("Jelly5.png")
  gelatininha6 = loadImage("Jelly6.png")
  
  
  bg_img = loadImage('fundo.png');
  
}

function setup() {
  createCanvas(800,600);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

   
  bg_img = loadImage('fundo.png');
  

  gelatininha=createSprite(90,95,40,40)
  gelatininha.addImage("Jelly", gelatininha6)
  gelatininha.scale=0.25
  gelatininha=createSprite(230,400,40,40)
  gelatininha.addImage("Jelly", gelatininha6)
  gelatininha.scale=0.25

  gelatininha2=createSprite(510,95,40,40)
  gelatininha2.addImage("Jelly2", gelatininha3)
  gelatininha2.scale=0.25
  gelatininha2=createSprite(400,400,40,40)
  gelatininha2.addImage("Jelly2", gelatininha3)
  gelatininha2.scale=0.25

  gelatininha3=createSprite(310,95,40,40)
  gelatininha3.addImage("Jelly3", gelatininha4)
  gelatininha3.scale=0.25
  gelatininha3=createSprite(130,400,40,40)
  gelatininha3.addImage("Jelly3", gelatininha4)
  gelatininha3.scale=0.25

  gelatininha4=createSprite(710,95,40,40)
  gelatininha4.addImage("Jelly4", gelatininha5)
  gelatininha4.scale=0.25
  gelatininha4=createSprite(600,400,40,40)
  gelatininha4.addImage("Jelly4", gelatininha5)
  gelatininha4.scale=0.25

  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(bg_img,0,0,800,600);
  Engine.update(engine);

  rope = new Rope(30, {x:30, y:30});


  drawSprites();
}

function drop()
{
  rope2.break();
  con2.dettach();
  con2 = null; 
}

function remove_rope()
{
  rope.break();
  con.dettach();
  con = null; 
}