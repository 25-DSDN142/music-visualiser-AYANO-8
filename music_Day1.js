// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

let centerX = width / 2;  
let centerY = height / 2; 

// 基本半径（音の合計で変化する）  

let baseRadius = 100 + (vocal + drum + bass + other) / 4; 

// トゲの数 let spikes = 80; 

beginShape();  
for (let i = 0; i < spikes; i++) {  
let angle = map(i, 0, spikes, 0, TWO_PI); // 音ごとにトゲの長さを加算  
let spikeLength = map(vocal, 0, 100, 0, 50)  
map(drum, 0, 100, 0, 30)  
map(bass, 0, 100, 0, 40)  
map(other, 0, 100, 0, 20); // 交互にトゲを大きくしてギザギザ感を出す  

let r = baseRadius + (i % 2 === 0 ? spikeLength : 0);  
let x = centerX + r * cos(angle);  
let y = centerY + r * sin(angle); vertex(x, y); } endShape(CLOSE); 

// 中央に歌詞(words)  

noStroke();  
fill(255, 255, 0);  
textSize(32);  
text(words, centerX, centerY);  

} 
