

// first name validation code

let first_name = document.getElementById("fname_id");
let fname_regex = /^[A-Za-z]+$/;
let fname_error = document.getElementById("fnme_rule2");
let fname_sucess = document.getElementById("fnme_rule3");
let firstName;

 
first_name.addEventListener("keyup",f_name_validation);

function f_name_validation(){
  firstName = first_name.value;

  if(firstName.match(fname_regex)){

  }
  else{
      fname_error.style.display = "block";
  }

}

// last name validation code

let last_name = document.getElementById("lname_id");
let lname_regex = /^[A-Za-z]+$/;
let lname_error = document.getElementById("lnme_rule");
let lastName

last_name.addEventListener("keyup",l_name_validation);

 function l_name_validation(){
    lastName = last_name.value;

     if(lastName.match(lname_regex)){

   }
     else{
       lname_error.style.display = "block";
 }

}

// email validation code

let emaill = document.getElementById("email_id");  
let EmailError = document.getElementById("email_error");
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let email_value;


emaill.addEventListener("keyup",validateEmail);

 function validateEmail(){
  email_value = emaill.value;
  let check = email_value.match(emailRegex);

 if(check){ 

}

else{
   EmailError.style.display = "block";

}

}

// username name validation code



let username = document.getElementById("username_id");  
let UserNameError = document.getElementById("username_error");
let userNameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
let username_value


username.addEventListener("keyup",validateUserName);

 function validateUserName(){
 username_value = username.value;


 if(username_value.match(userNameRegex)){ 

}

else{
  UserNameError.style.display = "block";

}

return false;
}



// password validation code

let password = document.getElementById("p1");
let pasword_error = document.getElementById("paswd_error");
let password_regex = /^[A-Za-z]\w{7,14}$/;
let password_value;

password.addEventListener("keyup",verifyPassword);

function verifyPassword(){
password_value = password.value;

if(!password_value.match(password_regex)){
    pasword_error.innerHTML = "Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]";
    pasword_error.style.display = "block";
}

if(password == ""){
    pasword_error.innerHTML = "Fill the password please!";
    pasword_error.style.display = "block";
}
else{
    
}

return password_value;
}


// confirm password validation code

let confirm_password = document.getElementById("p2");
let confirm_error = document.getElementById("confirm_paswd_error");
let  confirm_password_value;


confirm_password.addEventListener("keyup",CheckPassword)

function CheckPassword(){

  
    password_value = password.value;

    confirm_password_value = confirm_password.value;

    if(!password_value.match(confirm_password_value)){
       confirm_error.innerHTML = "'Wrong...!'"
       console.log("not match");
    }
    else{
        console.log("sucess");
       
        
    }
    
}

// gender validation code

// let genderMale = document.getElementById("male1");
// let genderFemale = document.getElementById("female1");
// let genderError = document.getElementById("gender_error");
// let submit = document.getElementById("submit_id");

// submit.addEventListener("click",genderValidation)

// function genderValidation(event){
//     event.preventDefault();
//     const male = genderMale.value;
//     const female = genderFemale.value;
//     console.log(male);
//     console.log(female);

//     if(male.checked==false || female.checked==false)
//     {
//         genderError.innerHTML = "You must select male or female";
//         console.log("gender clicked");
        
//     }
//     else{
//         console.log("sucess");
//     }
       

// }


// dob validation code

let dob_regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/ ;

let dob = document.getElementById("dob_id");
let DobError = document.getElementById("dob_error");
let dob_value;
let birth;
let birth_year;
let present_date;
let present_month;
let present_year;
let present_dob;
let age;

dob.addEventListener("change",validateDate);


function validateDate(){
   dob_value = dob.value;
   console.log(dob_value);
  
   birth = new Date(dob_value);
   birth_year = birth.getFullYear();
   console.log(`birth year is ${birth_year}`);
   present_dob = new Date();

   present_date = present_dob.getDate();
   present_month = present_dob.getMonth()+1; 
   present_year = present_dob.getFullYear();
  
   console.log(`present year is ${present_year}`);

       if(present_date<10) 
      {
        present_date='0'+present_date;
      } 

     if(present_month<10) 
     {
      present_month='0'+present_month;
     } 
  
     present_date = present_year + '-'+ present_month + '-' + present_date;
     console.log(`present date is ${present_date}`);

     age = present_year - birth_year;
     console.log(`age is ${age}`);

   
  
    if(!dob_value.match(dob_regex) || dob_value == " " ){

    console.log("error format");
    DobError.innerHTML = "Please Enter Valid Formmat"
   }

   if (age<18){
     console.log("Age should be more than 18 years");
     DobError.innerHTML = "Age should be more than 18 years"
   }

   else{

    console.log("sucess ghfjfj");
   }
}


let submit_buton = document.getElementById("submit_id");
let FormError = document.getElementById("form_error");

submit_buton.addEventListener("click",formValidation);

function formValidation(event){
  event.preventDefault();

 

  if(firstName == " " || firstName == null || lastName == " " || lastName == null || email_value == " " || email_value == null || username_value == " " || username_value == null || password_value == " " || password_value == null || confirm_password_value == " " || confirm_password_value == null || dob_value == " " || dob_value == null) {

    FormError.innerHTML = "please provide all fields";
    console.log("gdhsfjsdhfjjjjjjjjjjjjj")

  }

}