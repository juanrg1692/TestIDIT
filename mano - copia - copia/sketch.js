
let img;
let txt0;

var hx;
var hy;
var hxx;
var hyy;
var hxx0;
var hyy0;


let video;
let hp;
let poses = [];
var rr = 0;
var rr0 = 0;
var state = false;

var rand = 50;

var button;
var started;

var button0;
var started0;

var button1;
var started1;

var button2;
var started2;

var button3;
var started3;

var button4;
var started4;

var button5;
var started5;

var button6;
var started6

var button7;
var started7;

var button8;
var started8

var button9;
var started9;


var button10;
var started10;

var button11;
var started11;




let pg;


var trans0 = 0;
var trans1 = 0;

var trans00 = 0;
var trans11 = 0;

var xcen = 1200/2;
var ycen = 600/2;

let radius;
let wrench;
var fade;
var fadeAmount = 0.5;

var slider0;
var scaleFactor = 500;


function preload() {
  wrench = loadModel('wrench.obj', true);
  puma = loadModel('puma_low.obj',true);
  archivo = loadFont('ArchivoNarrow-Regular.ttf');
  img = loadImage("imgg.png");
  txt0 = loadImage("lolo.jpg");

}


function setup() {

  createCanvas(1200, 600,WEBGL);
  background(200);
  video = createCapture(VIDEO);
  video.size(640, 480);


  pg = createGraphics(width,height);

  slider=createSlider(500,900,700);
  slider.position(90,90);
  button = createButton("rotar");
  button.position(20,55);
  button.mousePressed(boton1);
  button0 = createButton("tamaño");
  button0.position(20,85);
  button0.mousePressed(boton2);
  button1 = createButton("wireframe");
  button1.position(20,height-30);
  button1.mousePressed(boton3);
  button2 = createButton("marcadores");
  button2.position(20,height-60);
  button2.mousePressed(boton4);
  button3 = createButton("shaded");
  button3.position(100,height-30);
  button3.mousePressed(boton5);
  button4 = createButton("normal");
  button4.position(165,height-30);
  button4.mousePressed(boton6);
  button5 = createButton("switch b/w background");
  button5.position(20,height);
  button5.mousePressed(boton7);
  button6 = createButton("tamaño con mano");
  button6.position(width/2+200,height);
  button6.mousePressed(boton8);
  button7 = createButton("rotacion con mano");
  button7.position(width/2+200,height-30);
  button7.mousePressed(boton9);
  button8 = createButton("calzado");
  button8.position(width/2-70,60);
  button8.mousePressed(boton10);
  button9 = createButton("pieza");
  button9.position(width/2,60);
  button9.mousePressed(boton11);

  button10 = createButton("movimiento con mano");
  button10.position(width/2+350,height);
  button10.mousePressed(boton12);


  button11 = createButton("rm (beta)");
  button11.position(175,height);
  button11.mousePressed(boton13);

  hp = ml5.handPose(video, modelReady);

  hp.on('pose', function(results) {
    poses = results;
    // console.log(poses)
  });
  
  // Hide the video element, and just show the canvas
  video.hide();



    // 3D OBJECT (BUTTONS) POSITION ON SCREEN 
 addScreenPositionFunction();

}


function modelReady() {
  select('#status').html('Model Loaded');
  hp.singlePose();
}

function boton1(){
started = !started;
}
function boton2(){
started0 = !started0;
}
function boton3(){
started1 = !started1;
}
function boton4(){
started2 = !started2;
}
function boton5(){
started3 = !started3;
}
function boton6(){
started4 = !started4;
}
function boton7(){
started5 = !started5;
}
function boton8(){
started6 = !started6;
}
function boton9(){
started7 = !started7;
}

function boton10(){
started8 = !started8;
}
function boton11(){
started9 = !started9;
}
function boton12(){
started10 = !started10;
}
function boton13(){
started11 = !started11;
}







