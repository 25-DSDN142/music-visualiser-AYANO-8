function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(255, 25,0 )
  textFont('Verdana'); // please use CSS safe fonts
  
  textSize(24);

  
rectMode(CENTER);

 noStroke();
fill (210, 180, 140);  
 quad(405, 800, 135, 800, 0,960,540,960);




















 stroke(75, 54, 33);
 strokeWeight(4);
 fill(101,67,33);
rect(80, 800, 140, 200);
rect(460, 800, 140, 200);

rect(80, 600, 140, 200);
rect(460, 600, 140, 200);





 noStroke();
 fill(59, 47, 47);
 rect(80, 750, vocal, 50);//左
 rect(460, 750, vocal, 50);//右


ellipse(30, 520, 10, 10);
ellipse(130, 520, 10, 10);
ellipse(30, 680, 10, 10);
ellipse(130, 680, 10,10);







ellipse(80, 840, drum, drum);
ellipse(460, 840, drum, drum);

ellipse(80, 640, bass, bass);
rect(460, 550, other, 50);
rect(80, 550, other, 50);
ellipse(460, 640, bass, bass);

/*rect(80, 802, 20, 200);
rect(460, 802, 20, 200);

stroke(128);
strokeWeight(7);
line (70, 850, 40, 950);
line(90, 850, 120, 950);

line(470, 850, 500, 950);
line(450, 850, 420, 950);*/

 


}
