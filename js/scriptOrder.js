//Most of the  codes here  is related to pizzaorder.html. I have mainly used vanilla javascript besides few of jquery codes.
// I have first worked to pizza section with codes mainly targetting it. Once , it worked completely  from beginning to order 
// lavel to final displaying and removing data from shopping cart ,then, I have written the codes focusing all remaining sections 
// .so , there looks more codes and different ways too.  The last part of codes  are written in well functions and are very useful. As this
// is my first attempt to write codes for a big pizza website on my own , definately, I am learning many stuffs while working 
// and improving my skills for codings. to be honest, It took more time to code pizza section than whole other remaining sections. 
// later,I realized that the first part of codes was not in function and well independent  besides few of them . once, by completing codes 
// for pizza section , I tried to implement in functions. as I had previous codes for pizza section , it did not take much time to organize 
// them infunctions. I will be definately updating it to get more organized, simple and readable.   



//this is about cheese pizza  in ordered section in pizzaorder.html . once you click ordernow in cheese piza it will hides its some of
//part and displays the informations for order with add to order button.
//these are dom elements for two buttons in cheese Pizza. 
var cheeseOrderNowButton = document.querySelector(".cheese-ordernow-button");
const cheesePizzaToOrder = document.querySelector(".cheese-pizza-add-to-order");

// functon to show add to order which was hided before in html codes..
cheeseOrderNowButton.addEventListener("click", function () {
  var secondparentElement = cheeseOrderNowButton.parentElement.parentElement;
  secondparentElement.classList.add("notShow");
  cheesePizzaToOrder.classList.remove("notShow");
});
//there is small circle for i in display part of pizza to order which is taken fom dom with '.label. once you click it
// it hides current display and takes you to previous display without button. in privious display there is close * sign 
// once you click it gets back to current  ordertobutton.
var closelabelForCheesePizza = document.querySelector(".label");
var cheesePizzaOrderNow = document.querySelector(".cheese-pizza-order-now");
var closebuttonForCheesePizza = document.querySelector(".close-button");

closelabelForCheesePizza.addEventListener("click", function () {
  var parentElementForCheesePizza =
  closelabelForCheesePizza.parentElement.parentElement;
  parentElementForCheesePizza.classList.add("notShow");
  closebuttonForCheesePizza.classList.remove("notShow");
  cheesePizzaOrderNow.classList.remove("notShow");
  cheeseOrderNowButton.classList.add("notShow");
});

closebuttonForCheesePizza.addEventListener("click", function () {
  var parentElement = closebuttonForCheesePizza.parentElement.parentElement;
  parentElement.classList.add("notShow");
  cheesePizzaToOrder.classList.remove("notShow");
});

//for chicken Bacon pizza
//now it is about chicken bacon pizza. it does the same way like cheese pizza.
var chickenbaconOrderNowButton = document.querySelector(
  ".chicken-bacon-order-now-button"
);
var chickenBaconPizzaToOrder = document.querySelector(
  ".chicken-bacon-add-to-order"
);
chickenbaconOrderNowButton.addEventListener("click", function () {
  var parentElementForChickenBaconOrderNowButton =
  chickenbaconOrderNowButton.parentElement.parentElement;
  parentElementForChickenBaconOrderNowButton.classList.add("notShow");
  chickenBaconPizzaToOrder.classList.remove("notShow");
});

var closelabelForChickenBaconPizza = document.querySelector(
  ".label-chicken-bacon-pizza"
);
var chickenBaconOrderNow = document.querySelector(".chicken-bacon-order-now");
let closebuttonForChickenBaconPizza = document.querySelector(
  ".close-button-chicken-bacon-pizza"
);

closelabelForChickenBaconPizza.addEventListener("click", function () {
  var parentElementForCloseLabelChickenBaconPizza =
  closelabelForChickenBaconPizza.parentElement.parentElement;
  parentElementForCloseLabelChickenBaconPizza.classList.add("notShow");
  chickenBaconOrderNow.classList.remove("notShow");
  closebuttonForChickenBaconPizza.classList.remove("notShow");
  chickenbaconOrderNowButton.classList.add("notShow");
});

// let closebuttonForChickenBaconPizza = document.querySelector('.close-button-chicken-bacon-pizza');
closebuttonForChickenBaconPizza.addEventListener("click", function () {
  var parentElementForCloseButtonChickenBaconPizza =
  closebuttonForChickenBaconPizza.parentElement.parentElement;
  parentElementForCloseButtonChickenBaconPizza.classList.add("notShow");
  chickenBaconPizzaToOrder.classList.remove("notShow");
});


// this is the code for cheese pizza amount price change. it will give different price acording to
// selection of pizza sizes and numbers of pizza . first it is  about cheese pizza.