function draw() {
if(started5){
background(200);
}else{
background(50);
}

scale(1);
////////////////////////////////////////////////////////////////////

//AMBIENTE RM

if(started11){
push();
rotateY(radians(frameCount*0.1));
strokeWeight(1);
stroke(0);
fill(255);
noStroke();
texture(txt0);
sphere(1000);
pop();
}else{
}

////////////////////////////////////////////////////////////////////

//toggle BTOTONES

push();
translate(0,0,0);
image(video,width/2-640/2-10,-height/2+10,640/2,480/2);
fill(255);
rect(width/2-640/2-10,-height/6+60,640/2,480/2);


if(started10){
  noStroke();
  fill(0,255,0);
  ellipse(500,height/2-30,10,10);
}else{
  noStroke();
  fill(255,0,0);
  ellipse(500,height/2-30,10,10);
}

if(started6){
  noStroke();
  fill(0,255,0);
  ellipse(330,height/2-30,10,10);
}else{
  noStroke();
  fill(255,0,0);
  ellipse(330,height/2-30,10,10);
}

if(started7){
  noStroke();
  fill(0,255,0);
  ellipse(330,height/2-60,10,10);
}else{
  noStroke();
  fill(255,0,0);
  ellipse(330,height/2-60,10,10);
}




  if(started2){
  noStroke();
 fill(0,255,0);
  ellipse(-width/2+110,-height/2+height-90,10,10);
}else{
  noStroke();
  fill(255,0,0);
  ellipse(-width/2+110,-height/2+height-90,10,10);
  }

  if(started) {
  noStroke();
  fill(0,255,0);
  ellipse(-width/2+70,-height/2+25,10,10);
}else{
  noStroke();
  fill(255,0,0);
  ellipse(-width/2+70,-height/2+25,10,10);
}

  if(started0) {
  noStroke();
  fill(255,0,0);
  ellipse(-width/2+225,-height/2+55,10,10);
}else{
  noStroke();
  fill(0,255,0);
  ellipse(-width/2+225,-height/2+55,10,10);
}









///////////////////////////////////////////////////////////////////////////////

  //  ROTATION CONTROLS  
  //rotateX(-(mouseY - ycen) / 1400);
  //rotateY((mouseX - xcen) / 1000);
  //rotateZ((mouseX - xcen) / 4000);
    //  ROTATION CONTROLS  

 



///////////////////////////////////////////////////////////////////////////////

  if(started10){
    trans0 = -width/2+hxx-200;
    trans1 = -height/2+hyy+200;
  }else{
    trans0 = trans0;
    trans1 = trans1;
  }


if(started8){
}else{
  modelConstruct(trans0,trans1,puma);
}
if(started9){
modelConstruct(trans00,trans11,wrench);
}

///////////////////////////////////////////////////////////////////////////////

scale(0.5);
drawKeypoints();


push();
scale(1);
translate(width-150,height-150,0);
scale(0.1);
image(img,0,0);
pop();




}

///////////////////////////////////////////////////////////////////////////////

