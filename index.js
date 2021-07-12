
// First Random Image

var randomNumber1 = Math.floor(Math.random()*3)+1;;

var randomImage1 = "images/" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

// Second Random Image

var randomNumber2 = Math.floor(Math.random()*3)+1;

var randomImage2 = "images/" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 == 1 && randomNumber2 == 1){
    document.querySelector("h1").textContent = "😅Draw😅";
} 
else if (randomNumber1 == 1 && randomNumber2 == 2)
{
    document.querySelector("h1").textContent = "🏁Player 1 win!";    
}
else if (randomNumber1 == 1 && randomNumber2 == 3)
{
    document.querySelector("h1").textContent = "Player 2 win!🚩";
} 
else if (randomNumber1 == 2 && randomNumber2 == 1)
{
    document.querySelector("h1").textContent = "Player 2 win!🚩";    
}
else if (randomNumber1 == 2 && randomNumber2 == 2)
{
    document.querySelector("h1").textContent = "😅Draw😅";
} 
else if (randomNumber1 == 2 && randomNumber2 == 3)
{
    document.querySelector("h1").textContent = "🏁Player 1 win!";    
}
else if (randomNumber1 == 3 && randomNumber2 == 1)
{
    document.querySelector("h1").textContent = "🏁Player 1 win!";
} 
else if (randomNumber1 == 3 && randomNumber2 == 2)
{
    document.querySelector("h1").textContent = "Player 2 win!🚩";    
}
else //(randomNumber1 == 3 && randomNumber2 = 3)
{
    document.querySelector("h1").textContent = "😅Draw😅";
} 
