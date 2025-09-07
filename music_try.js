let stage = 0;
let stageStarttime = 0;
let snail1= [];
let snail2 =[];
let fallingcircles = [];

function setup() {
    createCanvas(600, 800);

 snail1.push(loadImage('snail_0.png'));
 snail2.push(loadImage('snail_1.png'));
 snail3.push(loadImage('snail_2.png'));
 snail4.push(loadImage('snail_3.png'));

 for (let i=0; i<20; i++){
    fallingCircles.push({
        x:random(width),
        y:random(-height, 0),
        baseSize:random(20, 50),
        speed:random(1,4),
        color: color(random(200,255), random(100, 255), 0)
    
    });
 }
let rainbowColors = [
    color(255, 0, 0),
    color(255, 127, 0),
    color(255, 255, 0),
    color(127,255, 0),
    color(0, 255, 0),
    color(0, 255, 127),
    color(0, 255, 255),
    color(0, 127, 255),
    color(0,0, 255),
    color(127, 0, 255),
    color(255, 0 ,255),
    color(255, 0, 127),

];
}












 )















}