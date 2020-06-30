var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        // alert("i got clicked");
      
        // console.log(this.innerHTML); // this is having the current button click details and now by this we can fetch the letter and can modify it easily
        // this.style.color ="white"; // when we click the button it chnges the color of the btn to white 

        var buttonInnerHTML =this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

       

    });
}


// detectingb keyboard clicks 

document.addEventListener("keydown",function(event){

   console.log(event);
   makeSound(event.key);
   buttonAnimation(event.key);

});

// function to detect the button click or keyboard click 
function makeSound(key){
   switch(key)
   {
       case "w":
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
            break;
            case "w":
               var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
                case "a":
                   var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;
                    case "s":
                       var audio = new Audio("sounds/tom-3.mp3");
                        audio.play();
                        break;
                        case "d":
                           var audio = new Audio("sounds/tom-4.mp3");
                            audio.play();
                            break;
                            case "j":
                               var audio = new Audio("sounds/snare.mp3");
                                audio.play();
                                break;
                                case "k":
                                   var audio = new Audio("sounds/Kick-bass.mp3");
                                    audio.play();
                                    break;
                                    case "l":
                                       var audio = new Audio("sounds/crash.mp3");
                                        audio.play();
                                        break;
                                        default: console.log("wrong key");
                                        break;

   }

}

// function to create animation 

function buttonAnimation(currentKey){

   // .w , .k ,.i so in query selector we are selecting the button class to get which button is clicked 
   var activeKey = document.querySelector("."+currentKey);
   
   // using classlist we are adding another class to drum buttoms named pressed using JS 
   activeKey.classList.add("pressed");
   
   // for look like animation after we add the class called pressed we want to remove it after some time so that it feels like animation
   setTimeout(function(){
      activeKey.classList.remove("pressed") 
   },100);
   
   
}

