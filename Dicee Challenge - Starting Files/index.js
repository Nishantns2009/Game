var random = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+random+".png";
var imageSource = "images/"+randomImage1;
var image1 =document.getElementsByTagName("img")[1].setAttribute("src",imageSource);
var random2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+random2+".png";
var imageSource2 = "images/"+randomImage2;
var image2 =document.getElementsByTagName("img")[0].setAttribute("src",imageSource2);

if (random<random2){
    document.querySelector("h1").innerHTML="Player 1 Won !!";
    
}else if (random===random2){
    document.querySelector("h1").innerHTML= "Match Tied !!";
}else {
    document.querySelector("h1").innerHTML= "Player 2 Won !!";
}




