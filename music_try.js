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
    pic[5] = loadImage("pic_6.png");
    pic[6] = loadImage("pic_7.png");
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
 VocalFrame = constrain(VocalFrame, 0, 2);

let otherFrame = int(map(other, 0, 100, 0, 3));
otherFrame = constrain(otherFrame, 0, 3);







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
 fill(255,255,230, random(200, 90)); // how many stars
 noStroke();
 ellipse(s.x, s.y, s.size, s.size);
}

 // 流れ星を描画・移動//shooting stars
  for (let i = shootingstars.length - 1; i >= 0; i--) {
  let m = shootingstars[i];
  fill(255,255, 230);//soft yellow
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
fill (37, 77, 112);  
quad(500, 350, 300, 350, 0,430,800,430);
fill(19,29,79);
rect(400,490, 800, 120);

//speakers
stroke(75, 54, 33);
strokeWeight(4);
fill(101,67,33);
rect(100, 320, 140, 200);
rect(700, 320, 140, 200);

noStroke();
fill(59, 47, 47);
rect(100, 270, other, 50);//left speaker
rect(700, 270, other, 50);//right speaker
ellipse(100, 350, drum, drum);//left speaker
ellipse(700, 350, drum, drum);//right speaker

//circle around the speaker(left)
ellipse(45, 240, 10, 10);
ellipse(155, 240, 10, 10);
ellipse(45, 300, 10, 10);
ellipse(155, 300, 10,10);
ellipse(45, 400, 10, 10);
ellipse(155, 400, 10, 10);

//circle around the speaker(right)
ellipse(645, 240, 10, 10);
ellipse(755, 240, 10, 10);
ellipse(645, 300, 10, 10);
ellipse(755, 300, 10, 10);
ellipse(645, 400, 10, 10);
ellipse(755, 400, 10, 10);

//images
push();
scale (0.2);
image(pic[VocalFrame],1500, 550);
pop ();




//moon
fill(255, 255, 0); //yellow
ellipse(650, 100, 70, 70);
fill(0);
ellipse(630, 110, 50, 50);

//mike
fill(169,169, 169);
ellipse(420, 250, 15, 15);
rect(430, 325, 5, 150);
fill(105, 105, 105);
rect(430, 250, 20, 5);

//mike stand
stroke(169,169, 169);
strokeWeight(2);
line (430,370, 420, 405);
line (430, 370, 440, 405);
stroke(0);
line (420, 244, 420, 257);
line (415, 246, 415, 255);
line (425, 246, 425, 255);
line (414, 248, 427, 248);
line (414, 253, 427, 253);

push();
scale(0.2);
image(pic[3 + otherFrame], 10, 350);
pop();

}