//this is constant prices.
const $pizzaAmountMedium = 11.98;
const $pizzaAmountSmall = 9.98;
const $pizzaAmountLarge = 13.98;
// this triggers change for in cheese pizza. it takes addEventlisteer from  cheesePizzaToOrder to its childen. 
cheesePizzaToOrder.addEventListener("change", function () {
  // it is dom for amount of cheese pizza.
  const pizzaAmount = document.querySelector(".pizza-amount");
  // dom for types of  cheese pizza
  const cheeseSelectPizza = cheesePizzaToOrder.querySelector(
    "#cheese-select-pizza"
  );
  //dom for number of  cheese pizza
  const cheeseSelectValue = cheesePizzaToOrder.querySelector(
    "#select-value-cheese"
  );
  var opt;
  let selectedValue;

  for (var i = 0; i < cheeseSelectValue.options.length; i++) {
    opt = cheeseSelectValue.options[i];
    if (opt.selected === true) {
      selectedValue = parseFloat(opt.textContent);
    }
  }

  if (cheeseSelectPizza.options[0].selected === true) {
    let pizzaAmountFirst = $pizzaAmountLarge * selectedValue;
    // pizzaAmount.textContent = ($pizzaAmountLarge * selectedValue).toFixed(2);
    pizzaAmount.textContent = pizzaAmountFirst.toFixed(2);
  }
  if (cheeseSelectPizza.options[1].selected === true) {
    let pizzaAmountSecond = $pizzaAmountMedium * selectedValue;
    // pizzaAmount.textContent = ($pizzaAmountMedium * selectedValue).toFixed(2);
    pizzaAmount.textContent = pizzaAmountSecond.toFixed(2);
  }
  if (cheeseSelectPizza.options[2].selected === true) {
    let pizzaAmountThird = $pizzaAmountSmall * selectedValue;
    // pizzaAmount.textContent = ($pizzaAmountSmall * selectedValue).toFixed(2);
    pizzaAmount.textContent = pizzaAmountThird.toFixed(2);
  }
});



//this is the code for bacon pizza amount price change. it will give different prices acording to
//selection of pizza sizes and numbers of them. I have used jquery codes here. 

$(".chicken-bacon-add-to-order").change(function () {
  const $pizzaAmountChickenBaconMedium = 13.95;
  const $pizzaAmountChickenBaconSmall = 11.95;
  const $pizzaAmountChickenbaconLarge = 15.95;

  let baconSelectedValue;
  let baconSelectedPizza;
  $(".bacon-select-value").each(function () {
    baconSelectedValue = $(this)[0].value;
  });

  $(".bacon-select-pizza").each(function () {
    baconSelectedPizza = $(this)[0].value;
  });

  if (baconSelectedPizza === "large pizza")
    $(".bacon-pizza-amount")
      .text(
        parseFloat(baconSelectedValue) *
        parseFloat($pizzaAmountChickenbaconLarge)
      )
      .toFixed(2);
  if (baconSelectedPizza === "medium pizza")
    $(".bacon-pizza-amount")
      .text(
        parseFloat(baconSelectedValue) *
        parseFloat($pizzaAmountChickenBaconMedium)
      )
      .toFixed(2);
  if (baconSelectedPizza === "Small pizza")
    $(".bacon-pizza-amount")
      .text(
        parseFloat(baconSelectedValue) *
        parseFloat($pizzaAmountChickenBaconSmall)
      )
      .toFixed(2);
});

// this is about displaying both cheesa pizza and bacon pizza datas to shopping cart. it works once user clicks add to order button which
// is derived from summit-buttons at dom. 
//these are declared variables for dom elements.
 let selectPizzaSize;
 let selectPizzaValue;
 let orderdPizzaName;
 let orderedPizzaDetail;
var submitButtons = document.querySelectorAll(".pizza-submit-button");
var i = 0,
  length = submitButtons.length;
  // these are dom elements at top part of navbar. 
let itemCount = document.querySelector("#item-count");
let itemTotalAmount = document.querySelector(".item-total");
// let itemTotalAmountNumber = parseFloat(itemTotalAmount.textContent);
let numberOfselectedPizzas;
let amountOfSelectedPizzas;
for (i; i < length; i++) {
  if (document.addEventListener) {
    submitButtons[i].addEventListener("click", function (e) {
      e.preventDefault();

       orderedPizzaDetail = e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".pizza-detail").textContent;
       selectPizzaSize = e.target.parentElement.parentElement.querySelector(
        ".select-button"
      );
       selectPizzaValue =
        selectPizzaSize.options[selectPizzaSize.selectedIndex].text;
       orderdPizzaName =
        e.target.parentElement.parentElement.firstChild.nextSibling.textContent;
      // var selectedPizzas = e.target.parentElement.parentElement.querySelector('#select-value-cheese');
      var selectedPizzas = e.target.parentElement.parentElement.querySelector(
        ".pizzas-values"
      );
      numberOfselectedPizzas =
        selectedPizzas.options[selectedPizzas.selectedIndex].text;
      amountOfSelectedPizzas = e.target.parentElement.parentElement.querySelector(
        ".pizza-amount"
      );
      // this is jquery code for displayng data before it appears at shopping cart.
      $("#cart-info").attr(
        "title",
        numberOfselectedPizzas +
          " " +
          orderdPizzaName +
          "  added in shopping cart  "
      );
      $("#cart-info").attr("data-content", "Thank you for this order");

      $("#cart-info").popover("show");
      setTimeout(() => {
        $("#cart-info").popover("dispose");
      }, 2000);

// it uses two functions with all data for display in cart 
      getTotalForCart();
      getPizzaItemDataForDisplay();
    });
  } else {
    buttons[i].attachEvent("onclick", function () {
      // use buttons[i] to target clicked button
    });
  }
}

//this is the function for displaying total at cart on top 
function getTotalForCart() {
 
  const pizzaOrderedNumber = 1;
  let itemCountNumber = parseFloat(itemCount.textContent);
  //let itemCountNumberValue = itemCountNumber + parseInt(numberOfselectedPizzas);
  let itemCountNumberValue = itemCountNumber + pizzaOrderedNumber;
  itemCount.textContent = itemCountNumberValue;
  if (itemCountNumberValue > 0) {
    itemCount.style.color = "red";
    itemCount.style.border = "1px solid green";
    itemCount.style.borderRadius = "50%";
    itemCount.style.padding = "0 2px";
  }
  let itemTotalAmountNumber = parseFloat(itemTotalAmount.textContent);
  
  let itemTotalValue = (
    itemTotalAmountNumber + parseFloat(amountOfSelectedPizzas.textContent)
  ).toFixed(2); 

  getAllForDisplay(itemTotalValue);

  removeItem(itemTotalValue,itemCountNumberValue);
  
  if (itemTotalValue > 0) {
    itemTotalAmount.style.color = "red";
  }
 
 
}