function modelConstruct( xx,  yy,object) {


///////////////////////////////////////////////////////////////////////////////

//ROTACION Y ESCALA
push();
translate(0,0);






  if(started) {
  if(mouseIsPressed){
  rr = map(mouseX,0,width,-180,180);
  rr0 = map(mouseY,0,height,-180,180);
  rotateX(radians(rr0));
  rotateY(radians(-rr));
  }else{
  rotateX(radians(rr0));
  rotateY(radians(-rr));  
  }
  }



  if(started7) {
    /*
    strokeWeight(20);
    stroke(255,0,0);
    point(hxx0,hyy0);
    */

    rr = map(hxx-width/4,0,width,-180,180);
    rr0 = map(hyy,0,width,-180,180);

    rotateX(radians(rr0));
    rotateY(radians(-90));
    rotateY(radians(-rr));

  }else{
  rotateX(radians(rr0));
  rotateY(radians(-rr));
  
  }



  if(started7) {
    /*
    strokeWeight(20);
    stroke(255,0,0);
    point(hxx0,hyy0);
    */

    rr = map(hxx,0,width,-180,180);
    rr0 = map(hyy,0,width,-180,180);

    rotateX(radians(rr0));
    rotateY(radians(-rr));

  }else{
  rotateX(radians(rr0));
  rotateY(radians(-rr));
  
  }



///////////////////////////////////////////////////////////////////////////////
//GRID
var numb = 50;
var szPlane = 350;
translate(0,0,-100);
for(var i = -szPlane; i<szPlane; i+=numb){
  for(var j = -szPlane; j<szPlane; j+=numb){
    strokeWeight(1);
    stroke(0);
    //fill(255,20);  //revisar esta repetición de grids
    noFill();
    rectMode(50);
    rect(i,j,numb,numb);
  }
}
///////////////////////////////////////////////////////////////////////////////
//ESCALA

if(started6){ 
  strokeWeight(20);
  stroke(0);
  scale(0.5);
  //point(hx,hy);
  //point(hxx,hyy);
  strokeWeight(1);
  //line(hx,hy,hxx,hyy);
  var d = dist(hx,hy,hxx,hyy);
  console.log(d);
  //scaleFactor = width/d/6;
  scaleFactor = width/map(d,0,200,400,1000);
  scale(scaleFactor);
  
}else{ 
scaleFactor = scaleFactor;
}

if(started0) {
  scaleFactor = scaleFactor;
  
}else{
  scaleFactor = width/slider.value();
 
}
  ellipseMode(CENTER);
  radius = 60*scaleFactor/2;
///////////////////////////////////////////////////////////////////////////////
//WIREFRAME Y ESAS COSAS

    if(started1){
    strokeWeight(1);
    stroke(0);
  }
   else{  
    noStroke();
  }


if(started3){
  fill(255);
}else{
}


  if(started4){
    normalMaterial();
  }else{
    normalMaterial();
  }


///////////////////////////////////////////////////////////////////////////////

//MODELO
  lights();
  
  translate(xx,yy,75);
  scale(scaleFactor);
  model(object);


///////////////////////////////////////////////////////////////////////////////

//BOTONES
  var b01 = screenPosition(-50*scaleFactor/2, -50*scaleFactor/2, 10);
  var d01 = dist(mouseX - xcen - b01.x , mouseY - ycen - b01.y, b01.x, b01.y);
  if(started2){
 // BUTTONS
  if (d01 < radius) {
    strokeWeight(1);
    stroke(0,200);
    fill(255,0,0);

    if(mouseIsPressed){
       window.open("https://www.youtube.com/watch?v=jLGOn10W9S0");

    }
 

  } else {
    strokeWeight(1);
    stroke(0,200);
    fill(255,0,0,100);
  }

  ellipse(b01.x, b01.y, radius/2, radius/2);
  // BUTTONS END
}else{

}




  var b02 = screenPosition(50*scaleFactor/2, 50*scaleFactor/2, 10);
  var d02 = dist(mouseX - xcen - b02.x , mouseY - ycen - b02.y, b02.x, b02.y);
  if(started2){
 // BUTTONS
  if (d02 < radius) {
    strokeWeight(1);
    stroke(0,200);
    fill(255,0,0);

    if(mouseIsPressed){
        window.open("https://www.google.com/search?q=broca&tbm=isch&source=iu&ictx=1&fir=SjZptmBk3ImebM%253A%252C2xVojrkkeyhwlM%252C_&vet=1&usg=AI4_-kShFZD91_8GnVHTlkzCVPRmCuFJPA&sa=X&ved=2ahUKEwjzyOWG-_TpAhVQ7qwKHaoeAgcQ_h0wHnoECAcQDQ&biw=1536&bih=754#imgrc=SjZptmBk3ImebM:");
    }else{

    }


  } else {
    strokeWeight(1);
    stroke(0,200);
    fill(255,0,0,100);
  }

  ellipse(b02.x, b02.y, radius/2, radius/2);
  // BUTTONS END
}else{

}
  
  
pop();

if(started2){
if(d01<radius){
  fill(255);
  rect(-width/2+15,-height/2+80,250,400);
  }
}


if(started2){
if(d02<radius){
  fill(255);
  rect(-width/2+15,-height/2+80,250,400);
  }
}
pop();
}


///////////////////////////////////////////////////////////////////////////////

//RECONOCIMIENTO DE LA MANO

function drawKeypoints()  {

  for (let i = 0; i < poses.length; i++) {

    let pose = poses[i];
    let keypoint0 = pose.landmarks[4];
    let keypoint1 = pose.landmarks[8];
    let keypoint2 = pose.landmarks[8];
     hx = keypoint0[0]+width/2;
     hy = keypoint0[1]-height/6+60;
     hxx = keypoint1[0]+width/2;
     hyy = keypoint1[1]-height/6+60
     hxx0 = keypoint2[0]-width/4;
     hyy0 = keypoint2[1]-height/6-100;

    for (let j = 0; j < pose.landmarks.length; j++) {
      let keypoint = pose.landmarks[j];

        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint[0]+width/2,keypoint[1]-height/6+60, 10, 10);

      
    }
  }
}



///////////////////////////////////////////////////////////////////////////////