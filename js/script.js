const menuToggle = document.querySelector('.menu-toggle');
//this code is about menu toggle. it basically does hiding and showing the contents on the screen.
// once you click it.
menuToggle.addEventListener('click',()=>{
menuToggle.classList.toggle('active');

if(menuToggle.classList.contains('active')){
    document.querySelector('.business-name').classList.add('notShow');
    document.querySelector('.menu-button').classList.add('notShow');
    document.querySelector('.middle-section-home-wrapper').classList.add('notShow');
   document.querySelector('.toggle-wrapper').classList.remove('notShow');
   if(!document.querySelector('.middle-section-about-wrapper').classList.contains('notShow')){
    document.querySelector('.middle-section-about-wrapper').classList.add('notShow')
   }
   if(!document.querySelector('.google-address').classList.contains('notShow')){
    document.querySelector('.google-address').classList.add('notShow')
   }
}else{
    document.querySelector('.business-name').classList.remove('notShow');
    document.querySelector('.menu-button').classList.remove('notShow');
    document.querySelector('.middle-section-home-wrapper').classList.remove('notShow');
    document.querySelector('.toggle-wrapper').classList.add('notShow')
}
});
const togglerhomeButton = document.querySelector('.name-link');
togglerhomeButton.addEventListener('click',function(){
    menuToggle.classList.remove('active');
    document.querySelector('.business-name').classList.remove('notShow');
    document.querySelector('.menu-button').classList.remove('notShow');
    document.querySelector('.middle-section-home-wrapper').classList.remove('notShow');
})

const toggleAboutButton = document.querySelector('.home-link-about');
toggleAboutButton.addEventListener('click',function(){
    menuToggle.classList.remove('active');
    document.querySelector('.toggle-wrapper').classList.add('notShow')
    document.querySelector('.business-name').classList.remove('notShow');
    document.querySelector('.menu-button').classList.remove('notShow');
    document.querySelector('.middle-section-about-wrapper').classList.remove('notShow')
})


const togglerAddressbutton = document.querySelector('.name-link-address');
togglerAddressbutton.addEventListener('click' ,()=>{
menuToggle.classList.remove('active');
document.querySelector('.toggle-wrapper').classList.add('notShow');
document.querySelector('.business-name').classList.remove('notShow');
 document.querySelector('.menu-button').classList.remove('notShow');
 document.querySelector('.google-address').classList.remove('notShow')
})


// it will redirect the new page once clicked.

$(".order-pickup-button").on('click', function(){
    window.location = "./allmenuitems.html";    
});
$(".order-delivery-button").on('click', function(){
    window.location = "./allmenuitems.html";    
});


// this is for map 

function initMap() {
    var myLocation ={lat:39.310842, lng:-76.749990};
    var myProp ={
        center:myLocation,
        zoom:5
    }
   
    var map = new google.maps.Map(document.getElementById('map'),myProp);
    // var marker = new google.maps.Marker({position: myLocation,
    //     animation:google.maps.Animation.BOUNCE});
    var marker = new google.maps.Marker({
        position:myLocation,
        // icon: document.querySelector('.fa-thumbtack')
      });

    marker.setMap(map);
   
}
    
$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });


  