// this is the function which takes one parameter and displays total amount including tax in shopping cart dispaly.
function getAllForDisplay(itemTotalValue){
  let totalDisplayAmount = document.querySelector(".total-display-amount");
  let subTotalAmount = document.querySelector(".subtotal-amount");
  let taxAmountTotal = document.querySelector(".tax-amount-total");

  taxAmountTotal.innerHTML = "";
  let taxAmountValue = Math.round(itemTotalValue * 0.06 * 100) / 100;
  taxAmountTotal.textContent = taxAmountValue;

  subTotalAmount.textContent = "";
  itemTotalAmount.textContent = parseFloat(itemTotalValue);
  subTotalAmount.textContent = itemTotalValue;

  totalDisplayAmount.innerHTML = "";
  let totaldiplayAmountValue = parseFloat(itemTotalValue) + parseFloat(taxAmountValue);
  totalDisplayAmount.textContent = totaldiplayAmountValue;
}
// this is element from dom which inserts the html texts through function once user clicks the add to order button
let orderDisplay = document.querySelector(".order-display");
//function to add htmlTexts.
function getPizzaItemDataForDisplay() {
  orderDisplay.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="row mx-auto display-main-section w-75 mt-3">
                            <div class="col-md-6">
                                <h3 class="display-order-name">${orderdPizzaName}</h3>
                                <h3 class="display-order-size">(${selectPizzaValue})</h3>
                                <p class="display-order-content">${orderedPizzaDetail}</p>
                            </div>
                            <div class="col-md-6 mx-auto w-100 price-item-remove mb-3">
                                <div class="display-ordered-item-price-here">
                                    <span class="dollar-sign">$</span><span class="display-ordered-item-price">${parseFloat(
                                      amountOfSelectedPizzas.textContent
                                    )}</span>
                                </div>
                                <div class="ordered-items py-3">
                                    <select class="py-2 ordered-item-numbers" >
                                        <option value="1">${numberOfselectedPizzas}</option>
                                        
                                    </select>
                                </div>
                                <div class="display-ordered-remove">
                                     <a href="" class="remove-item"> Remove</a>
    
                                </div>
                            </div>
                            <div class="solid-line mb-3"></div>
                        </div>`
  );
}

// $(".pizzaOne").on("click", function () {
//   window.location = "./orderPizza.html";
// });

// these are dom elements taken from dom. they are for purposes of hiding and showing on the screen.

let cartInfoButton = document.querySelector("#cart-info");
let orderSection = document.querySelector(".order-section");
let cartSection = document.querySelector(".cart-section");

let orderDisplayedOrderWrapper = document.querySelector(
  ".order-display-ordered-wrapper"
);




//this is the button of cart at top of navbar once user clicks it shows which to display and hide.
cartInfoButton.addEventListener("click", function handleClick(e) {
  e.preventDefault();
  orderSection.classList.add("notShow");
  if(cartSection.classList.contains('notShow')){
    cartSection.classList.remove('notShow');
  }
  if (!signIn.classList.contains("notShow")) {
    signIn.classList.add("notShow");
  }
  if (!signUp.classList.contains("notShow")) {
    signUp.classList.add("notShow");
  }
  
  if (parseFloat(itemCount.textContent) > 0) {
    orderDisplayedOrderWrapper.classList.remove("notShow");
    
  } else {
    if (!orderDisplayedOrderWrapper.classList.contains("notShow")) {
      orderDisplayedOrderWrapper.classList.add("notShow");
      
    }
    else{
    //it is showing item when there is 0 item and it allows user to show one time no matter how many times user click
      displayOneTime(cartSection);
      cartInfoButton.removeEventListener("click", handleClick);

    }
  }
});




function displayOneTime(cartSection){
 
    cartSection.insertAdjacentHTML(
      "afterbegin",
      `
    <div class=" order-display-not-ordered">
                    <div class="container order-display mx-auto">
                        <h3 class="text-center text-info my-5 px-2">My Order</h3>
                        <div class="col-12 mx-auto w-75">
                            <a href="" class="add-button add-more-food-button mb-3">add  Food</a>
                        </div>
                        <p class="text-center mb-3">There are not items in your order</p>
                        <div class ="row">
                           <div class="col-md-6"></div>
                           <div class="col-md-6 mx-auto">
                           
                            
                            <div class="row mx-auto mt-3">
                                <div class="col-lg-6 col-12 mb-sm-3 w-sm-50 enter-coupan-button" >
                                    <a href="#" class="add-button">Enter coupon</a>
                                </div>
                                <div class="col-lg-6 col-12 w-sm-50"> 
                                    <a href="#" class="add-button">Add</a>
                                </div>
                            </div>
                            <div class="hr my-3"><hr class="line"></div>
                            <div class="d-flex justify-content-between">
                                <h5 class="subtotal">Subtotal</h5>
                             <div>
                                    <span>$</span><span class="subtotal-amount">0.00</span>
                             </div>
                                
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5 class="tax">Tax</h5>
                                <div class="tax-amount-total">
                                    <span>$</span> <span class="tax-amount">0.00</span>
                                </div>

                            </div>
                            <div class="d-flex justify-content-between">
                                <h5>Total</h5>
                                <div class="total-display-amount-here">
                                    <span>$</span><span class="total-display-amount">0.00</span>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                </div> 
            `
    );


}
// this is the function which removes the displayed orderd item once user clicks  the remove button.

// this function takes two parameters . This function was used in all  sections.


function removeItem(itemTotalValue,itemCountNumberValue){

  orderDisplay.addEventListener('click',function(e){ 
    e.preventDefault();
    const removeItemCount = 1; 
    if(e.target.classList.contains('remove-item')){
    let removeItem = e.target.parentElement.parentElement.parentElement;
    let removedPrice= e.target.parentElement.parentElement.parentElement.querySelector('.display-ordered-item-price');
    // let removedPizzaCount = e.target.parentElement.parentElement.querySelector('.ordered-item-numbers');
    // let removedPizzaCountNum= parseInt(removedPizzaCount.options[removedPizzaCount.selectedIndex].text);

    itemCountNumberValue = itemCountNumberValue-removeItemCount;
    //itemCountNumberValue = itemCountNumberValue-removedPizzaCountNum;
    itemCount.textContent = itemCountNumberValue; 

    itemTotalValue = parseFloat(itemTotalValue)-parseFloat(removedPrice.textContent);
    getAllForDisplay((itemTotalValue).toFixed(2))

    itemTotalAmount.textContent = (itemTotalValue).toFixed(2);
    orderDisplay.removeChild(removeItem); 
   
    }
    
    })

}




//it will allow users to add more orders
let addMoreFoodButton = document.querySelectorAll('.add-more-food-button');

 addMoreFoodButton.forEach(function(button){
  button.addEventListener('click',function(e){
    e.preventDefault();
     cartSection.classList.add('notShow');
     orderSection.classList.remove('notShow');
    
    
    })
 
 })


 // it will take you to check out . first take you sign in form where you can do as a guest customer


 let checkOutButton = document.querySelectorAll('.check-out-button');
 let signIn = document.querySelector('.sign-in');

 checkOutButton.forEach(function(button){
  button.addEventListener('click',function(e){
    e.preventDefault();
    if(parseInt(itemTotalAmount.textContent)>0)
     cartSection.classList.add('notShow');
     signIn.classList.remove('notShow');
    
    
    })
 
 })

 //it will show signUp for as a guest customer to check out in signIn form

 let continueButton = document.querySelector('.continue-as-guest');
 let signUp = document.querySelector('.sign-up');

 
  continueButton.addEventListener('click',function(e){
    e.preventDefault();
     signIn.classList.add('notShow');
     signUp.classList.remove('notShow');
    
    
    })


    // it will show the cliked link in top of orderList as others will hide.
    
    var sections = document.querySelectorAll('.each-section');
    var imageOrderTop = document.querySelector('.image-for-order-top');
    for(var i= 0;i <sections.length;i++){
     var targetSection= sections[i]

     changeTopLink(targetSection);

    } 
//it takes one parameter and works for showing or hiding the other sections. 
function changeTopLink(targetSection){
var orderFood = document.querySelectorAll('.common-link');
  orderFood.forEach(function(button){
    button.addEventListener('click',function(e){
      
      e.preventDefault();
       
      if(e.target.classList.contains('wings-top')){
       if(targetSection.classList.contains('wings-section')){
         targetSection.classList.remove('notShow')
         imageOrderTop.classList.add('notShow')
       } else{
         targetSection.classList.add("notShow")
       }
     }
     if(e.target.classList.contains('pasta-top')){
      if(targetSection.classList.contains('pasta-section')){
        targetSection.classList.remove('notShow');
        imageOrderTop.classList.add('notShow')
      } else{
        targetSection.classList.add("notShow")
      }
    }
    if(e.target.classList.contains('drinks-top')){
      if(targetSection.classList.contains('drinks-section')){
        targetSection.classList.remove('notShow')
        imageOrderTop.classList.add('notShow');
      } else{
        targetSection.classList.add("notShow")
      }
    }
    if(e.target.classList.contains('deserts-top')){
      if(targetSection.classList.contains('deserts-section')){
        targetSection.classList.remove('notShow');
        imageOrderTop.classList.add('notShow');
      } else{
        targetSection.classList.add("notShow")
      }
    }
    if(e.target.classList.contains('pizza-top')){
      if(targetSection.classList.contains('pizza-section')){
        targetSection.classList.remove('notShow')
        imageOrderTop.classList.add('notShow');
      } else{
        targetSection.classList.add("notShow")
      }
    }
     })
  })


}

//go back button in signIn
 var goBack = document.querySelector('.go-back');
 goBack.addEventListener('click',function(){
   //window.history.back();
   cartSection.classList.remove('notShow');
  signIn.classList.add('notShow');
 })

 //go back button in signIn
 var goBackSignUp = document.querySelector('.go-back-signUp');
 goBackSignUp.addEventListener('click',function(){
   //window.history.back();
   $(".sign-up-modal").removeClass('notShow');

  
 })

 var cancelBackSignUp= document.querySelector('.cancel-back-sign-up');
 cancelBackSignUp.addEventListener('click',function(){
   console.log('ok')
  $(".sign-up-modal").addClass('notShow');
 })

 var goBackToSignIn = document.querySelector('.go-back-to-sign-in');
 goBackToSignIn.addEventListener('click',function (){
  $(".sign-up-modal").addClass('notShow');
  signIn.classList.remove('notShow');
  signUp.classList.add('notShow');
 })



//  it is about start of wings section. first , it would try to toggle between ordernow and addto order with different contents.
let wingSection = document.querySelector('.wings-section');
let bothNowContiner;
let bothOrderContainer;
let closeButton;
let bothNowButton;

wingSection.addEventListener('click',function(event){
  event.preventDefault();
 
  if(event.target.classList.contains('wings-both-now')){
    bothNowContiner = event.target.parentElement.parentElement;
    bothOrderContainer = event.target.parentElement.parentElement.parentElement.querySelector('.wing-add-to-order');
    bothNowContiner.classList.add('notShow');
    bothOrderContainer.classList.remove('notShow')
  }
  if(event.target.classList.contains('label')){
   bothNowContiner = event.target.parentElement.parentElement.parentElement.querySelector('.wing-order-now');
   bothOrderContainer = event.target.parentElement.parentElement;
   closeButton = bothNowContiner.querySelector('.close-button');
   bothNowButton = bothNowContiner.querySelector('.wings-both-now');
   bothOrderContainer.classList.add('notShow');
   bothNowContiner.classList.remove('notShow');
   closeButton.classList.remove('notShow');
   bothNowButton.classList.add('notShow');
}
if(event.target.classList.contains('close-button')){
  bothNowContiner= event.target.parentElement.parentElement;
  bothOrderContainer = event.target.parentElement.parentElement.parentElement.querySelector('.wing-add-to-order');
  bothNowContiner.classList.add('notShow');
  bothOrderContainer.classList.remove('notShow')
}
if(event.target.classList.contains('select-button')){
let selectWing = event.target;
let wingAmount = event.target.parentElement.parentElement.querySelector('.wing-amount');

  const sixPiecePrice = 13.98;
  const twelvePiecePrice = 21.98;
  const eighteenPiecePrice = 28.98;
  if(selectWing.options[1].selected==true){
    wingAmount.textContent = sixPiecePrice;
   }
   if(selectWing.options[2].selected==true){
    wingAmount.textContent = twelvePiecePrice;
   }
   if(selectWing.options[3].selected==true){
    wingAmount.textContent = eighteenPiecePrice;
   }
 }
 //it adds item to cart in top.
 if(event.target.classList.contains('add-to-order-tradion')){
  var orderedWingName = event.target.parentElement.parentElement.parentElement.querySelector('.tradition-wing').textContent;
  
  var selectedWings = event.target.parentElement.parentElement.querySelector(
    ".select-button"
  );
  
  var numberOfselectedWings =
    selectedWings.options[selectedWings.selectedIndex].text;
  var numberOfSelectedWingsValue = selectedWings.options[selectedWings.selectedIndex].value;
  var traditionWingAmount = event.target.parentElement.parentElement.parentElement.querySelector('.wing-amount');
  var valueOfTraditionAmount = parseFloat(traditionWingAmount.textContent);
  var orderedItemDetail = event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".tradition-detail").textContent;
  if(numberOfSelectedWingsValue<1){
    alert("select how many wings you want")
  }
  else{
    beforeItemsAddedInCart(numberOfselectedWings,orderedWingName);
    showItemsInCart(
      numberOfSelectedWingsValue,valueOfTraditionAmount
    );
    getAllItemDataForDisplay(orderedWingName,orderedItemDetail,traditionWingAmount,numberOfselectedWings)
  }
    
  }

//this is for second chicken wing bone.once user hits the add to order it triggers all action
  if(event.target.classList.contains('add-to-order-bone')){
  var orderedWingName = event.target.parentElement.parentElement.parentElement.querySelector('.bone-wing').textContent;
  
  var selectedWings = event.target.parentElement.parentElement.querySelector(
    ".select-button"
  );
  
  var numberOfselectedWings =
    selectedWings.options[selectedWings.selectedIndex].text;
  var numberOfSelectedWingsValue = selectedWings.options[selectedWings.selectedIndex].value;
  

  var boneWingAmount = event.target.parentElement.parentElement.parentElement.querySelector('.wing-amount-bone');
  var valueOfBoneAmount = parseFloat(boneWingAmount.textContent);
  var orderedItemDetail = event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".bone-detail").textContent;
   if(numberOfSelectedWingsValue<1 ){
     alert('select option for how many wings')
   }else{
    beforeItemsAddedInCart(numberOfselectedWings,orderedWingName);
    showItemsInCart(
      numberOfSelectedWingsValue,valueOfBoneAmount
    );
    getAllItemDataForDisplay(orderedWingName,orderedItemDetail,boneWingAmount,numberOfselectedWings)


   }
   
  }
});








function getAllItemDataForDisplay(itemName,itemDetail,amountOfSelectedItems,numberOfSelectedItems) {
  orderDisplay.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="row mx-auto display-main-section w-75 mt-3">
                            <div class="col-md-6">
                                <h3 class="display-order-name">${itemName}</h3>
                                <p class="display-order-content">${itemDetail}</p>
                            </div>
                            <div class="col-md-6 mx-auto w-100 price-item-remove mb-3">
                                <div class="display-ordered-item-price-here">
                                    <span class="dollar-sign">$</span><span class="display-ordered-item-price">${parseFloat(
                                      amountOfSelectedItems.textContent
                                    )}</span>
                                </div>
                                <div class="ordered-items py-3">
                                    <select class="py-2 ordered-item-numbers" >
                                        <option value="1">${numberOfSelectedItems}</option>
                                        
                                    </select>
                                </div>
                                <div class="display-ordered-remove">
                                     <a href="" class="remove-item"> Remove</a>
    
                                </div>
                            </div>
                            <div class="solid-line mb-3"></div>
                        </div>`
  );
}


