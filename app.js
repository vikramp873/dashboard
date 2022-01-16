let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
   sidebar.classList.toggle("open");
   menuBtnChange(); 
});

searchBtn.addEventListener("click", () => {
   
   sidebar.classList.toggle("open");
   menuBtnChange(); 
});


function menuBtnChange() {
   if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); 
   } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); 
   }
}


let firstName = document.querySelector("#username");
let lastName = document.querySelector("#lastname");
let number = document.querySelector("#number");
let gender = document.querySelector("#gender");
let date = document.querySelector("#date");
let submit = document.querySelector("#submit");


submit.addEventListener('click', (e) => {
   e.preventDefault()

   if (firstName.value.trim() === "") {
      alert('please enter your first name')
      return false
   }

   else if (lastName.value.trim() === "") {
      alert('please enter your last name');
      return false
   }

   else if (number.value === "" || number.value === null) {
      alert('please enter your number');
      return false
   }
   else if (number.value.length < 10 || number.value.length > 10) {
      alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
      return false;
   }

   else if (gender.checked === false || gender.checked === false) {
      alert('please select gender')
      return false
   }

   else if (date.value === "") {
      alert('please select date')
      return false

   }

   else {
      alert('Thank you')
      firstName.value = ""
      lastName.value = ""
      lastName.value = ""
      number.value = ""
      gender.checked = ""
      date.value = ""
      return true


   }

})
