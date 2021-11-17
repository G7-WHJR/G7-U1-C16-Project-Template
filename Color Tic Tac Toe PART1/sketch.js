var turn=0

function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("white");
    fill("black");
    rect(0, 0, width, 50);
    textAlign(CENTER);
    fill("white");
    textSize(18);
    text("Color Tic Tac Toe", width / 2, 33);
}


function draw()
{
// Call CreateRow Function with different y values for each row
//Row 1: y = 150 
//Row 2: y = 250
//Row 3: y = 350
}

function createRow(y)
{
//fill in the values as given in Project Document
  for (x = ; x < ; x=)
   {
       var b1= new Box(x, y, , ); 
       b1.appear();   
   }  
}