//this is  the  function for information taken to carts on top of page before display;

function beforeItemsAddedInCart(numberOfselectedItems,orderdItemsName){
  $("#cart-info").attr(
    "title",
    numberOfselectedItems +
      " " +
      orderdItemsName +
      "  added in shopping cart  "
  );
  $("#cart-info").attr("data-content", "Thank you for this order");

  $("#cart-info").popover("show");
  setTimeout(() => {
    $("#cart-info").popover("dispose");
  }, 1000);

}
//this is the function for the displaying items list in shoping cart on top of navbar.
function showItemsInCart(numberOfselectedItems,amountOfSelectedItems){
  
  let itemCountNumber = parseFloat(itemCount.textContent);
  let itemCountNumberValue = itemCountNumber + parseInt(numberOfselectedItems);
  itemCount.textContent = itemCountNumberValue;

  if (itemCountNumberValue > 0) {
    itemCount.style.color = "red";
    itemCount.style.border = "1px solid green";
    itemCount.style.borderRadius = "50%";
    itemCount.style.padding = "0 2px";
  }
  let itemTotalAmountNumber = parseFloat(itemTotalAmount.textContent);
  console.log(itemTotalAmountNumber);
  
  let itemTotalValue = (
    itemTotalAmountNumber + amountOfSelectedItems
  ).toFixed(2); 
 itemTotalAmount.textContent = itemTotalValue;
  if (itemTotalValue > 0) {
    itemTotalAmount.style.color = "red";
  }
  getAllForDisplay(itemTotalValue);

  removeItem(itemTotalValue,itemCountNumberValue);

}


 //it is about start of pasta section. first , it would try to toggle between ordernow and addto order with different contents.
