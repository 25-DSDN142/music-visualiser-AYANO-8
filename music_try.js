let stage = 0; //現在のステージ
let stageStarttime = 0;//ステージの開始時間

let circleAngle= 0;//三角形の回転角度

let snail1= [];
let snail2 =[];
let fallingcircles = [];
let triangleColor=[];
const unmtriangles =12;
const numcircles =20;

let ookisa1 =0;
let ookisa2 =200;
let ookisa3 =400;


function setup() {
    createCanvas(600, 800);
    angleMode(DEGREES);

 snail1.push(loadImage('snail_0.png'));
 snail2.push(loadImage('snail_1.png'));
 snail3.push(loadImage('snail_2.png'));
 snail4.push(loadImage('snail_3.png'));

 //落ちる丸の初期化をする

 for (let i=0; i<20; i++){
    fallingCircles.push({
        x:random(width),
        y:random(-height, 0),
        baseSize:random(20, 50),
        speed:random(1,4),
        color: color(random(200,255), random(100, 255), 0)
    
    });//赤から黄色まで
 }

 //回転三角形の虹色設定１２個
 const rainbowColors=[
(255, 0, 0),(255, 127, 0),(255, 255, 0),
(127,255, 0),(0, 255, 0),(0, 255, 127),
(0, 255, 255),(0, 127, 255),(0,0, 255),
(227, 0, 255),(255, 0 ,255),(255, 0, 127),

];

}
for (let i =0; i<numtriangles; i++){
    const c = reainbowColors[i];
    triangleColor.push(color([0], c[1], c[2]));
}
stageStartTime = millis();

}

function draw_one_frame(vocal, drum, bass, other){
    backfround(0);
    let image=int(map(vocal, 0, 100, 0 ,1))+
    image = constrain(image, 0, 1);

    let ellipse = millis() - stageStarttime;
    ImageMode (CENTER);

    if (stage ==0){
        drawStage0(image, elapsed);
    }else if (stage ==1) {
        drawStage1(image, vocal, drum, elapsed);
    } else if (stage ==2) {
        drawStage2(image, bass, other, elapsed);

    }
    }

    //ステージ０の状態
    founction drawStage0 (image, elapsed) {
        image(snail1Images [image], wigth/2, height/2, 200, 200);
        if (elapsed >1000) {
            stage =1;
            stageStartTime =millis();

        }
    }

//ステージ１の状態
function drawStage1(image, vocal, drum, elapsed) {
    image(snail2image [image], width/2, height /2, 200, 200);
     
    drawCenterCircle(vocal);
    drawRotatingtriangles(drum);

    if (elapsed >120000) {
        stage =2;
        stageStartTime =millis();

    }
}

//ステージ２
function drawStage2 (image, bass, other, elapsed) {
    image(snail2Images [image], width/2, height/2, 200, 200);
    drawfallingCircles (other, bass);
    if (elapsed >60000) noLoop();

}


let circlrSize =map(vocal, ookisa1, 100, 50, 200);
noStroke();
fill (255, 200, 0);
ellipse(width/2, height/2, circleSize);



push();
translate8width/2, heighr/2);
let triangleRadius =map(drum, 0, 100, circleSize/2)

for (let i =0; i<numTriangles; i++) {
    let angle = circleAngle + (360 / numTriangles)* i;

    //三角形の中心座標
    let x = cos(angle) * triangleRadius;
    let y =sin (angle) * triangleRadius;

    fill (trianglecolor[i]);

    push();
    translate(x, y);
    rotate (angle);
    triang (0, -10, -10, 10, 10, 10);
    pop();
}
pop();

circlrAngle +=2;








image (snail2Images[image],width/2, height/2, 200, 200)

fill(255, 30, 43);
ellipse(150, ookisa, bass, bass);
ookisa +=10;
if (ookisa1 >height) ookisa =0;

fill(255, 50, 100);
ellipse(300, ookisa2, bass, bass);
ookisa2 +=8;
if (ookisa2 >height)ookisa2 =0;

fill(255, 200, 50);
ellipse(450, ookisa3, bass, bass);
ookisa3 +=12;
if (ookisa3>height) ookisa3 =0;
}











}