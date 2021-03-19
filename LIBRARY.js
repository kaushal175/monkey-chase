function bounceoff(box1,box2){
    if(box1.x-box2.x<=box1.width/2+box2.width/2 &&
        box2.x-box1.x<=box1.width/2+box2.width/2 ){
          box1.velocityX=-box1.velocityX;
          box2.velocityX=-box2.velocityX;
       
        }  
}