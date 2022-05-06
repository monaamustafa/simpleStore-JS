// var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$/;

var mobileRegex = new RegExp('[0][1][012][0-9]{8}');
var errorSection=document.querySelector('.errorSection');
var el = document.createElement("p");


document.querySelector('.closeError').addEventListener("click",()=>{
    errorSection.style.display="none";
})


function validate() {
    if (document.myForm.Name.value == ""|| isFinite(document.myForm.Name.value)) {
        document.myForm.Name.style.borderColor = "red";
        el.innerHTML = ` Please provide your name!  `;
        errorSection.appendChild(el);
        errorSection.style.display="block";
        document.myForm.Name.focus();
        throw "Please provide your name";
        return false;
    }
    if (document.myForm.EMail.value == "" || !document.myForm.EMail.value.match(validRegex)) {
        // document.myForm.input.style.borderColor = "green";
        
        document.myForm.EMail.style.borderColor = "red";
        
        el.innerHTML = ` Please provide your Email! 
        <br>EX: abc@xyz.co `;
        errorSection.appendChild(el);
        errorSection.style.display="block";
        document.myForm.EMail.focus();
        throw "Please provide your Email";
        return false;
    }
    if (document.myForm.phone.value == ""|| document.myForm.phone.value.length!=11 || !mobileRegex.test(document.myForm.phone.value) || ! isFinite(document.myForm.phone.value) ) {
        document.myForm.phone.style.borderColor = "red";
        el.innerHTML = ` Please provide your phone number <br>
        - must be 11 number <br>
        - must start with 011 | 012 | 010 `;
        errorSection.appendChild(el);
        errorSection.style.display="block";
        document.myForm.phone.focus();
        throw "Please provide your phone number ";
        return false;
    }
    return (true);
}

document.myForm.onsubmit = function (e) {
    e.preventDefault();
    if (validate()) {   
        console.log("Done ");
        document.myForm.style.display="none";
        document.querySelector('.verificationsBox').style.display="block";

    }
}