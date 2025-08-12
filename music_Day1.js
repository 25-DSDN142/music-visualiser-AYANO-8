let 犬 = 300;
let size = 300;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame( vocal, drum, bass, other,) {
colorMode(RGB, 255);
background(255, 23, 255);

noStroke();
size = size +1;
if (size > 1000) {
    size =0;
}
let x =map (bass, 0, 100, 200, 700);
ellipse(x, 犬, bass, bass);
犬 = 犬 +10;
if (犬>1000) {
    犬=0;
}

}



