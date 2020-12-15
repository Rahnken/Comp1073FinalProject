/**
 *
 *  This page uses functions to validate if each field in the form is
 *  correctly filled. Custom error messages are returned if not.
 *
 * @author Lani Low
 *
 */

/**
 * Checks is all fields are valid
 * @returns {boolean}
 */
function validateForm()
{
    firstNameValidation();
    lastNameValidation();
    usernameValidation();
    passwordValidation();
    emailValidation();

    return  firstNameValidation() === true &&
            lastNameValidation() === true &&
            usernameValidation() === true &&
            passwordValidation() === true &&
            emailValidation() === true;
}

/**
 * Creates error messages to explain errors to users
 *
 * @returns {boolean}
 */
function firstNameValidation() {
    let fname = document.forms["registrationForm"]["fname"].value;

    if (fname === "") {
        document.getElementById("fname_error_text").innerHTML = "First name must be filled out";
        return false;
    }
    else {
        document.getElementById("fname_error_text").innerHTML = "Your first name is "+  fname;
        return false;
    }
}

function lastNameValidation() {
    let lname = document.forms["registrationForm"]["lname"].value;

    if (lname === "") {
        document.getElementById("lname_error_text").innerHTML = "Last name must be filled out";
        return false;
    }
    else {
        document.getElementById("lname_error_text").innerHTML = "Your last name is " + lname;
        return false;
    }
}

function usernameValidation() {
    let username = document.forms["registrationForm"]["username"].value;

    if (username === "") {
        document.getElementById("username_error_text").innerHTML = "Username must be filled out";
        return false;
    }
    else if (username.length < 3)
    {
        document.getElementById("username_error_text").innerHTML = "Username has to be greater than 3 characters";
        return false;
    }
    else
    {
        document.getElementById("username_error_text").innerHTML = "Your username is " + username;
        console.log("Meme" + username);
        return false;
    }
}

function passwordValidation() {
    let password = document.forms["registrationForm"]["password"].value;

    if (password === "") {
        document.getElementById("password_error_text").innerHTML = "Password must be filled out";
        return false;
    }
    else {
        document.getElementById("password_error_text").innerHTML = "Your password is " + password;
        return false;
    }
}

function emailValidation() {
    let email = document.forms["registrationForm"]["email"].value;

    if (email === "") {
        document.getElementById("email_error_text").innerHTML = "Email must be filled out";
        return false;
    }
    else {
        document.getElementById("email_error_text").innerHTML = "Your email is " + email;
        return false;
    }
}