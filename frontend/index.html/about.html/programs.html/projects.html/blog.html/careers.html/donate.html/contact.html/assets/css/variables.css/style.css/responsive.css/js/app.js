/* =====================================================
 Hope South Sudan Foundation
 Main JavaScript
===================================================== */



// Sticky Navbar Effect


window.addEventListener(
"scroll",
function(){


const navbar =
document.querySelector(".navbar");


if(window.scrollY > 80){

navbar.classList.add("shadow");

}

else{

navbar.classList.remove("shadow");

}


});





// Animated Counters


const counters =
document.querySelectorAll(".counter");


counters.forEach(counter=>{


counter.innerText="0";


const updateCounter=()=>{


const target =
+counter.getAttribute("data-target")
|| +counter.innerText;


const current =
+counter.innerText;


const increment =
target / 200;



if(current < target){


counter.innerText =
Math.ceil(current + increment);


setTimeout(updateCounter,20);


}

else{


counter.innerText =
target;


}


};


updateCounter();


});





// Newsletter Validation


const newsletterForm =
document.querySelector(".newsletter form");


if(newsletterForm){


newsletterForm.addEventListener(
"submit",
function(e){


e.preventDefault();


alert(
"Thank you for subscribing!"
);


});


}





// Mobile Menu Close


const links =
document.querySelectorAll(".nav-link");


links.forEach(link=>{


link.addEventListener(
"click",
()=>{


const menu =
document.querySelector(".navbar-collapse");


if(menu.classList.contains("show")){


menu.classList.remove("show");


}


});


});
