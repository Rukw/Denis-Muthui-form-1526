//DECLARING VARIABLES
//Declare variables that will store references for 
//<input type="button" id="submit">,
//<input type="text" id="fullname">,
//<input type="text" id="email">
//<textarea id="message">

var submit = document.getElementById('submit');
var fullName = document.getElementById('full-name');
var email = document.getElementById('email');
var message = document.getElementById('message');

//Declare variable that will store regular expression for email
var emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//READY TO START CODING
//Start with your function here
function validateForm(event) {
    // Prevent the default button behavior
    event.preventDefault();
    
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS)
    // Declare object that will store the form-data
    var collectedData = {};
    // Declare array that will store the errors
    var errors = [];
    
    // FULL NAME
    // Check if fullname is not empty.
    if (fullName.value.trim() !== "") {
        // Pass the collected value
        // to your object "data".
        collectedData.fullName = fullName.value.trim();
    } else {
        // Create a corresponding error-message
        // and add it to your array "errors".
        errors.push("Full name is missing");
    }
    // End your conditional here.
    
    // EMAIL
    // Check if email is not empty.
    if (email.value.trim() !== "") {
        // Check if email is valid.
        if (emailRegEx.test(email.value.trim())) {
            // Pass the collected value
            // to your object "data".
            collectedData.email = email.value.trim();
        } else {
            // Create a corresponding error-message
            // and add it to your array "errors".
            errors.push("Please enter a valid email address");
        }
        // End your nested conditional here.
    } else {
        // Create a corresponding error-message
        // and add it to your array "errors"
        errors.push("Email is missing");
    }
    // End your outer conditional here.
    
    // MESSAGE
    // Check if message is not empty.
    if (message.value.trim() !== "") {
        // Pass the collected value
        // to your object "data".
        collectedData.message = message.value.trim();
    } else {
        // Create a corresponding error-message
        // and add it to your array "errors"
        errors.push("Message is missing");
    }
    // End your conditional here.
    
    // FEEDBACK/ERRORS
    // Check if there is anything in array errors
    if (errors.length > 0) {
        // Print it in JavaScript console.
        console.log("ERRORS:", errors);
    } else {
        // Print the data in JavaScript console.
        console.log("COLLECTED DATA:", collectedData);
        // Clear text-fields
        fullName.value = "";
        email.value = "";
        message.value = "";
    }
    // End your conditional here.
}
// Close your function here

// Register your form to "click" event.
submit.addEventListener('click', validateForm);