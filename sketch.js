var n1,n2;
var num1,num2;
var button1;
var button2;
var button3;
var button4;
var n1,n2;


function setup(){
  createCanvas(400,400);
  num1 = createInput();
  num1.position(1,40);

  num2 = createInput();
  num2.position(1,80);

  button1 = createButton("addition");
  button1.position(15,100);
  button1.mousePressed(add);

  button2 = createButton("subtraction");
  button2.position(28,120);
  button2.mousePressed(subtract);
  button3 = createButton("divison");
  button3. position(35,140);
  button1.mousePressed(divison);

  button4 = createButton("multiplication");
  button4.position(50,160);
  button4.mousePressed(multiplication);


 
  
}

function draw(){
  background("cyan");
  fill("black");
  text("enter first number: ",1,30);
  text("enter second number: ",1,72);
  n1 = parseInt(num1.value());
  n2 = parseInt(num2.value());
}

function add(){
  var sum;
  sum = n1+n2;
  console.log(n1+n2);
  alert(sum);
}

function subtract(){
  console.log(n1-n2);
}

function divison(){
  console.log(n1/n2);
}

function multiplication(){
  console.log(n1*n2);
}