let pastaSection = document.querySelector('.pasta-section');
pastaSection.addEventListener('click', function(event){
 //event.preventDefault(); 
if(event.target.classList.contains('btn-pasta-now')){
  bothNowContiner = event.target.parentElement.parentElement;
  bothOrderContainer = event.target.parentElement.parentElement.parentElement.querySelector('.pasta-order');
  bothNowContiner.classList.add('notShow');
  bothOrderContainer.classList.remove('notShow')
}
if(event.target.classList.contains('label')){
  bothNowContiner = event.target.parentElement.parentElement.parentElement.querySelector('.pasta-now');
  bothOrderContainer = event.target.parentElement.parentElement;
  closeButton = bothNowContiner.querySelector('.close-button');
  bothNowButton = bothNowContiner.querySelector('.btn-pasta-now');
  bothOrderContainer.classList.add('notShow');
  bothNowContiner.classList.remove('notShow');
  closeButton.classList.remove('notShow');
  bothNowButton.classList.add('notShow');
}
if(event.target.classList.contains('close-button')){
  bothNowContiner= event.target.parentElement.parentElement;
  bothOrderContainer = event.target.parentElement.parentElement.parentElement.querySelector('.pasta-order');
  bothNowContiner.classList.add('notShow');
  bothOrderContainer.classList.remove('notShow')
}

//this will add the contents at shopping cart once user click add-to-order button
if(event.target.classList.contains('alfredo-pasta-order')){
  var orderedPastaName = event.target.parentElement.parentElement.firstChild.nextSibling.textContent;

 // var orderedPastaName = document.querySelector('.alfredo-pasta-name');
  var selectedPasta = event.target.parentElement.parentElement.querySelector(
    ".select-pasta"
  );
  
  var numberOfSelectedPasta =
    selectedPasta.options[selectedPasta.selectedIndex].text;
  var numberOfSelectedPastaValue = selectedPasta.options[selectedPasta.selectedIndex].value;
  var alfredoPastaAmount = event.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
   //var alfredoPastaAmount = event.target.parentElement.parentElement.parentElement.querySelector('.alfredo-pasta-amount');
   var orderedItemDetail = event.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent;
   
  

  var valueOfPastaAmount = parseFloat(alfredoPastaAmount.textContent);
    beforeItemsAddedInCart(numberOfSelectedPasta,orderedPastaName);
    showItemsInCart(
      numberOfSelectedPastaValue,valueOfPastaAmount
    );
    getAllItemDataForDisplay(orderedPastaName,orderedItemDetail,alfredoPastaAmount,numberOfSelectedPasta)

  }

  if(event.target.classList.contains('meaty-pasta-order')){
    
   // var meatyPastaName = event.target.parentElement.parentElement.parentElement.querySelector('.meaty-pasta-name').textContent;
    var meatyPastaName = event.target.parentElement.parentElement.firstChild.nextSibling.textContent;
    var selectedPasta = event.target.parentElement.parentElement.querySelector(
      ".select-pasta"
    );
    
    var numberOfSelectedPasta =
      selectedPasta.options[selectedPasta.selectedIndex].text;
    var numberOfSelectedPastaValue = selectedPasta.options[selectedPasta.selectedIndex].value;
  
    var meatyPastaAmount = event.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;

    var valueOfPastaAmount = parseFloat(meatyPastaAmount.textContent);
    
    orderedItemDetail = event.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent;
   
      beforeItemsAddedInCart(numberOfSelectedPasta,meatyPastaName);
      showItemsInCart(
        numberOfSelectedPastaValue,valueOfPastaAmount
      );
      getAllItemDataForDisplay(meatyPastaName,orderedItemDetail,meatyPastaAmount,numberOfSelectedPasta)

    }

})



