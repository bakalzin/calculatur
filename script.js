// const $numSigns=document.querySelectorAll('.numbres,.sign')

// let  color=["blue" , "red" , "yellow"]
// let age=24
// let name="bakal"
// console.log(colors[0]);
document.addEventListener("DOMContentLoaded", function () {
    // Get the input element
    var inputElement = document.getElementById("input");

    // Add click event listeners to the calculator buttons
    var buttons = document.querySelectorAll(".item");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            handleButtonClick(button.innerText);
        });
    });

    // Function to handle button clicks
    function handleButtonClick(value) {
        switch (value) {
            case "=":
                // Evaluate the expression and update the input
                try {
                    inputElement.value = eval(inputElement.value);
                } catch (error) {
                    inputElement.value = "Error";
                }
                break;
            case "AC":
                // Clear the input
                inputElement.value = "0";
                break;
            case "+/-":
                // Toggle between positive and negative
                inputElement.value = -parseFloat(inputElement.value);
                break;
            case "%":
                // Calculate percentage
                inputElement.value = parseFloat(inputElement.value) / 100;
                break;
            default:
                // Update the input with the button value
                if (inputElement.value === "0" || inputElement.value === "Error") {
                    inputElement.value = value;
                } else {
                    inputElement.value += value;
                }
        }
    }
});
