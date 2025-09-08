let stage = 0; //現在のステージ
let stageStarttime = 0;//ステージの開始時間

let circleAngle= 0;//三角形の回転角度

let snail1= [];
let snail2 =[];
let fallingcircles = [];
let triangleColor=[];


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












 )















}