function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  
  textSize(24);

  

 stroke(255);
 strokeWeight(4);
 fill(0);
 rect(30, 390,100, 200);



 noStroke();
fill (255,25,0);  
 quad(405, 650, 135, 650, 0,780,540,780);


 fill(128);
ellipse(80, 450, vocal, vocal);

ellipse(80, 550, other, other);



}