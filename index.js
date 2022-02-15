var button = document.querySelector(".btn");

button.addEventListener('click',()=>{
    var leftrandomNumber = Math.floor(Math.random()*6)+1;
    var leftImg = document.querySelector(".img1");
    leftImg.setAttribute("src", `./images/dice${leftrandomNumber}.png`);

    var rightrandomNumber = Math.floor(Math.random()*6)+1;
    var rightImg = document.querySelector(".img2");
    rightImg.setAttribute("src", `./images/dice${rightrandomNumber}.png`);

    var heading = document.querySelector("h1");
    if(leftrandomNumber>rightrandomNumber){
        heading.innerHTML = "🚩Player1 wins";
    }
    else if(leftrandomNumber<rightrandomNumber){
        heading.innerHTML = "Player2 wins🚩";
    }
    else{
        heading.innerHTML = "🚩Draw!🚩";
    }
})
