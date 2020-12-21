//5 Data types

//String
var str = "Hello";
console.log(str);

//Number
var num = 45;
console.log(num);

//Boolean -> true, false
var bool = true;
console.log(bool);

//Null -> nothing
var n = null;
console.log(n);

//Undefined -> no value for that var
var ob;
console.log(ob);

//Array -> many values at one time
var ar1 = [14,75,89,56,23]; //ar1.length -> how many values are ther in array
console.log(ar1);
console.log(ar1[0]);

var ar2 = ["hi",567,bool];
console.log(ar2);

var ar3 = [["bird",23],[980,n],ar2];
console.log(ar3[0][0]);

//push and pop inside and outside array
//push -> value inside array
ar3.push("Name"); //[["bird",23],[980,n],ar2,"name"];

//pop -> value outside array
ar3.pop();//[["bird",23],[980,n],ar2]
ar3.pop();//[["bird",23],[980,n]]

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onsling";


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}