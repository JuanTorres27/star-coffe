// navbar
let navButton= document.querySelector(".nav__dropdown-button");
let dropdownContent= document.getElementById("dropdown");
let closeButton= document.getElementById("close");


navButton.addEventListener("click", dropdown)

function dropdown(){
   dropdownContent.classList.remove("hidden")
   dropdownContent.classList.add("dropdown-content")

   closeButton.addEventListener("click", closing)
   function closing(){
      dropdownContent.classList.add("hidden")
      dropdownContent.classList.remove("dropdown-content")
    }
}

let drinks= document.querySelector(".drinks__title")
drinks.addEventListener("click", ()=> changeInfo("second"))
// button for the slider

let optionFirst= document.querySelector("#optionFirst")
let optionSecond= document.getElementById("optionSecond")
let optionThird= document.getElementById("optionThird")
let optionFourth= document.getElementById("optionFourth")
let optionFifth= document.getElementById("optionFifth")

// events listeners for each button 
optionFirst.addEventListener("click", ()=>{changeInfo("first")})

optionSecond.addEventListener("click", ()=>{changeInfo("second")})
optionThird.addEventListener("click", ()=>{changeInfo("third")})
optionFourth.addEventListener("click", ()=>{changeInfo("four")})
optionFifth.addEventListener("click", ()=>{changeInfo("five")})




// variables 

function changeInfo(option){
   let img= document.querySelector(".drinks-img")
   let h2= document.getElementById("drinksTitle")
   let p= document.getElementById("text-info")

if(option==="first"){
img.setAttribute("src", "https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png" )
h2.innerHTML= "Customize your drink"
p.innerHTML= "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup."
}

else if (option==="second"){
img.setAttribute("src", "https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png" )
h2.innerHTML= "Brewed hot coffee, bakery item or hot tea"
p.innerHTML= "Pair coffee cake or an almond croissant with your fresh cup of hot brew."
}

else if (option==="third"){
   img.setAttribute("src", "https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png" )
   h2.innerHTML= "Handcrafted drink, hot breakfast or parfait"
   p.innerHTML= "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink."
   }

   else if (option==="four"){
      img.setAttribute("src", "https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png" )
      h2.innerHTML= "Salad, sandwich or protein box"
      p.innerHTML= "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box."
      }

   else if (option === "five"){
      img.setAttribute("src", "https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png" )
      h2.innerHTML= "Select merchandise or at-home coffee"
      p.innerHTML= "Take home a signature cup, a bag of coffee or your choice of select coffee accessories."

   }
}

