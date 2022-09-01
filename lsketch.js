function setup(){
    createCanvas(windowWidth, windowHeight); //top left is origin
    stroke(255, 0, 0);
    frameRate(30);
}

function draw(){
    background(255);

    y=y-1;
    if (y<0){
        y=windowHeight;
    }
    line(0, y, windowWidth, y)

}