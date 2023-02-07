//This is the old colour-bath sketch I made for WonkyStuff gigs

let lin = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
        canvas.parent('sketch-holder');
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
