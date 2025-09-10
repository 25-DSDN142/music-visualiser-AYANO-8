let pic =[];
let imagesLoaded = false;



function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(!imagesLoaded) {
    pic[0] = loadImage("pic_1.png");
    pic[1] = loadImage("pic_2.png");
    pic[2] = loadImage("pic_3.png");
imagesLoaded = true;
return;
}
  
  
  //console.log(pic);
  background(0 )
  textFont('Verdana'); // please use CSS safe fonts
  textSize(24);
  rectMode(CENTER);

let VocalFrame = int(map(vocal, 0, 100, 0, 3));
VocalFrame = constrain(VocalFrame, 0, 2);

push();
scale (0.2);
image(pic[VocalFrame],1500, 1000);
pop ();

/*var VocalFrame = int(map(vocal, 0, 100, 0, 3));
VocalFrame = constrain(VocalFrame, 0, 2); // 0,1,2 のみ

console.log("Frame:", VocalFrame);


push();
scale(0.3);
image(pic[VocalFrame], 50, 50)
pop();
*/

noStroke();
fill (210, 180, 140);  
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
