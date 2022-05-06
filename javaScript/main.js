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