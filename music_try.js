let ステージ = 0; //現在のステージ
let ステージの開始時間 = 0;//ステージの開始時間
let 三角回転角= 0;//三角形の回転角度

let カタツムリ１画像= [];
let カタツムリ２画像 =[];
let 落ちる丸配列 = [];
let 三角色=[];

const 三角数 =12;
const 丸数=20;

let 丸1Y =0;
let 丸2Y =200;
let 丸3Y =400;


function setup() {
    createCanvas(600, 800);
    angleMode(DEGREES);

 カタツムリ１画像= [loadImage('snail_0.png'),loadImage('snail_1.png')];
 カタツムリ２画像=[loadImage('snail_2.png'),loadImage('snail_3.png')];

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

for (let i =0; i >三角数; i++){
    const c = reainbowColors[i];
    三角色.push(color([0], c[1], c[2]));
}
ステージの開始時間 = millis();

}

function draw_one_frame(vocal, drum, bass, other){
    backfround(0);
    ImageMode(CENTER)+

    let 画像番号=contrain(int(map(vocal, 0, 100, 0 ,1)), 0, 1);
    
    let 経過時間 = millis() - stageStarttime;

   

    if (ステージ ==0) drawStage0(画像番号, elapsed);
    else if (ステージ ==1) drawStage1(画像番号, vocal, drum, 経過時間);
    else if (ステージ ==2) drawStage2(画像番号, bass, other, 経過時間);

    }
    

    //ステージ０の状態
    founction drawStage0 (画像番号, 経過時間) {
        image(カタツムリ1画像 [画像番号], wigth/2, height/2, 200, 200);
        if (経過時間 >1000) {
            ステージ =1;
            ステージの開始時間 =millis();

        }
    }

//ステージ１の状態
function drawStage1(画像番号, vocal, drum, 経過時間) {
    image(カタツムリ2画像 [画像番号], width/2, height /2, 200, 200);
     
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