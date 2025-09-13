let pic =[];
let imagesloaded = false;
let stars = [];
let numberofstars = 500;
let starsInitialized = false;
let shootingstars = [];
let shootingstarsgap = 30;
let lastaddedframe = 0;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(!imagesloaded) {
    pic[0] = loadImage("pic_1.png");
    pic[1] = loadImage("pic_2.png");
    pic[2] = loadImage("pic_3.png");
    pic[3] = loadImage("pic_4.png");
    pic[4] = loadImage("pic_5.png");
    //pic[5] = loadImage("pic_6.png");
    //pic[6] = loadImage("pic_7.png");
imagesloaded = true;
return;
}

//shooting stars setting
if (counter > 4950 && counter - lastaddedframe >= shootingstarsgap) {
 for (let i = 0; i < 15; i++) { 
 shootingstars.push({
 x: random(0, 800),
 y: random(0, 540),
 size: random(1, 4),
 speedY: random(1 ,2),
});
}
lastaddedframe = counter;
}
  
background(0);
textFont('Verdana'); 
textSize(24);
rectMode(CENTER);

 //images setting
let VocalFrame = int(map(vocal, 0, 100, 0, 3));
 //VocalFrame = constrain(VocalFrame, 0, 2);
 //ratios
if( vocal < 22) {
  VocalFrame = 0;
} else if (vocal < 72) {
  VocalFrame = 1;
} else {
  VocalFrame = 2;
} 



//the audience image
let BassFrame = int(map(bass, 0, 100, 0, 3));
//BassFrame = constrain(BassFrame, 0, 3);
//ratios
if( bass < 79) {
  BassFrame = 0;
} else  {
  BassFrame = 1;
}
  
/*if (bass < 79) {
  BassFrame = 1;
} else if (bass < 100) {
  BassFrame = 2;
} else {
  BassFrame = 3;
}*/


 //stars setting
if (!starsInitialized) {
    for (let i = 0; i < numberofstars; i++) {
      stars.push({
        x: random(0, 800),
        y: random(0, 540),
        size: random(1,4),
      });
    }
    starsInitialized = true;
}

 //push stars
for (let i = 0; i < stars.length; i++) {
 let s = stars[i];
 fill(255,235, 0, random(200, 90)); // how many stars
 noStroke();
 ellipse(s.x, s.y, s.size, s.size);
}

 // 流れ星を描画・移動//shooting stars
  for (let i = shootingstars.length - 1; i >= 0; i--) {
  let m = shootingstars[i];
  fill(255, 235, 0);
  noStroke();
  ellipse(m.x, m.y, m.size, m.size);
   m.y += m.speedY;
   
 // 画面外に行ったら削除//if they go to outside of frame, they will disappear   
if (m.y > 540 || m.x > 800) { 
 shootingstars.splice(i, 1);
 }
}


//stage
noStroke();
fill (234, 34, 100);  
quad(500, 350, 300, 350, 0,450,800,450);
fill(52, 76, 183);
rect(400,510, 800, 120);

//speakers
stroke(0);
strokeWeight(4);
fill(75, 0, 130);
rect(100, 340, 140, 200);
rect(700, 340, 140, 200);

noStroke();
fill(30, 9, 87);
rect(100, 290, other, 50);//left speaker
rect(700, 290, other, 50);//right speaker
ellipse(100, 370, drum, drum);//left speaker
ellipse(700, 370, drum, drum);//right speaker


//circle around the speaker(left)
ellipse(45, 260, 10, 10);
ellipse(155, 260, 10, 10);
ellipse(45, 320, 10, 10);
ellipse(155, 320, 10,10);
ellipse(45, 420, 10, 10);
ellipse(155, 420, 10, 10);

//circle around the speaker(right)
ellipse(645, 260, 10, 10);
ellipse(755, 260, 10, 10);
ellipse(645, 320, 10, 10);
ellipse(755, 320, 10, 10);
ellipse(645, 420, 10, 10);
ellipse(755, 420, 10, 10);

//hedgehog images
push();
scale (0.2);
image(pic[VocalFrame],1500, 580);
pop ();

//moon
fill(255, 235, 0); //yellow
ellipse(670, 110, 80, 80);
fill(0);
ellipse(650, 120, 70, 70);

//mike
fill(169,169, 169);
rect(430, 335, 5, 150);
fill(105, 105, 105);
rect(430, 260, 20, 5);
fill(169,169, 169);
ellipse(420, 260, 15, 15);

//mike stand
stroke(169,169, 169);
strokeWeight(2);
line (430,360, 420, 405);
line (430, 360, 440, 405);
stroke(0);
line (420, 254, 420, 267);
line (415, 256, 415, 265);
line (425, 256, 425, 265);
line (414, 258, 427, 258);
line (414, 263, 427, 263);

//the audience image
push();
scale(0.2);
image(pic[3 + BassFrame], 100, 300);
pop()

}

