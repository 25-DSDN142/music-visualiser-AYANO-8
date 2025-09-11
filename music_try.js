let pic =[];
let imagesLoaded = false;
let stars = [];
let numStars = 500;

// 初期化フラグ
let starsInitialized = false;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(!imagesLoaded) {
    pic[0] = loadImage("pic_1.png");
    pic[1] = loadImage("pic_2.png");
    pic[2] = loadImage("pic_3.png");
imagesLoaded = true;
return;
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



noStroke();
fill (220, 20, 60);  
quad(500, 450, 300, 450, 0,540,800,540);

stroke(75, 54, 33);
strokeWeight(4);
fill(101,67,33);
rect(80, 800, 140, 200);
rect(460, 800, 140, 200);

rect(100, 420, 140, 200);
rect(700, 420, 140, 200);

noStroke();
fill(59, 47, 47);
rect(100, 370, vocal, 50);//左
rect(700, 370, vocal, 50);//右
ellipse(100, 460, drum, drum);
ellipse(700, 460, drum, drum);


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

fill(255, 255, 0);
ellipse(650, 150, 70, 70);
fill(0);
ellipse(630, 160, 50, 50);


push();
scale (0.2);
image(pic[VocalFrame],1500, 1000);
pop ();


fill(105, 105, 105);
rect(430, 350, 20, 10);
fill(169,169, 169);
ellipse(420, 350, 15, 15);
rect(430, 430, 5, 150);

stroke(169,169, 169);
strokeWeight(2);
line (430,470, 420, 505);
line (430, 470, 440, 505);
stroke(0);
line (410, 400, 10);















/*ellipse(80, 640, bass, bass);
rect(460, 550, other, 50);
rect(80, 550, other, 50);
ellipse(460, 640, bass, bass);*/

/*rect(80, 802, 20, 200);
rect(460, 802, 20, 200);

stroke(128);
strokeWeight(7);
line (70, 850, 40, 950);
line(90, 850, 120, 950);

line(470, 850, 500, 950);
line(450, 850, 420, 950);*/

 


}
