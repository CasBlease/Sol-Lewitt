function setup(){
    createCanvas(windowWidth, windowHeight); //top left is origin

    m=2
    l=windowHeight/2
    g=10*100
    dt=0.02
    t=0
    theta = 1/2; // Pendulum initial angle theta
    omega = 0; // Initial angular velocity
    C = windowWidth/2; // Center point
}

function draw(){
    background(220);
    // physics
    t = t + dt;
    F=-m*g*sin(theta)
    epsilon = (F/m)/l; //angular acceleration
    omega = omega + epsilon * dt;
    theta = theta + omega * dt;
    xp = C - l * sin(theta); // X coordinate of pendulum ball
    yp = l * cos(theta); // Y coordinate of pendulum ball
    //draw it
    line(C, 0, xp, yp);
    ellipse(xp, yp, 50, 50);
}