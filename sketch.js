let ball_x, ball_y, ball_dx, ball_dy, radius;
let paddle_x, paddle_y, paddle_dx, paddle_width, paddle_height
let life=3
let block_x, block_y, block_width, block_height, block_left, block_right, block_top, block_bottom

function setup() {
  createCanvas(400, 400);
  score=0
  life=3
  //background("black")
  fill("#641530")
  //stroke("white")
circle(width/2,height/2,50)
  ball_x=width/2
  ball_y=height/2
  ball_dx=2
  ball_dy=1
  radius=20
  
  paddle_x=(width/2)-80/2
  paddle_y=(height-23)
  paddle_width=80
  paddle_height=30
  paddle_dx = 2
  life = 3
  
  brick=[
   {wid: 80,heig:10,x:10,y:90},
   {wid: 80,heig:10,x:100,y:50},
   {wid: 80,heig:10,x:200,y:190},
   {wid: 80,heig:10,x:150,y:300},
   {wid: 80,heig:10,x:250,y:120},
   {wid: 80,heig:10,x:80,y:350},
   {wid: 80,heig:10,x:280,y:280}];
  
  // block_x=width/2-30
  // block_y=200
  // block_width = 90
  // block_height = 100
  
  
  //   block_top = block_y
  //   block_bottom=block_y+block_height
 //   block_left = block_x 
 //   block_right = block_x+block_width
 
  
   }
function draw(){
  background("black")
  ball_x=ball_x+ball_dx
  //ball_y=ball_y+ball_dy
  ball_y+=ball_dy

  if (keyIsDown(RIGHT_ARROW)){
    paddle_x +=paddle_dx
  }
  if (keyIsDown(LEFT_ARROW)){
    paddle_x -= paddle_dx
  }
  
  if ((ball_x + radius/2)> width)
    ball_dx=-ball_dx;
  if ((ball_y+ radius/2)>height)
    ball_dy=-ball_dy;
  if ((ball_x-radius/2)<0)
    ball_dx=-ball_dx
  if ((ball_y-radius/2)<0)
    ball_dy=-ball_dy

  
  fill("white")
  circle(ball_x,ball_y,radius)

    rect(paddle_x,paddle_y,paddle_width,paddle_height,paddle_dx)
  
//   text("score",300,20)
//   text("lifeline : "+life,300,40)
  

  if ((ball_y+radius/2)>paddle_y){
   if ((ball_x-radius/2>paddle_x)&&(ball_x<(paddle_x+paddle_width))){
      (ball_dy=-(ball_dy))
    }
  }
  
  text("Life Line:"+life,width-80,40);
  text(" Score:"+score,width-80,20);
   if((ball_y+(radius))>height)
         { 
           if(life>1)
           {
          
             ball_x = 200;
             ball_y = 200;
             life-=1;
             text("Life Line:"+life,width-80,40);
         
            }
           
           else
           {
             life=0;
             score=score;
             ball_dy=0;
             ball_dx=0;
             }
           
         } 
  
  
  // rect(block_x, block_y, block_width, block_height)

 fill("rgb(206,113,64)");
 for(var i=0;i<(brick.length);i++)
    {
       rect(brick[i].x,brick[i].y,brick[i].wid,brick[i].heig);
    }
 
  
  
  
  for(var k=0;k<(brick.length);k++) {
   //  for top and bottom
     if (((ball_y-radius/2)<=brick[k].y+brick[k].heig) && ((ball_y+radius/2)>=brick[k].y)){
        if ((ball_x-radius/2)>=brick[k].x && ball_x+radius/2<=brick[k].x+brick[k].wid){
        ball_dy =-ball_dy
        brick[k].wid=0;
         brick[k].heig=0;
          score+=1
          text("Score:"+(score+=1),width-80,20)
        }
     }
    // for left and right
     if ((ball_x+radius/2>=brick[k].x) &&(ball_x-radius/2<=brick[k].x+brick[k].wid)){
         if((ball_y-radius/2>=brick[k].y) &&(ball_y+radius/2<=brick[k].y+brick[k].heig)){
            ball_dx=-ball_dx 
            brick[k].wid=0;
            brick[k].heig=0;
            score+=1
           text("Score:"+(score+=1),width-80,20)
         }
     }
       
        
    
  }
  
  if ((life>0)&&(score==14)){
    ball_dy=0
    ball_dx=0
    text("congrats!!! You win",160,200)
    
          }
  
if(life==0){
   if (score==14){
     text("congrats!!! You win",160,200,green)
     text("your score : " +score,160,220)
   }
  else{
    text("Game over",160,200)
     text("your score" +score,160,220)
  }
  
  }
      
 
    
}