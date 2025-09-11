let pic =[];
let imagesLoaded = false;
let stars = [];
let numStars = 500;

// 初期化フラグ
let starsInitialized = false;
let meteors = [];
let meteorInterval = 30;
let lastAddedFrame = 0; // ←ここが必要

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(!imagesLoaded) {
    pic[0] = loadImage("pic_1.png");
    pic[1] = loadImage("pic_2.png");
    pic[2] = loadImage("pic_3.png");
imagesLoaded = true;
return;
}



if (counter > 4950 && counter - lastAddedFrame >= meteorInterval) {
    for (let i = 0; i < 15; i++) { // 1回に5個
      meteors.push({
        x: random(0, 800),
        y: random(0, 540),
        size: random(1, 5),
        speedY: random(1 ,2),
        
      });
    }
   lastAddedFrame = counter;
  }
  //console.log(pic);







  background(0);
  textFont('Verdana'); // please use CSS safe fonts
  textSize(24);
  rectMode(CENTER);

let VocalFrame = int(map(vocal, 0, 100, 0, 3));
VocalFrame = constrain(VocalFrame, 0, 2);




  // 初回のみ星を初期化
  if (!starsInitialized) {
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: random(0, 800),
        y: random(0, 540),
        size: random(1,5),
      });
    }
    starsInitialized = true;
  }

/*var VocalFrame = int(map(vocal, 0, 100, 0, 3));
VocalFrame = constrain(VocalFrame, 0, 2); // 0,1,2 のみ

console.log("Frame:", VocalFrame);


push();
scale(0.3);
image(pic[VocalFrame], 50, 50)
pop();
*/

for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    fill(225, random(200, 50)); // 光ってる感じだけ少しランダム
    noStroke();
    ellipse(s.x, s.y, s.size, s.size);
  }
// 流れ星を描画・移動
  for (let i = meteors.length - 1; i >= 0; i--) {
    let m = meteors[i];
    fill(255);
    noStroke();
    ellipse(m.x, m.y, m.size, m.size);

    m.y += m.speedY;
    

    // 画面外に行ったら削除
    if (m.y > 540 || m.x > 800) {
      meteors.splice(i, 1);
    }
  }



noStroke();
fill (220, 20, 60);  
quad(500, 450, 300, 450, 0,530,800,530);
fill(169,169, 169);
rect(400,540, 800, 20);



stroke(75, 54, 33);
strokeWeight(4);
fill(101,67,33);
rect(80, 800, 140, 200);
rect(460, 800, 140, 200);

rect(100, 420, 140, 200);
rect(700, 420, 140, 200);

noStroke();
fill(59, 47, 47);
rect(100, 370, other, 50);//左
rect(700, 370, other, 50);//右
ellipse(100, 450, drum, drum);
ellipse(700, 450, drum, drum);


ellipse(45, 340, 10, 10);//周りの丸
ellipse(155, 340, 10, 10);
ellipse(45, 400, 10, 10);
ellipse(155, 400, 10,10);
ellipse(45, 500, 10, 10);
ellipse(155, 500, 10, 10);

ellipse(645, 340, 10, 10);
ellipse(755, 340, 10, 10);
ellipse(645, 400, 10, 10);
ellipse(755, 400, 10, 10);
ellipse(645, 500, 10, 10);
ellipse(755, 500, 10, 10);

push();
scale (0.2);
image(pic[VocalFrame],1500, 1000);
pop ();

fill(255, 255, 0);
ellipse(650, 150, 70, 70);
fill(0);
ellipse(630, 160, 50, 50);

fill(169,169, 169);
ellipse(420, 350, 15, 15);
rect(430, 425, 5, 150);
fill(105, 105, 105);
rect(430, 350, 20, 5);

stroke(169,169, 169);
strokeWeight(2);
line (430,470, 420, 505);
line (430, 470, 440, 505);
stroke(0);
line (420, 344, 420, 357);
line (415, 346, 415, 355);
line (425, 346, 425, 355);
line (414, 348, 427, 348);
line (414, 353, 427, 353);

 
}