pastaSection.addEventListener('change',function(){
  var pastaAmount = document.querySelector('.alfredo-pasta-amount')
  var pastaRadios = document.querySelector('.form-check-input');
  var numberOfPasta = document.querySelector('.select-pasta');

  var pastaAmountMeaty = document.querySelector('.meaty-pasta-amount')
  var pastaRadiosMeaty = document.querySelector('.meaty-form-check');
  var numberOfPastaMeaty = document.querySelector('.meaty-select-pasta');
  changeAmount(pastaAmount,pastaRadios,numberOfPasta);
  changeAmount(pastaAmountMeaty,pastaRadiosMeaty,numberOfPastaMeaty);
  

})

//this is the function which changes the amount according to selection.
function changeAmount(pastaAmount,pastaRadios,numberOfPasta){
  const breadStic = 13.98;
  const cheeseStic = 15.98;
  var opt;
  var selectedValue;
  for(var i= 0; i<numberOfPasta.options.length;i++){
    opt = numberOfPasta.options[i];
   if(opt.selected===true){

     selectedValue = parseInt(opt.textContent);
   }
  }
  if((pastaRadios.checked===true)&&(pastaRadios.value ==="option1")){
     var breadSticValue = (selectedValue*breadStic).toFixed(2);
   
     pastaAmount.textContent = breadSticValue;
  }else{
    var cheesticValue = (selectedValue*cheeseStic).toFixed(2);
    pastaAmount.textContent = cheesticValue;
  }
}






