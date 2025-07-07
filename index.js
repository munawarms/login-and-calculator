// fuction assinment 
 function login() {
    let username=prompt("Enter your gmail");
    let password =prompt("Enter your password");

    if (username =="zeeshanali@gmail.com") {
         alert("login successfully")
        return true;
    
    }
    else if (password=="test1234") {
          alert("login successfully")
        return true;
      
    }
    else{
        alert("inviled username and password")
    }
        
    }
    login();

    //make calculator through function
    
     function sum(num1,num2) {
    return num1+num2;
}

function mul(num1,num2) {
    return num2 * num2;
}

function divide(num1,num2) {
    return num2 != 0 ? num1 / num2: "cannot divide by zero";
}

function subtract(num1,num2) {
    return num1 - num2;
}

function power(num1,num2) {
    return num1 ** num2
}

function percentage(num1,num2) {
    return (num1 / num2) * 100;
}

function startCalculator() {
    while (true) {
        let choice = prompt(
            "Choose operation:\n1. Sum\n2. Multiply\n3. Divide\n4. Subtract\n5. Power\n6. Percentage\n7. Exit"
        );

        if (choice == 7) {
            alert("Program Terminated");
            break;
        }

        let num1 = +prompt("Enter first number:");
        let num2 = +prompt("Enter second number:");
        let result;

        if (choice == 1) {
            result = sum(num1, num2);
            alert(result);
        } else if (choice == 2) {
            result = mul(num1, num2);
             alert(result);
        } else if (choice == 3) {
            result = divide(num1, num2);
             alert(result);
        } else if (choice == 4) {
            result = subtract(num1, num2);
             alert(result);
        } else if (choice == 5) {
            result = power(num1, num2);
             alert(result);
        } else if (choice == 6) {
            result = percentage(num1, num2);
             alert(result);
        } else {
            alert("Invalid choice! Please enter a number from 1 to 7.");
        }
    }
}
 startCalculator();


