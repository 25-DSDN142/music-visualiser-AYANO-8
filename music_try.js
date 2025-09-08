let ステージ = 0; //現在のステージ
let ステージの開始時間 = 0;//ステージの開始時間
let 三角回転角= 0;//三角形の回転角度

let 落ちる丸配列 = [];
let 三角色=[];

const 三角数 =12;
const 丸数=20;

let 丸1Y =0;
let 丸2Y =200;
let 丸3Y =400;

function setup() {
  createCanvas(600, 800);
  rectMode(CENTER);
  textFont('Verdana');
  textSize(24);

 //落ちる丸の初期化をする

for (let i=0; i<丸数; i++){
    落ちる丸配列.push({
        x:random(width),
        y:random(-height, 0),
        baseSize:random(20, 50),
        speed:random(1,4),
        color: color(random(200,255), random(100, 255), 0)
    
    });//赤から黄色まで
 }

 //回転三角形の虹色設定１２個
 const rainbowColors=[
[255, 0, 0],[255, 127, 0],[255, 255, 0],
[127,255, 0],[0, 255, 0],[0, 255, 127],
[0, 255, 255],[0, 127, 255],[0,0, 255],
[227, 0, 255],[255, 0 ,255],[255, 0, 127],

];

for (let i =0; i <三角数; i++){
    const c = rainbowColors[i];
    三角色.push(color(c[0], c[1], c[2]));
}
ステージの開始時間 = millis();

}

function draw() {
  draw_one_frame("words", 50, 50, 50, 50, frameCount);
}



function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)

let 経過時間 = millis()-ステージの開始時間;

if (ステージ == 0 && 経過時間 > 10000) {
    ステージ = 1;
    ステージの開始時間 = millis();
} else if (ステージ == 1 && 経過時間 > 120000) {
    ステージ = 2;
    ステージの開始時間 = millis();
}

if (ステージ<=1) {
 let 円サイズ= map(vocal, 0, 100, 50, 200);
    noStroke();
    fill(255, 200, 0);
    ellipse(width/ 2, height/ 2, 円サイズ);

     push();
     translate(width/ 2, height/ 2);
     let 三角半径= map(drum, 0, 100, 円サイズ/ 2 +20, 円サイズ/ 2 +80);
     for (let i = 0; i<三角数; i++) {
        let angle = radians(三角回転角 + (360/三角数) * i);
        let x = cos(angle) * 三角半径;
        let y = sin (angle) * 三角半径;
       
        push();
        translate(x, y);
        rotate (angle);
        fill(三角色[i]);
        triangle (0, -10, -10, 10, 10, 10);
        pop();
     }
pop();
三角回転角 +=2;

if (ステージ==2) {

fill(255, 30, 43);
ellipse(150, 丸1Y, bass, bass);
丸1Y +=10;
if (丸1Y >height) 丸1Y =0;

fill(255, 50, 100);
ellipse(300, 丸2Y, bass, bass);
丸2Y +=8;
if (丸2Y >height)丸2Y=0;

fill(255, 200, 50);
ellipse(450, 丸3Y, bass, bass);
丸3Y +=12;
if (丸3Y>height) 丸3Y =0;


noStroke();
for (let c of 落ちる丸配列) {
    let 円サイズ = map(other, 0, 100, c.baseSize/ 2, c.baseSize* 2);
    fill(c.color);
    ellipse(c.x,c.y, 円サイズ);
    c.y += c.speed;
    if (c.y >height) c.y =random (-height, 0);

     }
   }
}