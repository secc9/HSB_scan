//This is the old colour-bath sketch I made for WonkyStuff gigs

let lin = 0;

function setup() {
//work out how to position the sketch into the htm
    // let canvas =  createCanvas(windowWidth, windowHeight); 
   //     canvas.parent('sketch-holder');

    createCanvas(windowWidth, windowHeight);
}

function draw() {
    colorMode(HSB);
    background(lin, 360, 360);

    if(lin > 360){
	lin = 0;
    }
       lin += 0.05;
    
    console.log(lin);
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
