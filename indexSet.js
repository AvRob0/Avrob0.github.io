function runInfo() {//the function that logs the name when submit is clicked
    var firstName = document.getElementById("fName").value;//variable for first name to take from input box 1 and get the value/how many letters being used
    var lastName = document.getElementById("lName").value;//variable for last name input box geting how many values being used/ how many letters being used
    var fullName = firstName + " " + lastName;//variable fullname takes the first to variables and adds them to make sure it fits the criteria of the name lenght
    if (fullName.length > 20 || fullName.length < 3){//criteria for the full name length cant be more than 20 or less than 3
        document.getElementById("status").innerHTML = "Invalid Entry Please Redo";//when incorrect the statement with write invalid
    }
    else {
        alert("Acces Granted, Welcome To The Future " + fullName + "!");//when everything works alert pops up and shows the message you see
        location.replace("loop.for.html");// replace location used for when acces granted takes user to the next page you see
    }
}