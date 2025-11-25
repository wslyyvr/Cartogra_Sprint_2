// On page reload, reset all form fields to their initial state
window.addEventListener("load", function() {
    // reset form
    const theForm = document.querySelector(".travel-info__collection");
    theForm.reset();
    addDestination();

  })

// Populate the dropdown with options; no return value
function addDestination (){

  let destination=["Amalfi Coast","Bora Bora","Costa Rica",
                    "Kyoto","Maldives","Nepal (Himalayas)",
                    "Paris","Patagonia","Queenstown","Reykjavík",
                    "Seychelles","Tanzania (Kilimanjaro)","Tuscany","Whistler"];

  for (let i=0; i<destination.length; i++){
    let optionTag=document.createElement("option");
    optionTag.value=destination[i]
    optionTag.style.fontFamily = "Albert Sans";
    optionTag.style.fontWeight = "500";
    optionTag.style.fontStyle = "normal";
    optionTag.style.fontSize = "14px";
    optionTag.style.lineHeight = "140%";
    optionTag.style.letterSpacing = "-1%";
    optionTag.textContent = destination[i];
    document.getElementById("travel-info__collection__getDestination").appendChild(optionTag);
  }

}

// funcation cheeck phone number highlight red if non-numeric or less than 10 digits; 
//return true if valid.

function checkPhone(value){
  const checkValue = Number(value); 
  if (isNaN(checkValue) || value.length != 10) {
    document.getElementById("travel-info__collection__getPhone").style.border = "2px solid red";
  }
  else{
    document.getElementById("travel-info__collection__getPhone").style.border = "1px solid #FFFFFF";
    return true;
  }
}

// Add an event listener(input type) to validate the phone number in real time 
//by calling checkPhone(value) on each input

const phoneInput = document.getElementById("travel-info__collection__getPhone");
phoneInput.addEventListener("input", function () {
  checkPhone(phoneInput.value)
})


// Disable default form submission triggered by pressing the Enter key
const form = document.querySelector(".travel-info__collection");

form.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the form from being submitted on Enter key press
    return false;
  }
});




// Listen for submit button click to validate and submit the form
document.querySelector(".travel-info__collection").addEventListener("submit", function(event){
  // Prevent the form from being submitted on Enter key press
  event.preventDefault()
  // Verify whether all input fields have been completed（space=6 就是满的）
  let space=0;
  // Check if the first name field is empty; if so, highlight the input box in red
  let firstName=document.getElementById("travel-info__collection__getFirstName");

      if (firstName.value.trim() === "") {
            firstName.style.border = "2px solid red";
          }
      else{
         firstName.style.border = "1px solid #FFFFFF";
          space++;
      }
  // Check if the last name field is empty; if so, highlight the input box in red
  let lastName=document.getElementById("travel-info__collection__getLastName");
      if (lastName.value.trim() === "") {
          lastName.style.border = "2px solid red";
        }
      else{
          lastName.style.border = "1px solid #FFFFFF";
          space++;
      }
  // Check if the email include @; if not, highlight the input box in red
  let email=document.getElementById("travel-info__collection__getEmail");
       if (email.value === ""|| !email.value.includes("@")) {
            email.style.border = "2px solid red";
          }
        else{
          email.style.border = "1px solid #FFFFFF";
          space++;
       }
  // Check if the phone number is not empty and if checkPhone() returns true; 
  //if not, highlight the input box in red
  let phone=document.getElementById("travel-info__collection__getPhone");
        if (phone.value === "" || checkPhone(phone.value) != true) {
            phone.style.border = "2px solid red";
          }
          else{
          phone.style.border = "1px solid #FFFFFF";
          space++;
          }
  // Handle the first destination input
  let destination=document.getElementById("travel-info__collection__getDestination");
        if (destination.value  != "") {
          space++;
          }
    
  // Check if the declaration checkbox is selected 
  let getAgree=document.getElementById("travel-info__collection__getCheck");
        if (getAgree.checked != true) {
          document.querySelector(".checkmark").style.border = "2px solid red";
          }
        else{
         document.querySelector(".checkmark").style.border = "1px solid #FFFFFF";
          space++;
        }
  // If all required fields are filled, wait 2s then go to the confirmation page; otherwise, prevent navigation and mark empty fields


  if (space===6)
  {
     // location.reload();

    document.querySelector(".travel-info__collection").reset();
    setTimeout(() => {
        window.location.replace( "submitConfirm.html");
    }, 2000); 
     
  }


  let travelerInfo = [{ "First Name": firstName.value },{ "Last Name": lastName.value },
                      { "Email": email.value },{ "Phone": phone.value },
                      { "Destination": destination.value },{ "Agreed": getAgree.checked }];

   console.log(travelerInfo);
   return travelerInfo;                 
})




