let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
   sidebar.classList.toggle("open");
   menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
   // Sidebar open when you click on the search iocn
   sidebar.classList.toggle("open");
   menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
   if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
   } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
   }
}


// Tutorial - https://youtu.be/VufN46OyFng

// Targetting all classes & id from HTML

// let id = (id) => document.getElementById(id);

// let classes = (classes) => document.getElementsByClassName(classes);

// let username = id("username"),
//    email = id("email"),
//    number = id("number"),
//    date = id("date"),
//    form = id("form"),
//    gender = id("gender"),
//    errorMsg = classes("error"),
//    successIcon = classes("success-icon"),
//    failureIcon = classes("failure-icon");

// // Adding the submit event Listener

// form.addEventListener("submit", (e) => {
//    e.preventDefault();

//    engine(username, 0, "Username cannot be blank");
//    engine(email, 1, "Email cannot be blank");
//    engine(number, 2, "Number cannot be blank");
//    engine(date, 3, "date cannot be blank");
//    engine(gender, 4, "date cannot be blank");
// });

// // engine function which will do all the works

// let engine = (id, serial, message) => {
//    if (id.value.trim() === "") {
//       errorMsg[serial].innerHTML = message;
//       id.style.border = "2px solid red";


//       // icons
//       failureIcon[serial].style.opacity = "1";
//       successIcon[serial].style.opacity = "0";
//    }
//    else {
//       errorMsg[serial].innerHTML = "";
//       id.style.border = "2px solid green";


//       // icons
//       failureIcon[serial].style.opacity = "0";
//       successIcon[serial].style.opacity = "1";

//    }
// };

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

function myFunction(e) {
   if (document.querySelector('#navList a.active') !== null) {
      document.querySelector('#navList a.active').classList.remove('active');
   }
   e.target.className = "active";
}
