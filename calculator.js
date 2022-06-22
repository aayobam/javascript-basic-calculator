//end of program (4)
function end(){

    let response = prompt("Do you want to continue? type Y for yes or N for No: ").toLowerCase()

    if (response == "yes".toLowerCase() || response == "y".toLowerCase()){
        main();
    }

    else if (response == "no" || response == "n"){
        alert("Thanks for using this app, goodbye...".toUpperCase())
        exit();
    }

    else{
        alert("Invalid response, please try again.\n")
        end();
    };   
}


// performs addition operation
function addition(){
    let firstnum = parseFloat(prompt("enter first number: ".toUpperCase()))
    let secondnum = parseFloat(prompt("enter second number: ".toUpperCase()))
    let result = firstnum + secondnum;
    alert("Result = " + result);
    end();
};


// performs subtraction operation
function subtraction(){
    let firstnum = parseFloat(prompt("enter first number: ".toUpperCase()))
    let secondnum = parseFloat(prompt("enter second number: ".toUpperCase()))
    let result = firstnum - secondnum
    alert("Result = " + result)
    end()
};


// performs divition operation
function division(){
    let firstnum = parseFloat(prompt("enter first number: ".toUpperCase()))
    let secondnum = parseFloat(prompt("enter second number: ".toUpperCase()))
    let result = firstnum / secondnum;
    alert("Result = " + result)
    end();
};


// performs multiplication operation
function multiplication(){
    let firstnum = parseFloat(prompt("enter first number: ".toUpperCase()))
    let secondnum = parseFloat(prompt("enter second number: ".toUpperCase()))
    let result = firstnum + secondnum;
    alert("Result = " + result)
    end();
};


// performs modulus operation
function modulo(){
    let firstnum = parseFloat(prompt("enter first number: ".toUpperCase()))
    let secondnum = parseFloat(prompt("enter second number: ".toUpperCase()))
    let result = firstnum % secondnum;
    alert("Result = " + result)
    end();
};


// exits or terminates program
function exitOperation(){
    alert("thanks for using this app, goodbye...".toUpperCase());
    exit();
};


// program main (2)
function main(){
    selection = prompt("[1] - ADDITION\n[2] - SUBTRACTION\n[3] - DIVISION\n[4] - MULTIPLICATION\n[5] - MODULO\n[6] - EXIT\ntype between 1 to 6 to select operation".toUpperCase())
    switch(selection){
        case "1":
            addition();
            break;
            
        case "2":
            subtraction();
            break;

        case "3":
            division();
            break;

        case "4":
            multiplication();
            break;

        case "5":
            modulo();
            break;

        case "6":
            exitOperation();
            break;

        default:
            alert("INVALID INPUT PROVIDED, PLEASE TRY AGAIN")
            main()
            break;
    };
};

// program starting point (1)
function startApp(){
    alert("WELCOME TO SIMPLE BASIC JAVASCRIPT CALCULATOR")
    main();
};
startApp()