//  it is about start of deserts section. first , it would try to toggle between ordernow and addto order with different contents.
let desertsSection = document.querySelector('.deserts-section');
desertsSection.addEventListener('click', function(event){
  event.preventDefault(); 
  if(event.target.classList.contains('btn-deserts-now')){
    bothNowContiner = event.target.parentElement.parentElement;
    bothOrderContainer = event.target.parentElement.parentElement.parentElement.querySelector('.deserts-order');
    bothNowContiner.classList.add('notShow');
    bothOrderContainer.classList.remove('notShow')
  }
  if(event.target.classList.contains('label')){
    bothNowContiner = event.target.parentElement.parentElement.parentElement.querySelector('.deserts-now');
    bothOrderContainer = event.target.parentElement.parentElement;
    closeButton = bothNowContiner.querySelector('.close-button');
    bothNowButton = bothNowContiner.querySelector('.btn-deserts-now');
    bothOrderContainer.classList.add('notShow');
    bothNowContiner.classList.remove('notShow');
    closeButton.classList.remove('notShow');
    bothNowButton.classList.add('notShow');
  }
  if(event.target.classList.contains('close-button')){
    bothNowContiner= event.target.parentElement.parentElement;
    bothOrderContainer = event.target.parentElement.parentElement.parentElement.querySelector('.deserts-order');
    bothNowContiner.classList.add('notShow');
    bothOrderContainer.classList.remove('notShow')
  }
  if(event.target.classList.contains('cinn-deserts-order')){
    
     var cinnName = event.target.parentElement.parentElement.firstChild.nextSibling.textContent;
     var selectedCinn = event.target.parentElement.parentElement.querySelector(
       ".cinn-select-desert"
     );
     
     var numberOfSelectedCinn =
       selectedCinn.options[selectedCinn.selectedIndex].text;
     var numberOfSelectedCinnValue = selectedCinn.options[selectedCinn.selectedIndex].value;
   
     var cinnAmount = event.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
 
     var valueOfCinnAmount = parseFloat(cinnAmount.textContent);
     orderedItemDetail = event.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent;

       beforeItemsAddedInCart(numberOfSelectedCinn,cinnName);
       showItemsInCart(
         numberOfSelectedCinnValue,valueOfCinnAmount
       );
       getAllItemDataForDisplay(cinnName,orderedItemDetail,cinnAmount,numberOfSelectedCinn)

     }
     if(event.target.classList.contains('her-deserts-order')){
    
      var hersyName = event.target.parentElement.parentElement.firstChild.nextSibling.textContent;
      var selectedHersy = event.target.parentElement.parentElement.querySelector(
        ".her-select-deserts"
      );
      
      var numberOfSelectedHersy =
        selectedHersy.options[selectedHersy.selectedIndex].text;
      var numberOfSelectedHersyValue = selectedHersy.options[selectedHersy.selectedIndex].value;
    
      var hersyAmount = event.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
  
      var valueOfHersyAmount = parseFloat(hersyAmount.textContent);
      orderedItemDetail = event.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent;

        beforeItemsAddedInCart(numberOfSelectedHersy,hersyName);
        showItemsInCart(
          numberOfSelectedHersyValue,valueOfHersyAmount
        );
        getAllItemDataForDisplay(hersyName,orderedItemDetail,hersyAmount,numberOfSelectedHersy)

      }

})

desertsSection.addEventListener('change',function(){
var desertAmountCinn = document.querySelector('.cinn-desert-amount');
var numberOfDesertsCinn =document.querySelector('.cinn-select-desert');
changeDesertAmount(desertAmountCinn,numberOfDesertsCinn);

var desertAmountHer = document.querySelector('.her-desert-amount');
var numberOfDesertsHer =document.querySelector('.her-select-desert');
changeDesertAmount(desertAmountHer,numberOfDesertsHer);



})

function changeDesertAmount(desertAmount,numberOfDeserts){
  const desertPrice = 11.97;
  var opt;
  var selectedValue;
  for(var i= 0; i<numberOfDeserts.options.length;i++){
    opt = numberOfDeserts.options[i];
   if(opt.selected===true){

     selectedValue = parseInt(opt.textContent);
   }
  }
  var amountValue = (desertPrice*selectedValue).toFixed(2);
  desertAmount.textContent = amountValue;
}

//  it is about start of drinks section. first , it would try to toggle between ordernow and addto order with different contents.

