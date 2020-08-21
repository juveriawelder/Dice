
var randomNum1= Math.floor(Math.random()*6)+1;  //1-6
var randomDiceImage= "dice"+ randomNum1+ ".png";  //dice1.png-dice6.png
var randomImageSrc= "images/" +randomDiceImage;   //images/dice1.png-images/dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);


var randomNum2=Math.floor(Math.random()*6)+1;
var randomImageSrc2="images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else if(randomNum1=randomNum2){
    document.querySelector("h1").innerHTML="Draw!";
}