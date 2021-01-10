var canvas
var dog,dogimg,happydog
var feedbutton,lastfeedbutton;
var food
var foodata
var database
var backimg
var foodobj
var fedtime,lastfed
function preload() {
    dogimg=loadImage("Dog.png")
    backimg=loadImage("backimg.jpg")
    happydog=loadImage("happydog.png")
}
function setup(){
 canvas=createCanvas(1000,600)

 database=firebase.database()

 
dog=createSprite(500,400,10,10)
dog.addImage(dogimg)
dog.scale=0.3

    foodata=database.ref('Food');
    foodata.on("value",readStock);

   foodobj=new dis()
    feedbutton=createButton("feed the dog")
   feedbutton.position(100,100)
   feedbutton.mousePressed(feedDog)

}
function draw(){
    background(backimg)
    foodobj.display()
    fedtime=database.ref("FedTime")
    fedtime.on("value",function(data){
        lastfed=data.val
    })
   // if(MousePressed(feedbutton)){
       // writeStock(food)
       // dog.addImage(happydog)
   // }
    drawSprites()
    textSize(20)
    fill("green")
    text("Press Up Arrow To Feed Dog  ",400,50)
    textSize(20)
    text("Food remaining:"+food,30,50)
}
function readStock(data){
    food=data.val()
    foodobj.updatefoodstock(food)
}
function writeStock(x){
    if(x<=0){
        x=0;
      }else{
        x=x-1;
      } 
    database.ref("/").update({
        Food:x
    })
}
function feedDog(){
    dog.addImage(happydog.png);
    
    foodobj.updatefoodstock(foodata.getfoodstock()-1);
    database.ref('/').update({
    Food:foodobj.getFoodStock(),
    //FeedTime:hour()
    })
    }