let drinksSection = document.querySelector('.drinks-section');
drinksSection.addEventListener('click', function(event){
  event.preventDefault(); 
  if(event.target.classList.contains('btn-drinks-now')){
    bothNowContiner = event.target.parentElement.parentElement;
    bothOrderContainer = event.target.parentElement.parentElement.parentElement.querySelector('.drinks-order');
    bothNowContiner.classList.add('notShow');
    bothOrderContainer.classList.remove('notShow')
  }
  if(event.target.classList.contains('label')){
    bothNowContiner = event.target.parentElement.parentElement.parentElement.querySelector('.drinks-now');
    bothOrderContainer = event.target.parentElement.parentElement;
    closeButton = bothNowContiner.querySelector('.close-button');
    console.log(closeButton);
    bothNowButton = bothNowContiner.querySelector('.btn-drinks-now');
    bothOrderContainer.classList.add('notShow');
    bothNowContiner.classList.remove('notShow');
    closeButton.classList.remove('notShow');
    bothNowButton.classList.add('notShow');
  }
  if(event.target.classList.contains('close-button')){
    bothNowContiner= event.target.parentElement.parentElement;
    bothOrderContainer = event.target.parentElement.parentElement.parentElement.querySelector('.drinks-order');
    bothNowContiner.classList.add('notShow');
    bothOrderContainer.classList.remove('notShow')
  }
  if(event.target.classList.contains('pepsi-add-to-order')){
    
    var pepsiName = event.target.parentElement.parentElement.firstChild.nextSibling.textContent;
    var selectedPepsi = event.target.parentElement.parentElement.querySelector(
      ".select-pepsi-value"
    );
    
    var numberOfSelectedPepsi =
      selectedPepsi.options[selectedPepsi.selectedIndex].text;
    var numberOfSelectedPepsiValue = selectedPepsi.options[selectedPepsi.selectedIndex].value;
  
    var pepsiAmount = event.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;

    var valueOfPepsiAmount = parseFloat(pepsiAmount.textContent);
    orderedItemDetail = event.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent;
  
      beforeItemsAddedInCart(numberOfSelectedPepsi,pepsiName);
      showItemsInCart(
        numberOfSelectedPepsiValue,valueOfPepsiAmount
      );
      getAllItemDataForDisplay(pepsiName,orderedItemDetail,pepsiAmount,numberOfSelectedPepsi)

    }
    if(event.target.classList.contains('dew-add-to-order')){
    
      var dewName = event.target.parentElement.parentElement.firstChild.nextSibling.textContent;
      var selectedDew = event.target.parentElement.parentElement.querySelector(
        ".select-dew-value"
      );
      
      var numberOfSelectedDew =
        selectedDew.options[selectedDew.selectedIndex].text;
      var numberOfSelectedDewValue = selectedDew.options[selectedDew.selectedIndex].value;
    
      var dewAmount = event.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
  
      var valueOfDewAmount = parseFloat(dewAmount.textContent);
      orderedItemDetail = event.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent;

        beforeItemsAddedInCart(numberOfSelectedDew,dewName);
        showItemsInCart(
          numberOfSelectedDewValue,valueOfDewAmount
        );
        getAllItemDataForDisplay(dewName,orderedItemDetail,dewAmount,numberOfSelectedDew)

      }
  

})

drinksSection.addEventListener('change',function(){
var selectPepsiOz = document.querySelector('.select-pepsi-oz');
var selectPepsiValue = document.querySelector('.select-pepsi-value');
var pepsiAmount = document.querySelector('.pepsi-amount');
drinkChangeAmount(selectPepsiValue,selectPepsiOz,pepsiAmount);

var selectDewOz = document.querySelector('.select-dew-oz');
var selectDewValue = document.querySelector('.select-dew-value');
var dewAmount = document.querySelector('.dew-amount');
drinkChangeAmount(selectDewValue,selectDewOz,dewAmount);

})

function drinkChangeAmount(numberOfItems,typeOfItems,amount){
  const twelveOZ = 1.98;
  const sixteenOz = 2.19;
  const  eighteenOz = 2.29;
  var opt;
  var type;
  var selectedValue;
  var selectedOz;

  for(var i= 0; i<numberOfItems.options.length;i++){
    opt = numberOfItems.options[i];
   if(opt.selected===true){

     selectedValue = parseInt(opt.textContent);
   }
  }
  for(var i= 0; i<typeOfItems.options.length;i++){
    type = typeOfItems.options[i];
    
    if(type.selected===true){
      if(type.value==='option1'){
        selectedOz = twelveOZ
      } else if(type.value==='option2'){
        selectedOz = sixteenOz
      }
      else{
        selectedOz = eighteenOz;
      }
    }
  
  }
   
 amount.textContent = (selectedValue*selectedOz).toFixed(2);

  }

//this will hep to popover
  $(function () {
    $('[data-toggle="popover"]').popover()
  })


  // this is for signup section for timing option
  var hour = document.getElementById('hour');
  console.log(hour);
   var length =12;
   var createdOption;
  for(var i =1; i<= length;i++){
    if(i <10 ){
      i = '0'+i;
    }
  var createdOption = document.createElement('option');
   createdOption.innerHTML = i;
   hour.appendChild(createdOption)
  }
 
  var minute = document.getElementById('minute');
  console.log(minute);
   var length =60;
   var createdOption;
   var i;
  for( i =00; i< length;i += 15){
   
  var createdOption = document.createElement('option');
   createdOption.innerHTML = "00:" + i;
   minute.appendChild(createdOption)
  }


  var dayOfWeek = document.querySelector('.day-of-week');
  var date = new Date().toLocaleDateString();
  console.log(date)
  var createdOption = document.createElement('option');
  createdOption.innerHTML = date;
  dayOfWeek.appendChild(createdOption)



  //this is signup to hide or show the schedule-time later once user checks the schedule for later input
  var scheduleLater =  document.getElementById('schedule-later')
  scheduleLater.addEventListener('click',function(e){
    if($('#schedule-later').is(':checked')){
      setTimeout(() => {
        $(".scheduled-time").removeClass('notShow');
      }, 100);  
      //$(".scheduled-time").removeClass('notShow');
    }else{
      setTimeout(() => {
        $(".scheduled-time").addClass('notShow');
      }, 100);
      // $(".scheduled-time").addClass('notShow');
    }
  })

