var allItems= document.querySelectorAll(".items");

document.querySelector("#food").addEventListener("click",()=>{
    showItems("food");
  }
);
document.querySelector("#clothes").addEventListener("click",()=>{
    showItems("clothes");
  }
);
document.querySelector("#electronics").addEventListener("click",function (){
    showItems("electronics");
});
document.querySelector("#all").addEventListener("click",()=>{
    showItems("items");
  }
);

var showItems=function(className){
    allItems.forEach(element => {
        if(element.classList.contains(className))
            element.style.display="block";
        else
            element.style.display="none";
    });

}
let bodyScroll = document.querySelector('html, body');
let iconScroll = document.querySelector('.scroll-top');
let navbar = document.querySelector('nav');
// console.log(navbar);
window.addEventListener('scroll', function () {
    if (bodyScroll.scrollTop >= 40) {
        iconScroll.style.display = 'block';
        navbar.classList.add('nav-bg');
    } else {
        iconScroll.style.display = 'none';
        navbar.classList.remove('nav-bg');
    }
})
// scroll to top 
iconScroll.addEventListener('click', function () {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});
var count=0;
var itemsNum =document.querySelector('.itemsNum');
var addItems =document.querySelectorAll('.addBtn');
addItems.forEach(element => {
    element.addEventListener("click",()=>{
        // console.log("hi")   ;
count++;
itemsNum.innerHTML=count;
    })
});