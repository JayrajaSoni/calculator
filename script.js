// var input = document.querySelector("#inputBox");
// var buttons = document.querySelectorAll("button")

// let string = "";

// let arr = Array.from(buttons);

// arr.forEach(function(button){
//     button.addEventListener("click",function(e){
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.value == 'DEL'){
//             string = string.substring(0,string.length-1);
//             input.value = string;
            
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }

        
//     })
// })


const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText;

        if (value === 'AC') {
            expression = '';
            inputBox.value = '';
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            inputBox.value = expression;
        } else if (value === '=') {
            try {
                // Convert symbols to valid operators
                expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
                let result = eval(expression);
                inputBox.value = result;
                expression = result.toString();
            } catch {
                inputBox.value = 'Error';
                expression = '';
            }
        } else if (value === '+/-') {
            if (expression) {
                if (expression.startsWith('-')) {
                    expression = expression.slice(1);
                } else {
                    expression = '-' + expression;
                }
                inputBox.value = expression;
            }
        } else {
            // Prevent multiple operators in a row
            const lastChar = expression.slice(-1);
            if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', 'x', '÷'].includes(value)) {
                return;
            }

            expression += value;
            inputBox.value = expression;
        }
    });
});
