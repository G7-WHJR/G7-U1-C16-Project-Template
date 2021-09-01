var turn=0
function setup() {
    //size of the canvas to draw on
    createCanvas(innerWidth,innerHeight); 
    // Set the background to white, and move the line to setup();
    background("white");

    fill("#404040");
    rect(0, 0, width, 50);

    textAlign(CENTER);
    fill("white");
    textSize(18);
    text("Color Tic Tac Toe", width / 2, 33);
    
}


function draw()
{
// Call Create Row Function with different y values for each row
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