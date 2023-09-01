let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('button'));
let operators = ['+', '-', '*', '/'];
let input = '';
let result = '';

buttons.map( button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.value;

        if(buttonText === 'AC') {
            input = '';
            result = '';
            display.value = input;
            return;
        }

        if(buttonText === '=') {
            try {
                result = eval(input);
                display.value = result;
                input = '';
            } catch {
                display.value = "Error!";
            }
            return;
        }

        if(operators.includes(buttonText)) {
            input += ` ${buttonText} `;
        } else {
            input += buttonText;
        }

        display.value = input;
    });
});
