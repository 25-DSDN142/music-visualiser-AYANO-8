let size = 150;
let ookisa = 300;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)

  fill(255, 255,0);
  ellipse(150, size, vocal, vocal);
 
size = size + 1;
if (size > 770) {
    size=0
}

let x = map( vocal, 200, 300, 200, 700);

fill(255, 24, 22);
ellipse(300, ookisa, drum, drum);

ookisa = ookisa +10;
if (ookisa > 770) {
    ookisa=0
}

fill(30,144,255);
rect(30, 40, vocal, vocal);


let Yellow = color(255, 255, 0);
let red = color (255, 0, 0);
let changingColor = lerpColor(Yellow, red, 0.99);
let changingColor1= lerpColor(Yellow, red, 0.88);
/*noStroke();
fill(red);
rect(600, 600, 30, 30);
*/

}