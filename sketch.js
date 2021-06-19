var huaaar, minut, secoooooond;
var hr,min,sec;
var huaaarAngle, minutAngle, secoooooondAngle; 

function setup(){
    createCanvas(400,400); 
    
    angleMode(DEGREES);   
}

function draw(){
    background(0);

  fill("white")
 noStroke()
  textSize(20)
 text(hr + ":" + min + ":" + sec,170,380);

    translate(200,200)
    rotate(-90)

    hr=hour()
    min=minute()
    sec=second()
    
    huaaar = hour();
    minut = minute();
    secoooooond = second();

   

    
    secoooooondAngle = map(secoooooond, 0, 60, 0, 360);
    minutAngle = map(minut,0,60,0,360)
    huaaarAngle = map(huaaar % 12,0,12,0,360)

    
    push();
    rotate(secoooooondAngle); 
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

  
    push();
    rotate(minutAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    
    push();
    rotate(huaaarAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    
    strokeWeight(10);
    noFill();
    
    stroke(255,0,0);
    arc(0,0,300,300,0,secoooooondAngle);
    
    stroke(0,255,0);
    arc(0,0,280,280,0,minutAngle);
    
    stroke(0,0,255);
    arc(0,0,260,260,0,huaaarAngle);
}