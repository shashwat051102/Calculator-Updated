// $(document).ready(function(){
//     $(document).on("click", ".num", function(){
//         var number = $(this).val();
//         $(".display").text(number)
//     })
// })

// $(document).keypress(function(event){
//     $(".display").text(event.key)
// })


$(document).ready(function () {
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    updateScreen(result);
    $(".num").on("click", function (evt) {
        var buttonPressed = $(this).html();
        console.log(buttonPressed);

        if (buttonPressed === "C") {
            result = 0;
            currentEntry = "0";
            operation = null;


        } else if (buttonPressed === "CE") {
            currentEntry = "0"

        } else if (buttonPressed === "Back") {
            currentEntry = currentEntry.substring(0, currentEntry.length - 1);

        } else if (buttonPressed === ".") {
            currentEntry += ".";
        } else if (isNumber(buttonPressed)) {
            if (currentEntry === "0" || currentEntry === " ") currentEntry = buttonPressed;
            else currentEntry = currentEntry + buttonPressed;

        } else if (isOperator(buttonPressed)) {
            if (operation !== null) {
                currentEntry = operate(prevEntry, currentEntry, operation).toString();
                prevEntry = parseFloat(currentEntry);
            }
            else {
                prevEntry = parseFloat(currentEntry);
            }
            currentEntry = "";
            operation = buttonPressed;
        } else if (buttonPressed === "sqrt") {
            var inputNumber = parseFloat(currentEntry);

            if (!isNaN(inputNumber) && inputNumber >= 0) {
                currentEntry = Math.sqrt(inputNumber).toString();

            } else {
                currentEntry = "Error"
            }
        } else if (buttonPressed === "x^2") {
            var inputNumber = parseFloat(currentEntry);

            if (!isNaN(inputNumber) && inputNumber >= 0) {
                currentEntry = Math.pow(inputNumber,2).toString();

            } else {
                currentEntry = "Error"
            }
        } else if (buttonPressed === "!") {
            var inputNumber = parseFloat(currentEntry);

            if (!isNaN(inputNumber) && inputNumber >= 0) {
                let fact = 1;
                for (let i =1; i<= inputNumber; i++){
                    fact *= i;

                }
                currentEntry = fact.toString;

            } else {
                currentEntry = "Error"
            }

        }else if (buttonPressed === "pi"){
            currentEntry = 3.14;
        }else if (buttonPressed === "+/-"){
            currentEntry = (-1) * currentEntry
        }
        else if (buttonPressed === "=") {
            currentEntry = operate(prevEntry, currentEntry, operation).toString();
            operation = null;
        }
        updateScreen(currentEntry);
    })
});

updateScreen = function (displayValue) {
    var displayValue = displayValue.toString();
    $(".display").html(displayValue.substring(0, 10))
};

isNumber = function (value) {
    return !isNaN(value)
}

isOperator = function (value) {
    return value === "/" || value === "*" || value === "+" || value === "-";
}

operate = function (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation)
    if (operation === "+") return a + b;
    if (operation === "-") return a - b;
    if (operation === "*") return a * b;
    if (operation === "/") return a / b;
}