/*let size = 300;
let ookisa = 300;
let Yellow = color(255, 255, 0);
let red = color (255, 0, 0);*/
let firstRun = true
let snail = [];


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame( vocal, drum, bass, other,) {
if (firstRun){
 /*colorMode(RGB, 255);*/

rectMode(CENTER);

snail.push(loadImage('snail_0.png'));
snail.push(loadImage('snail_1.png'));
snail.push(loadImage('snail_2.png'));



firstRun = false
}

background(0);

var VocalFrame = int(map(vocal, 0, 100, 0, 3));
VocalFrame = constrain(VocalFrame, 0, 2); // 0,1,2 のみ

console.log("Frame:", VocalFrame);


push();
scale(0.5);
image(snail[VocalFrame], 50, 50)
pop();


/*colorMode(HSB, 100);
fill(255, 255, 0);
strokeWeight(9)
stroke(drum, 80, 80);
let drumMap =map (drum, 0, 100, 30, 90);
let lengthOfLine = 150;
let LineStart = 100;
let lineEnd = LineStart + lengthOfLine;
//line(LineStart, 800, lineEnd, 800);
line(LineStart, 900, lineEnd, 50);
line(LineStart, 500, lineEnd, 700);



for(let i =1; i <=drumMap; i= i+1){
let lineStep = i*8;
line(LineStart, lineStep, lineEnd, lineStep);
}


colorMode(RGB, 255);
noStroke();


fill(255, 245, 230);
rect(50,50, bass, bass);
ellipse(400, 500, other,other);



fill(255, 255,0);
 ellipse(150, size, vocal, vocal);
 fill(30,144,255);
 rect(30, 40, vocal, vocal);*/

 

size = size + 1;
if (size > 1000) {
    size=0
}

let x = map( bass, 200, 300, 200, 700);

fill(255, 30,43);
ellipse(300, ookisa, bass, bass);

ookisa = ookisa +10;
if (ookisa > 770) {
    ookisa=0
}


//fill(255, 245, 230);
//rect(50,50, bass, bass);
//ellipse(400, 500, other,other);

}






//let changingColor = lerpColor(Yellow, red, 0.99);
//let changingColor1= lerpColor(Yellow, red, 0.88);
//noStroke();
//fill(lerpColor);
//rect(600, 600, 30, 30);