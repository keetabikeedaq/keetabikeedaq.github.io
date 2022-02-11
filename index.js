
function display(){
    let inputName=document.getElementById("name");
    let inputPassword=document.getElementById("pass");
    let btn =document.querySelector("button");
    let body=document.querySelector("body");
    let nameValue =inputName.value;
    let namePass =inputPassword.value;
    let addr = document.querySelector("a")

    if((nameValue=="keetabikeeda")&&(namePass=="12345"))
    
     {

     location.replace("quiz");

     }
    //   const para=document.querySelector("p");
    // //  image.src="https://bit.ly/3L502lU";
    //  para.style.display="block";
    //  para.textContent="The latest Apple TV 4K is on sale for $160, or $20 off its normal price. While the 2021 version isn't drastically different from the previous model, its new Siri remote is a big selling point. We gave it a score of 90 for its speedy performance, HomeKit integration and the easy of use that comes with the improved Siri remote.";
    //  para.style.color="black";
    //  para.style.fontWeight="bold";
    //  inputName.style.display="none";
    //  inputPassword.style.display="none";
    //  btn.style.display="none";
    //  body.style.background= "linear-gradient(red,orange)";
    // }
    else
    {
    alert("Enter the correct credentials");
    }
  }

  

